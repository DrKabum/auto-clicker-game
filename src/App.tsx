import { useEffect, useState } from 'react'
import { Box, CircularProgress, Stack } from '@mui/material'
import { Main, Side, Header } from './components'
import useBeforeUnload from './hooks/useBeforeUnload'
import { saveGame, loadSave } from './utils/utils'
import { upgradablesData } from './classes/upgradables-data'
import { Upgradable } from './classes/upgradable'

const TICK_WAIT = 100
const STARTING_MONEY = 0

export default function App() {
  const [gameLoaded, setGameLoaded] = useState(false)
  const [money, setMoney] = useState(STARTING_MONEY)
  const [tickCount, setTickCount] = useState(0)
  let upgradables = upgradablesData.map((u) => new Upgradable(u))

  let clickUpgradable = upgradables.find((up) => up.name === 'Click')!

  useEffect(() => {
    if (!gameLoaded) {
      setGameLoaded(true)
      const save = loadSave()

      if (save) {
        setMoney(save.money)
        for (const upgradable of upgradables) {
          upgradable.resetValues(
            save.upgradables.find((u) => u.name === upgradable.name)
          )
        }
      }
    }
  }, [])

  const handleButtonPress = () => {
    setMoney((prevMoney) => prevMoney + clickUpgradable.getUnitProduction())
  }

  const resetGame = () => {
    setMoney(STARTING_MONEY)
    for (const up of upgradables) {
      up.resetValues()
    }
  }

  useBeforeUnload(() => saveGame({ money, upgradables }), money)

  useEffect(() => {
    const tick = setTimeout(() => {
      const income = upgradables.reduce(
        (acc, up) => acc + (up.getIncomePerSecond() * TICK_WAIT) / 1000,
        0
      )
      setMoney((prevMoney) => prevMoney + income)
      setTickCount(tick + 1)
    }, TICK_WAIT)
    return () => clearTimeout(tick)
  }, [tickCount])

  return (
    <>
      <Header handleResetGame={resetGame} />
      <Box
        sx={{
          display: gameLoaded ? 'none' : 'flex',
          justifyContent: 'center',
          paddingTop: '6rem',
        }}
      >
        <CircularProgress />
      </Box>
      <Stack
        p={1}
        minHeight='100%'
        alignItems='center'
        sx={{ display: gameLoaded ? 'block' : 'none' }}
      >
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            height: 'calc(100vh - 5em)',
            marginTop: '4em',
          }}
        >
          <Main money={money} handleButtonPress={handleButtonPress} />
          <Side money={money} setMoney={setMoney} upgradables={upgradables} />
        </Stack>
      </Stack>
    </>
  )
}

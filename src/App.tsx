import { useEffect, useState } from 'react'
import { Button, Stack } from '@mui/material'
import { Main, Side, Header } from './components'
import useBeforeUnload from './hooks/useBeforeUnload'
import { saveGame, loadGame, LoadData } from './utils/utils'
import { upgradablesData } from './classes/upgradables-data'
import { Upgradable } from './classes/upgradable'

const TICK_WAIT = 100
const STARTING_MONEY = 0

export default function App() {
  const [savedGame, setSavedGame] = useState<LoadData>(loadGame())
  const [money, setMoney] = useState(savedGame?.money || STARTING_MONEY)
  const [tickCount, setTickCount] = useState(0)
  let upgradables =
    savedGame?.upgradables.map((u) => new Upgradable(u)) ||
    upgradablesData.map((u) => new Upgradable(u))

  const clickUpgradable = upgradables.find((up) => up.name === 'Click')!

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
      <Stack p={1} minHeight='100%' alignItems='center'>
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

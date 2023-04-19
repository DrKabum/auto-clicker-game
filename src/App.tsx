import { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { Main, Side, Header } from './components'
import { Upgradable } from './classes/upgradable'
import { upgradablesData } from './classes/upgradables-data'

export const TICK_WAIT = 1000

export default function App() {
  const [money, setMoney] = useState(1000)
  const [tickCount, setTickCount] = useState(0)
  const upgradables = upgradablesData.map((up) => new Upgradable(up))
  const clickUp = upgradables[0]

  const handleButtonPress = () => {
    setMoney((prevMoney) => prevMoney + clickUp.getIncomePerSecond())
  }

  useEffect(() => {
    const tick = setTimeout(() => {
      const income = upgradables.reduce(
        (acc, up) => acc + up.getIncomePerSecond(),
        0
      )
      setMoney((prevMoney) => prevMoney + income)
      setTickCount(tick + 1)
    }, TICK_WAIT)
    return () => clearTimeout(tick)
  }, [tickCount])

  return (
    <>
      <Header />
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

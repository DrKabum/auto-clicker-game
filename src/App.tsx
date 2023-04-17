import { createContext, useState } from 'react'
import { Stack } from '@mui/material'
import { Main } from './components/main'
import { Side } from './components/side'
import { Header } from './components/header'
import { Upgradable } from './classes/upgradable'
import { upgradablesData } from './classes/upgradables-data'
import { getIncomePerSecond } from './utils/utils'

export const TickWaitContext = createContext(100)

export default function App() {
  const [money, setMoney] = useState(100)
  const [tickContext, setTickContext] = useState(100)
  const upgradables = upgradablesData.map((up) => new Upgradable(up))

  const clickUp = upgradables.filter((up) => up.name === 'Click')[0]

  const handleButtonPress = () => {
    setMoney((prevMoney) => prevMoney + getIncomePerSecond(clickUp))
  }

  return (
    <TickWaitContext.Provider value={tickContext}>
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
    </TickWaitContext.Provider>
  )
}

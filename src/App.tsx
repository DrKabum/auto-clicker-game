import { createContext, useState } from 'react'
import { Stack } from '@mui/material'
import { Main } from './components/main'
import { Side } from './components/side'
import { Header } from './components/header'
import { Footer } from './components/footer'

export const TickWaitContext = createContext(100)

export default function App() {
  const [money, setMoney] = useState(100)
  const [tickContext, setTickContext] = useState(100)

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
          <Main money={money} setMoney={setMoney} />
          <Side money={money} setMoney={setMoney} />
        </Stack>
      </Stack>
    </TickWaitContext.Provider>
  )
}

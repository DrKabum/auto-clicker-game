import { FormEvent, createContext, useState } from 'react'
import { Box, Button, Input, Stack, TextField } from '@mui/material'
import { Main } from './components/main'
import { Side } from './components/side'

export const TickWaitContext = createContext(500)

export default function App() {
  const [money, setMoney] = useState(100)
  const [tickWait, setTickWait] = useState(500)
  const [tickContext, setTickContext] = useState(500)

  const handleTickSubmit = (e: Event | FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTickContext(tickWait)
  }

  return (
    <TickWaitContext.Provider value={tickContext}>
      <Stack p={1} minHeight='100vh' justifyContent='space-between'>
        <Stack
          height='100%'
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Main money={money} setMoney={setMoney} />
          <Side money={money} setMoney={setMoney} />
        </Stack>
        <form onSubmit={(e) => handleTickSubmit(e)}>
          <Stack direction='row'>
            <TextField
              id='tick-wait'
              label='Time between ticks in ms'
              variant='outlined'
              onChange={(e) => setTickWait(Number(e.target.value))}
              value={tickWait}
            />
            <Button onClick={(e) => handleTickSubmit(e)}>Submit</Button>
          </Stack>
        </form>
      </Stack>
    </TickWaitContext.Provider>
  )
}

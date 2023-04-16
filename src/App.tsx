import { useState } from 'react'
import { Stack } from '@mui/material'
import { Main } from './components/main'
import { Side } from './components/side'

export default function App() {
  const [money, setMoney] = useState(0)

  return (
    <Stack
      minHeight='100vh'
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Main money={money} setMoney={setMoney} />
      <Side money={money} setMoney={setMoney} />
    </Stack>
  )
}

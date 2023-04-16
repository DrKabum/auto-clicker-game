import { useState } from 'react'
import Button from '@mui/material/Button'

import { currencyFormat } from './utils/utils'
import { Container, Stack } from '@mui/material'
import { Main } from './components/main'
import { Side } from './components/side'

export default function App() {
  const CLICK_VALUE = 0.1
  const [money, setMoney] = useState(0)
  const [clickLevel, setClickLevel] = useState(1)
  const [levelModifier, setLevelModifier] = useState(1)

  function pressTheButton() {
    setMoney(money + CLICK_VALUE * clickLevel * levelModifier)
  }

  return (
    <Stack
      minHeight='100vh'
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Main money={money} pressTheButton={pressTheButton} />
      <Side />
    </Stack>
  )
}

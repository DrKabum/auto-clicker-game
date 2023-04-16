import { Dispatch, SetStateAction, useState } from 'react'
import { currencyFormat } from './../utils/utils'
import { Typography, Button, Box, Stack } from '@mui/material'

export function Main({
  money,
  setMoney,
}: {
  money: number
  setMoney: Dispatch<SetStateAction<number>>
}) {
  const CLICK_VALUE = 0.1
  const [clickLevel, setClickLevel] = useState(1)
  const [levelModifier, setLevelModifier] = useState(1)

  const handleButtonPress = () => {
    setMoney(
      (prevMoney) => prevMoney + CLICK_VALUE * clickLevel * levelModifier
    )
  }

  return (
    <Box
      flex={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='body1'>{currencyFormat(money)}</Typography>
      <Button variant='contained' onClick={handleButtonPress}>
        Press the button
      </Button>
    </Box>
  )
}

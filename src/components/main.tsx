import { Dispatch, SetStateAction, useState } from 'react'
import { currencyFormat } from './../utils/utils'
import { Typography, Button, Box, Stack } from '@mui/material'
import styled from '@emotion/styled'

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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em',
        width: { md: '60vh' },
      }}
    >
      <Typography variant='body1'>{currencyFormat(money)}</Typography>
      <Button variant='contained' onClick={handleButtonPress}>
        Press the button
      </Button>
    </Box>
  )
}

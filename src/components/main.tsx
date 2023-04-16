import { currencyFormat } from './../utils/utils'
import { Typography, Button, Box, Stack } from '@mui/material'

export function Main({
  money,
  pressTheButton,
}: {
  money: number
  pressTheButton: () => void
}) {
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
      <Button variant='contained' onClick={pressTheButton}>
        Press the button
      </Button>
    </Box>
  )
}

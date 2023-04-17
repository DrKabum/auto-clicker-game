import { currencyFormat } from './../utils/utils'
import { Typography, Button, Box } from '@mui/material'

export function Main({
  money,
  handleButtonPress,
}: {
  money: number
  handleButtonPress: () => void
}) {
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

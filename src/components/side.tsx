import { Box } from '@mui/material'
import { Employee } from './employee'
import { Dispatch, SetStateAction } from 'react'

export function Side({
  money,
  setMoney,
}: {
  money: number
  setMoney: Dispatch<SetStateAction<number>>
}) {
  return (
    <Box flex={2}>
      <Employee money={money} setMoney={setMoney} />
    </Box>
  )
}

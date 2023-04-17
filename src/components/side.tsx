import { Box } from '@mui/material'
import { UpgradableCard } from './upgradableCard'
import Employee from '../classes/employee'
import { Dispatch, SetStateAction } from 'react'
import Robot from '../classes/robot'

export function Side({
  money,
  setMoney,
}: {
  money: number
  setMoney: Dispatch<SetStateAction<number>>
}) {
  const upgradables: Employee[] = [new Employee(), new Robot()]
  return (
    <Box flex={2}>
      {upgradables.map((up, i) => (
        <UpgradableCard
          key={i}
          money={money}
          setMoney={setMoney}
          upgradable={up}
        />
      ))}
    </Box>
  )
}

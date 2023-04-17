import { upgradablesData } from '../classes/upgradables-data'
import { Upgradable } from '../classes/upgradable'
import { Box } from '@mui/material'
import { UpgradableCard } from './upgradableCard'
import { Dispatch, SetStateAction } from 'react'

export function Side({
  money,
  setMoney,
  upgradables,
}: {
  money: number
  setMoney: Dispatch<SetStateAction<number>>
  upgradables: Upgradable[]
}) {
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

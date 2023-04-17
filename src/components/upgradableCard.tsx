import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import AddIcon from '@mui/icons-material/Add'
import { SetStateAction, useEffect, useState, useContext } from 'react'
import { currencyFormat, getIncomePerSecond } from '../utils/utils'
import { Upgradable } from '../classes/upgradable'
import { TickWaitContext } from '../App'

export function UpgradableCard({
  money,
  setMoney,
  upgradable,
}: {
  money: number
  setMoney: React.Dispatch<SetStateAction<number>>
  upgradable: Upgradable
}) {
  const TICK_WAIT = useContext(TickWaitContext)
  const [tickCount, setTickCount] = useState(0)

  const computeIncome = (upgradable: Upgradable) => {
    return (getIncomePerSecond(upgradable) * TICK_WAIT) / 1000
  }

  useEffect(() => {
    const tick = setTimeout(() => {
      if (upgradable.quantity && upgradable.quantity > 0) {
        setMoney((prevMoney) => prevMoney + computeIncome(upgradable))
        setTickCount((prevTickCount) => prevTickCount + 1)
      }
    }, TICK_WAIT)
    return () => clearTimeout(tick)
  }, [tickCount])

  const handleHire = () => {
    upgradable.setQuantity!((prevQuantity) => {
      if (prevQuantity === 0) setTickCount(1)
      return prevQuantity + 1
    })
    upgradable.setPrice!(upgradable.price! * upgradable.priceModifier!)
    setMoney((prevMoney) => prevMoney - upgradable.price!)
  }

  const handleUpgrade = () => {
    upgradable.setLevel((prevLevel) => prevLevel + 1)
    upgradable.setUpgradeCost(
      (prevCost) => prevCost * upgradable.upgradeModifier
    )
    setMoney((prevMoney) => prevMoney - upgradable.upgradeCost)
  }

  return (
    <Card sx={{ margin: '1em' }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {upgradable.name} - Level {upgradable.level}{' '}
          {upgradable.price &&
            `(x${upgradable.quantity}) - Price:
          ${currencyFormat(upgradable.price)}`}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {upgradable.lore}
        </Typography>
        {upgradable.price && (
          <Typography>
            Together they produce{' '}
            {currencyFormat(
              upgradable.quantity! * getIncomePerSecond(upgradable)
            )}{' '}
            per seconde.
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Stack direction='row'>
          {upgradable.price && (
            <Button
              onClick={handleHire}
              startIcon={<AddIcon />}
              size='small'
              disabled={money <= upgradable.price}
            >
              {upgradable.actionButton}
            </Button>
          )}
          <Button
            onClick={handleUpgrade}
            startIcon={<KeyboardArrowUpIcon />}
            size='small'
            disabled={money <= upgradable.upgradeCost}
          >
            Upgrade ({currencyFormat(upgradable.upgradeCost)})
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}

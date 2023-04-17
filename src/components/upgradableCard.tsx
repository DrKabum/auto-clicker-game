import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { SetStateAction, useEffect, useState, useContext } from 'react'
import { currencyFormat } from '../utils/utils'
import Upgradable from '../classes/upgradable'
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

  const [baseProduction, _] = useState(upgradable.baseProduction)
  const [level, setLevel] = useState(upgradable.level)
  const [levelModifier, setLevelModifier] = useState(upgradable.levelModifier)
  const [quantity, setQuantity] = useState(upgradable.quantity)
  const [price, setPrice] = useState(upgradable.basePrice)
  const [tickCount, setTickCount] = useState(0)

  const computeIncome = () => {
    return (
      (baseProduction * level * levelModifier * quantity * TICK_WAIT) / 1000
    )
  }

  useEffect(() => {
    const tick = setTimeout(() => {
      if (quantity > 0) {
        setMoney((prevMoney) => prevMoney + computeIncome())
        setTickCount((prevTickCount) => prevTickCount + 1)
      }
    }, TICK_WAIT)
    return () => clearTimeout(tick)
  }, [tickCount])

  const handleHire = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) setTickCount(1)
      return prevQuantity + 1
    })
    setPrice(price * 1.2)
    setMoney((prevMoney) => prevMoney - price)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='div'>
          {upgradable.name} (x{quantity}) - Price: {currencyFormat(price)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {upgradable.lore}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleHire}
          startIcon={<AddIcon />}
          size='small'
          disabled={money < price}
        >
          Hire
        </Button>
      </CardActions>
    </Card>
  )
}

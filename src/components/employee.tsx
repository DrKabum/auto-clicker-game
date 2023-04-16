import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { SetStateAction, useEffect, useState } from 'react'
import { currencyFormat } from '../utils/utils'

export function Employee({
  money,
  setMoney,
}: {
  money: number
  setMoney: React.Dispatch<SetStateAction<number>>
}) {
  const [baseProduction, setBaseProduction] = useState(0.1)
  const [quantity, setQuantity] = useState(1)
  const [basePrice, setBasePrice] = useState(10)
  const [tickCount, setTickCount] = useState(0)

  useEffect(() => {
    const tick = setTimeout(() => {
      setMoney((prevMoney) => prevMoney + baseProduction * quantity)
      setTickCount(tickCount + 1)
    }, 1e3)
    return () => clearTimeout(tick)
  }, [tickCount])

  const handleHire = () => {
    setQuantity(quantity + 1)
    setBasePrice(basePrice * 1.2)
    setMoney((prevMoney) => prevMoney - basePrice)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='div'>
          Employee (x{quantity}) - Price: {currencyFormat(basePrice)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Hire employees and equip them with their own button. The job
          description is simple: "press the button". Each employee presses the
          button once per second.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleHire}
          startIcon={<AddIcon />}
          size='small'
          disabled={money < basePrice}
        >
          Hire
        </Button>
      </CardActions>
    </Card>
  )
}

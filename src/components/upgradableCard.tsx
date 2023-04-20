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
import React, { useEffect, useState } from 'react'
import { currencyFormat } from '../utils/utils'
import { Upgradable } from '../classes/upgradable'

export function UpgradableCard({
  money,
  setMoney,
  upgradable,
}: {
  money: number
  setMoney: React.Dispatch<React.SetStateAction<number>>
  upgradable: Upgradable
}) {
  const handleHire = () => {
    upgradable.setQuantity!((prevQuantity) => prevQuantity + 1)
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
    <Card
      sx={{
        margin: '1em',
        display: upgradable.isAvailable(money) ? 'block' : 'none',
      }}
    >
      <CardContent>
        <Typography variant='h5' component='div'>
          {upgradable.name} - Level {upgradable.level + 1}{' '}
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
            {currencyFormat(upgradable.getIncomePerSecond())} per seconde.
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

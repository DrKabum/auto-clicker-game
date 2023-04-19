import { SetStateAction, useState } from "react"


export type UpgradableStats = {
  name: string
  lore: string
  basePrice?: number
  baseProduction: number
  baseUpgradeCost: number
  startingQuantity?: number
  levelModifier?: number
  priceModifier?: number
  upgradeModifier?: number
  actionButton?: string
}

export class Upgradable {
  name: string
  lore: string
  production: number
  level: number
  setLevel: React.Dispatch<SetStateAction<number>>
  levelModifier: number
  upgradeCost: number
  setUpgradeCost: React.Dispatch<SetStateAction<number>>
  upgradeModifier: number
  quantity?: number
  setQuantity?: React.Dispatch<SetStateAction<number>>
  price?: number
  setPrice?: React.Dispatch<SetStateAction<number>>
  priceModifier?: number
  actionButton?: string

  constructor(upgradableStats: UpgradableStats) {
    const [level, setLevel] = useState(0)
    this.level = level
    this.setLevel = setLevel
    this.levelModifier = upgradableStats.levelModifier || .1

    if (upgradableStats.startingQuantity !== undefined) {
      const [quantity, setQuantity] = useState(upgradableStats.startingQuantity || 0)
      this.quantity = quantity
      this.setQuantity = setQuantity
    }

    if (upgradableStats.basePrice) {
      const [price, setPrice] = useState(upgradableStats.basePrice)
      this.price = price
      this.setPrice = setPrice
      this.priceModifier = upgradableStats.priceModifier || 1.2
    }

    this.production = upgradableStats.baseProduction
    this.lore = upgradableStats.lore
    this.name = upgradableStats.name

    const [upgradeCost, setUpgradeCost] = useState(upgradableStats.baseUpgradeCost)
    this.upgradeCost = upgradeCost
    this.setUpgradeCost = setUpgradeCost
    this.upgradeModifier = upgradableStats.upgradeModifier || 2

    this.actionButton = upgradableStats.actionButton || 'Buy'
  }

  getUnitProduction(): number {
    return this.production + this.production * this.level * this.levelModifier
  }

  getIncomePerSecond(): number {
    if (this.name === 'Click') return 0
    return this.getUnitProduction() * this.quantity!
  }
}
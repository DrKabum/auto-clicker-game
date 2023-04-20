import { SetStateAction, useState } from "react"


export type UpgradableStats = {
  name: string
  lore: string
  basePrice?: number
  baseProduction: number
  baseUpgradeCost: number
  startingQuantity?: number
  startingLevel?: number
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
  enabled: boolean
  setEnabled: React.Dispatch<SetStateAction<boolean>>
  stats: UpgradableStats
  quantity?: number
  setQuantity?: React.Dispatch<SetStateAction<number>>
  price?: number
  setPrice?: React.Dispatch<SetStateAction<number>>
  priceModifier?: number
  actionButton?: string

  constructor(upgradableStats: UpgradableStats) {
    this.stats = upgradableStats

    const [level, setLevel] = useState(0)
    this.level = level
    this.setLevel = setLevel
    upgradableStats.startingLevel && setLevel(upgradableStats.startingLevel)
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

    const [enabled, setEnabled] = useState(this.name == 'Click')
    this.enabled = enabled
    this.setEnabled = setEnabled

    const [upgradeCost, setUpgradeCost] = useState(upgradableStats.baseUpgradeCost)
    this.upgradeCost = upgradeCost
    this.setUpgradeCost = setUpgradeCost
    this.upgradeModifier = upgradableStats.upgradeModifier || 2

    this.actionButton = upgradableStats.actionButton || 'Buy'
  }

  /**
   * Use this function to get the income of a click.
   * @returns the production per second for one unit of the upgradable
   */
  getUnitProduction(): number {
    return this.production + this.production * this.level * this.levelModifier
  }

  /**
   * Use this function to get the income of any upgradable except the player's click. For this check `Upgradable.getUnitProduction`
   * @returns the total production of an upgradable
   */
  getIncomePerSecond(): number {
    if (this.name === 'Click') return 0
    return this.getUnitProduction() * this.quantity!
  }

  resetValues(): void {
    localStorage.removeItem('button-inc:v1')
    this.setLevel(0)
    this.setQuantity && this.setQuantity(0)
    if (this.stats.basePrice && this.setPrice) {
      this.setPrice(this.stats.basePrice)
    }
    this.setUpgradeCost(this.stats.baseUpgradeCost)
    this.setEnabled(this.name == 'Click')
  }

  isAvailable(money: number): boolean {
    if (this.price && this.enabled == false && money >= this.price * .8) this.setEnabled(true)

    return this.enabled
  }
}
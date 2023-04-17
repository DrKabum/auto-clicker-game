export default class Upgradable {
  level: number
  quantity: number
  basePrice: number
  levelModifier: number
  baseProduction: number
  lore: string
  name: string
  priceModifier: number
  baseUpgradeCost: number
  baseUpgradeModifier: number

  constructor() {
    this.level = 1
    this.quantity = 0
    this.basePrice = 0
    this.levelModifier = 0
    this.baseProduction = 0
    this.lore = ""
    this.name = "Upgradable"
    this.priceModifier = 1.2
    this.baseUpgradeCost = 0
    this.baseUpgradeModifier = 10
  }
}
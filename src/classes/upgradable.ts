export default class Upgradable {
  level: number
  quantity: number
  basePrice: number
  levelModifier: number
  baseProduction: number
  lore: string
  name: string
  id: string

  constructor() {
    this.level = 1
    this.quantity = 0
    this.basePrice = 0
    this.levelModifier = 0
    this.baseProduction = 0
    this.lore = ""
    this.name = "Upgradable"
  }
}
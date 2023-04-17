import Upgradable from "./upgradable"

export default class Employee extends Upgradable {
  constructor() {
    super()
    this.basePrice = 10
    this.levelModifier = 1.1
    this.baseProduction = .1
    this.lore = 'Hire employees and equip them with their own button. The job description is simple: "press the button".Each employee presses the button once per second.'
    this.name = 'Employee'
    this.baseUpgradeCost = 100
  }
}
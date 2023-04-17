import Upgradable from "./upgradable"

export default class Robot extends Upgradable {
  constructor() {
    super()
    this.basePrice = 1000
    this.levelModifier = 1.1
    this.baseProduction = .5
    this.lore = 'Don\'t imagine something fancy here. These robots are actually some kind of stick positioned above a button. The stick presses regularly on a button.'
    this.name = 'Robot'
  }
}
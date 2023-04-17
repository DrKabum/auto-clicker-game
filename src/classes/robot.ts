import Upgradable from "./upgradable"

export default class Robot extends Upgradable {
  constructor() {
    super()
    this.basePrice = 500
    this.levelModifier = 1.1
    this.baseProduction = .5
    this.lore = 'Don\'t imagine something fancy here. These robots are actually some kind of stick positioned above a button and a mechanic that regularly presses it. Still, of course, they are quite better than humans at doing it.'
    this.name = 'Robot'
  }
}
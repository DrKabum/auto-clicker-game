import { UpgradableStats } from "./upgradable";

export const upgradablesData: UpgradableStats[] = [
  {
    name: 'Click',
    lore: 'That\'s you, clicking this button. You can invest in some online training to press this button better.',
    baseProduction: .1,
    baseUpgradeCost: 8,
  },
  {
    name: 'Employee',
    lore: 'Hire employees and equip them with their own button. The job description is simple: "press the button".',
    basePrice: 20,
    baseProduction: .1,
    baseUpgradeCost: 100,
    startingQuantity: 0,
    actionButton: 'Hire'
  }, {
    name: 'Robot Prototype',
    lore: 'Don\'t imagine anything fancy here. These "robots" are just made a of a gear, a rubber band and a stick that presses a button. Still, of course, they are quite better than humans at doing it.',
    basePrice: 500,
    baseProduction: .5,
    baseUpgradeCost: 5000,
    startingQuantity: 0
  }, {
    name: 'Wizard',
    lore: 'These specialised workers use powerful button pressing spells to produce a lot of clicks.',
    basePrice: 12000,
    baseProduction: 10,
    baseUpgradeCost: 25000,
    startingQuantity: 0
  }
]

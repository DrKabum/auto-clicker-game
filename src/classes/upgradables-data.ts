import { UpgradableStats } from "./upgradable";

export const upgradablesData: UpgradableStats[] = [
  {
    name: 'Click',
    lore: 'That\'s you, clicking this button. You can invest in some online training to press this button better.',
    baseProduction: .1,
    baseUpgradeCost: 10,
  },
  {
    name: 'Employee',
    lore: 'Hire employees and equip them with their own button. The job description is simple: "press the button".Each employee presses the button once per second.',
    basePrice: 10,
    baseProduction: .1,
    baseUpgradeCost: 100,
    startingQuantity: 0
  }, {
    name: 'Robot',
    lore: 'Don\'t imagine something fancy here. These robots are actually some kind of stick positioned above a button and a mechanic that regularly presses it. Still, of course, they are quite better than humans at doing it.',
    basePrice: 500,
    baseProduction: .5,
    baseUpgradeCost: 5000,
    startingQuantity: 0
  }
]

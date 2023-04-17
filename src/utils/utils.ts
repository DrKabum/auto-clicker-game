import { Upgradable } from "../classes/upgradable"

export function currencyFormat(amount: number): string {
  const formatter = new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
    compactDisplay: 'short',
    currencyDisplay: 'narrowSymbol'
  })

  return formatter.format(amount)
}

export function getIncomePerSecond({ production, level, levelModifier }: Upgradable): number {
  return production + production * level * levelModifier
}
export function currencyFormat(amount: number): string {
  const formatter = new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
    compactDisplay: 'short',
    currencyDisplay: 'narrowSymbol'
  })

  return formatter.format(amount)
}
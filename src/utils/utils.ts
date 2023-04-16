export function currencyFormat(amount: number): string {
  const formatter = new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
    compactDisplay: 'short'
  })

  return formatter.format(amount)
}
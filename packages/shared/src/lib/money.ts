export function formatPaiseAsRupees(paise: number): string {
  return `₹${(paise / 100).toFixed(2)}`
}

export function rupeesToPaise(rupees: number): number {
  return Math.round(rupees * 100)
}

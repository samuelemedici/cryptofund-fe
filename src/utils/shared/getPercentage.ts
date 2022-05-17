export function getPercentageValue(value: number, total: number): number {
  return Math.ceil((value * 100) / total);
}

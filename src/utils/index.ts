export const formatPrice = (price: string | number): string => {
  if (!price) return 'R$ 0,00'
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  return `R$ ${numPrice.toFixed(2).replace('.', ',')}`
}

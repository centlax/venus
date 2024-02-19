/**
 * "123-foo" will be parsed to 123
 * This is used for the .number modifier in v-model
 */

export function looseToNumber(val: any): any {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

export function isWhiteGray(color: string): boolean {
  return color === 'white' || color === 'gray'
}

export function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(_, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null
}
export function fitColor(str: string, color: string): string {
  return str.replaceAll('{color}', color)
}

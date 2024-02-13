export function safelist(colors: string[], classes: string[]) {
  if (!Array.isArray(colors) || !Array.isArray(classes)) {
    console.error('Invalid input: colors and classes must be arrays.')
    return []
  }

  const generatedClasses: string[] = []

  classes.forEach((cls) => {
    const splitPoint = cls.lastIndexOf(':')
    if (splitPoint === -1) {
      console.error(`Invalid class format: "${cls}" does not contain ':'`)
      return
    }

    const prefix = cls.substring(0, splitPoint)
    const options = cls.substring(splitPoint + 1)

    if (!options) {
      console.error(`Invalid class format: "${cls}" is missing options after ':'`)
      return
    }

    if (options.includes('(')) {
      const optionParts = options.split('(')[1].split(')')[0].split('|')

      optionParts.forEach((option) => {
        colors.forEach((color) => {
          const classString = `${prefix}:${option}-${color}`
          generatedClasses.push(classString)
        })
      })
    } else {
      colors.forEach((color) => {
        const classString = cls.replace('{color}', color)
        generatedClasses.push(classString)
      })
    }
  })
  //console.log(generatedClasses)
  return generatedClasses
}

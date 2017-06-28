export function hexToRgbaArray(colorString, alpha = 1) {
  const color = colorString[0] === '#' ? colorString : `#${colorString}`

  let red
  let green
  let blue
  if (color.length === 7) {
    red = color[1] + color[2]
    green = color[3] + color[4]
    blue = color[5] + color[5]
  } else {
    red = color[1] + color[1]
    green = color[2] + color[2]
    blue = color[3] + color[3]
  }

  return [
    parseInt(red, 16),
    parseInt(green, 16),
    parseInt(blue, 16),
    alpha,
  ]
}

export function anyTypeToRgbaArray(color) {
  if (typeof color === 'object' && color.length === 4) { // RGB array
    return color
  } else if (typeof color === 'object' && color.length === 3) { // RGBA array
    return [...color, 1]
  } else if (typeof color === 'string' && color.length <= 7) { // Hex color string
    return hexToRgbaArray(color)
  } else if (typeof color === 'string' && color.length >= 10) { // CSS RGBA or RGB string
    const colorMatch = color.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(,\s*(\d+))?\)/)
    if (colorMatch) {
      return [
        parseInt(colorMatch[1], 10),
        parseInt(colorMatch[2], 10),
        parseInt(colorMatch[3], 10),
        typeof colorMatch[5] !== 'undefined' ? parseInt(colorMatch[5], 10) : 1,
      ]
    }
  }
  throw new Error('Unknown color type.')
}

export function rgbaArrayToRgbaCss([red, green, blue, alpha = 1]) {
  return `rgba(${red},${green},${blue},${alpha})`
}

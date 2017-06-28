import { anyTypeToRgbaArray, rgbaArrayToRgbaCss } from './color'
import mapRange from './mapRange'

export class LinearGradient {
  constructor(fromColor, toColor) {
    this.fromColor = anyTypeToRgbaArray(fromColor)
    this.toColor = anyTypeToRgbaArray(toColor)
  }

  cssGradient() {
    return `linear-gradient(to right, ${rgbaArrayToRgbaCss(this.fromColor)}, ${rgbaArrayToRgbaCss(this.toColor)})`
  }
}

export default class LinearGradientRange extends LinearGradient {
  constructor(fromColor, toColor, fromValue = 0, toValue = 100) {
    super(fromColor, toColor)
    this.fromValue = fromValue
    this.toValue = toValue
  }

  partition(fromValue, toValue) {
    return new LinearGradient([
      Math.floor(mapRange(fromValue, this.fromValue, this.toValue, this.fromColor[0], this.toColor[0])),
      Math.floor(mapRange(fromValue, this.fromValue, this.toValue, this.fromColor[1], this.toColor[1])),
      Math.floor(mapRange(fromValue, this.fromValue, this.toValue, this.fromColor[2], this.toColor[2])),
      Math.floor(mapRange(fromValue, this.fromValue, this.toValue, this.fromColor[3], this.toColor[3])),
    ], [
      Math.floor(mapRange(toValue, this.fromValue, this.toValue, this.fromColor[0], this.toColor[0])),
      Math.floor(mapRange(toValue, this.fromValue, this.toValue, this.fromColor[1], this.toColor[1])),
      Math.floor(mapRange(toValue, this.fromValue, this.toValue, this.fromColor[2], this.toColor[2])),
      Math.floor(mapRange(toValue, this.fromValue, this.toValue, this.fromColor[3], this.toColor[3])),
    ])
  }
}

export default function mapRange(value, relativeMin, relativeMax, resultMin, resultMax) {
  return resultMin + (resultMax - resultMin) * (value - relativeMin) / (relativeMax - relativeMin)
}

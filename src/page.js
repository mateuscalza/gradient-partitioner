import GradientPartitioner from './gradient'

function mount() {
  const range = new GradientPartitioner('#F05F57', '#360940', 0, 100)

  // Part A
  const partA = document.getElementById('part-a')
  partA.style.background = range.partition(0, 100).cssGradient()

  // Part B
  const partB = document.getElementById('part-b')
  partB.style.background = range.partition(0, 45).cssGradient()

  // Part C
  const partC = document.getElementById('part-c')
  partC.style.background = range.partition(55, 100).cssGradient()

  // Part D
  const partD = document.getElementById('part-d')
  partD.style.background = range.partition(0, 26.66).cssGradient()

  // Part E
  const partE = document.getElementById('part-e')
  partE.style.background = range.partition(36.66, 63.31).cssGradient()

  // Part F
  const partF = document.getElementById('part-f')
  partF.style.background = range.partition(73.31, 100).cssGradient()

  // Part G
  const partG = document.getElementById('part-g')
  partG.style.background = range.cssGradient()
}

mount()

export default mount

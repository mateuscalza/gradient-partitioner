/*
  Gradient test
*/

/* global describe, it, expect */

import GradientPartitioner from '../src/index'

describe('Gradient', () => {
  it('should find first partition color', () => {
    const range = new GradientPartitioner('#FED', '#012', 0, 100)
    const partition = range.partition(25, 75)
    expect(partition.fromColor).toEqual([191, 182, 174, 1])
  })

  it('should find second partition color', () => {
    const range = new GradientPartitioner('#FED', '#012', 0, 100)
    const partition = range.partition(25, 75)
    expect(partition.toColor).toEqual([63, 72, 80, 1])
  })

  it('should partition color generate a valid css rule', () => {
    const range = new GradientPartitioner('#FED', '#012', 0, 100)
    const partition = range.partition(25, 75)
    expect(partition.cssGradient()).toEqual('linear-gradient(to right, rgba(191,182,174,1), rgba(63,72,80,1))')
  })
})

import { spareGame } from './sparegame'

describe('Playing ', () => {
  it('should return 0 if player missed all turns', () => {
    const input = '--,--,--,--,--,--,--,--,--,--'
    const output = 0

    const result = spareGame(input)

    expect(result).toEqual(output)
  })

  it('should return 69 if player did a simple score', () => {
    const input = '21,22,23,24,26,26,27,27,27,17'
    const output = 69

    const result = spareGame(input)

    expect(result).toEqual(output)
  })

  it('should return 73 if player did a simple score with a spare', () => {
    const input = '5/,22,23,24,26,26,27,25,24,17'
    const output = 73

    const result = spareGame(input)

    expect(result).toEqual(output)
  })

  it('should return 104 if player did a simple score with a strike', () => {
    const input = 'X,22,23,24,26,26,27,28,28,17'
    const output = 73

    const result = spareGame(input)

    expect(result).toEqual(output)
  })
})

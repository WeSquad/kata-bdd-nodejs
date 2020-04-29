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
})

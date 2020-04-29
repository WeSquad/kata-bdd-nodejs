import { spareGame } from './sparegame'

describe('Playing ', () => {
  it('should return 0 if player missed all turns', () => {
    const input = '--,--,--,--,--,--,--,--,--,--'
    const output = 0

    const result = spareGame(input)

    expect(result).toEqual(output)
  })
})

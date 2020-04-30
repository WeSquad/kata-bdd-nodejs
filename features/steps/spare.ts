import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import { spareGame } from '../../src/spareGame'

Given('player made the following score {string}', function (scorep: string) {
  this.score = scorep
})

When('we calculate his final score', function () {
  this.gameResult = spareGame(this.score)
})

Then('the result should be {int}', function (total: number) {
  expect(this.gameResult).to.equals(total)
})

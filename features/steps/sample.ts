import { When, Then } from 'cucumber'
import { expect } from 'chai'

When('I want to log {string}', function (log: string) {
  this.log = log
})

Then('the response equals {string}', function (log: string) {
  expect(log).to.equals(this.log)
})

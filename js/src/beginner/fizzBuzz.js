import { strict as assert } from 'node:assert'
import logger from '../utils.js'

function fizzBuzz(n) {
  const mapFizzBuzz = (i) => {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        return 'FizzBuzz'
      case i % 3 === 0:
        return 'Fizz'
      case i % 5 === 0:
        return 'Buzz'
      default:
        return String(i)
    }
  }
  return Array(n)
    .fill(null)
    .map((_, i) => mapFizzBuzz(i + 1))
}

export function test() {
  logger.log('Running test for fizz buzz')
  assert.deepEqual(fizzBuzz(3), ['1', '2', 'Fizz'])
  logger.log('All test passed!')
}

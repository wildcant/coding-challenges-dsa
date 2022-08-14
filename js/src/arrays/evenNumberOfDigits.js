import { strict as assert } from 'node:assert'
import logger from '../utils.js'

// Vanilla!!
function findNumbersVanilla(numbers) {
  let count = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].toString().length % 2 === 0) {
      count += 1
    }
  }
  return count
}

// Sugar!!
function findNumbers(numbers) {
  let count = 0
  numbers.forEach((n) => {
    if (String(n).split('').length % 2 === 0) {
      count += 1
    }
  })
  return count
}

export function testDy(fn) {
  logger.log('Running test for findNumbers')
  assert.deepEqual(fn([12, 345, 2, 6, 7896]), 2)
  assert.deepEqual(fn([555, 901, 482, 1771]), 1)
  logger.log('All test passed!')
}

export function test() {
  testDy(findNumbers)
}

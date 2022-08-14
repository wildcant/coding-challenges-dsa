import { strict as assert } from 'node:assert'
import logger from '../utils.js'

function findMaxConsecutiveOnes(numbers) {
  let max = 0
  let count = 0
  numbers.forEach((n) => {
    if (n === 1) {
      count += 1
      max = count > max ? count : max
    } else {
      count = 0
    }
  })
  return max
}

export function test() {
  logger.log('Running test for findMaxConsecutiveOnes')
  assert.deepEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3)
  assert.deepEqual(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2)
  logger.log('All test passed!')
}

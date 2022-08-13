import { strict as assert } from 'node:assert'
import logger from '../utils.js'

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function runningSum(numbers) {
  const results = []
  results[0] = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    results[i] = results[i - 1] + numbers[i]
  }

  return results
}

export function test() {
  const a = logger.log('Running tests for runningSum()')
  assert.deepEqual(runningSum([1, 2, 3, 4]), [1, 3, 6, 10])
  assert.deepEqual(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5])
  assert.deepEqual(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17])
  logger.log('All tests passed!')
}

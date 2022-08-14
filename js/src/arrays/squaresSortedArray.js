import { strict as assert } from 'node:assert'
import logger from '../utils.js'

function sortedSquares(numbers) {
  let results = numbers.map((n) => Math.pow(n, 2))
  results.sort((a, b) => a - b)
  return results
}

export function test() {
  logger.log('Running test for sortedSquares')
  assert.deepEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])
  assert.deepEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121])
  logger.log('All test passed!')
}

import { strict as assert } from 'node:assert'
import logger from '../utils.js'

function numberOfSteps(num) {
  let count = 0
  while (num > 0) {
    count++
    Number(num & 1) === 0 ? (num >>= 1) : num--
  }
  return count
}

export function test() {
  logger.log('Running test for numberOfSteps')
  assert.deepEqual(numberOfSteps(14), 6)
  assert.deepEqual(numberOfSteps(8), 4)
  assert.deepEqual(numberOfSteps(123), 12)
  logger.log('All test passed!')
}

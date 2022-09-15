import { strict as assert } from 'node:assert'
import logger from '../utils.js'

/**
 * @arg {Number} nums sorted in non decreasing
 */
function removeDuplicates(nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (!nums.slice(0, j).includes(nums[j])) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let expectedNums = [0, 1, 2, 3, 4]
const k = removeDuplicates(nums)

logger.log('Running test for array:removeElement')
assert.equal(k, expectedNums.length)
for (let i = 0; i < k; i++) {
  assert.equal(nums[i], expectedNums[i])
}
logger.log('Running test for array:removeElement')

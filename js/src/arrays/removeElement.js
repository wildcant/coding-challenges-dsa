import { strict as assert } from 'node:assert'
import logger from '../utils.js'

const shift = (nums, idx) => {
  for (let i = idx + 1; i < nums.length; i++) {
    nums[i - 1] = nums[i]
  }
  nums[nums.length - 1] = undefined
}
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElementFirst(nums, val) {
  let deletedValues = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === val) {
      shift(nums, j)
      deletedValues += 1
      j -= 1
    }
  }

  return nums.length - deletedValues
}

function removeElementSecond(nums, val) {
  let deletedValues = 0
  let step = 0
  const length = nums.length
  for (let j = 0; j < length; j++) {
    if (j > length - deletedValues) {
      nums[j] = null
    }
    if (nums[j] === val) {
      while (nums[j + step] === val) {
        step += 1
        deletedValues += 1
      }
    }
    if (step !== 0) {
      if (nums[j + step] === val) {
        while (nums[j + step] === val) {
          step += 1
          deletedValues += 1
        }
      }

      nums[j] = nums[j + step]
    }
  }

  return length - deletedValues
}

function removeElement(nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  // nums.splice(i, nums.length - i) // uncomment to pass test.
  return i
}

logger.log('Running test for array:removeElement')
const nums = [3, 2, 2, 3]
let val = 3
let expectedNums = [2, 2]
const k = removeElement(nums, val)
assert.deepStrictEqual(nums, expectedNums)
logger.log('All test passed!')

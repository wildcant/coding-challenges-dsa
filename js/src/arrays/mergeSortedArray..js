import { strict as assert } from 'node:assert'
import logger from '../utils.js'

/**
 * Conditions:
 * 1. must return nums1
 * 2. nums1.length = m + n
 * 3. nums2.length = n
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2 is an array of numbers
 * @param {number} n is nums2 length
 * @returns number[] ascending order (1-2-3-4)
 */

function merge(nums1, m, nums2, n) {
  if (n === 0) return nums1
  const copy = nums1.slice(0, m)

  for (let i = 0; i < n + m; i++) {
    if (typeof copy[0] !== 'undefined' && typeof nums2[0] !== 'undefined') {
      nums1[i] = copy[0] < nums2[0] ? copy.shift() : nums2.shift()
    } else if (
      typeof copy[0] === 'undefined' &&
      typeof nums2[0] !== 'undefined'
    ) {
      nums1[i] = nums2.shift()
    } else if (
      typeof copy[0] !== 'undefined' &&
      typeof nums2[0] === 'undefined'
    ) {
      nums1[i] = copy.shift()
    }
  }

  return nums1
}

export function test() {
  logger.log('Running test for merge')
  assert.deepStrictEqual(
    merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
    [1, 2, 2, 3, 5, 6]
  )
  assert.deepStrictEqual(merge([1], 1, [], 0), [1])
  assert.deepStrictEqual(merge([0], 0, [1], 1), [1])
  assert.deepStrictEqual(merge([2, 0], 1, [1], 1), [1, 2])
  assert.deepStrictEqual(merge([-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1, [-49,-45,-42,-41,-40,-39,-39,-39,-38,-36,-34,-34,-33,-33,-32,-31,-29,-28,-26,-26,-24,-21,-20,-20,-18,-16,-16,-14,-11,-7,-6,-5,-4,-4,-3,-3,-2,-2,-1,0,0,0,2,2,6,7,7,8,10,10,13,13,15,15,16,17,17,19,19,20,20,20,21,21,22,22,24,24,25,26,27,29,30,30,30,35,36,36,36,37,39,40,41,42,45,46,46,46,47,48], 90), [-49,-45,-42,-41,-40,-39,-39,-39,-38,-36,-34,-34,-33,-33,-32,-31,-29,-28,-26,-26,-24,-21,-20,-20,-18,-16,-16,-14,-12,-11,-7,-6,-5,-4,-4,-3,-3,-2,-2,-1,0,0,0,2,2,6,7,7,8,10,10,13,13,15,15,16,17,17,19,19,20,20,2

  logger.log('All test passed!')
}

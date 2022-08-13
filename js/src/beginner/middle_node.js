import { strict as assert } from 'node:assert'
import logger from '../utils.js'

/**
 * Definition for singly-linked list.
 */
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 *
 * @param {ListNode} head
 * @return {ListNode} middleNode
 */
/*
1. get the length of the linked list
// if length is even then we have two middle nodes. so we get the larger.
2. if length % 2 == 0 -> middle index = length / 2 + 1
   else -> middle index = length / 2
*/
export function middleNode(head) {
  let length = 1
  let currentNode = head
  while (currentNode.next !== null) {
    currentNode = currentNode.next
    length += 1
  }

  let currentMiddleNode = head
  console.log(length)
  console.log(length / 2)
  for (let i = 0; i < length / 2; i++) {
    currentMiddleNode = currentMiddleNode.next
  }
  return currentMiddleNode
}

export function test() {
  logger.log('Running tests for middleNode()')
  const head = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))
    )
  )
  assert.deepEqual(middleNode(head).val, 4)
  logger.log('All tests passed!')
}

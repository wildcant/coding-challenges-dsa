import { strict as assert } from 'node:assert'
import logger from '../utils.js'

/**
 * @param {number[][]} accounts
 * @return {number}
 */
export function richestCustomer(accounts) {
  let maxWealthSoFar = 0
  accounts.forEach((customer) => {
    let currentCustomerWealth = 0
    customer.forEach((bank) => {
      currentCustomerWealth += bank
    })
    if (currentCustomerWealth > maxWealthSoFar) {
      maxWealthSoFar = currentCustomerWealth
    }
  })
  return maxWealthSoFar
}

export function test() {
  logger.log('Running tests for richestCustomer')
  assert.deepEqual(
    richestCustomer([
      [1, 2, 3],
      [3, 2, 1],
    ]),
    6
  )
  assert.deepEqual(
    richestCustomer([
      [1, 5],
      [7, 3],
      [3, 5],
    ]),
    10
  )
  assert.deepEqual(
    richestCustomer([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ]),
    17
  )
  logger.log('All tests passed!')
}

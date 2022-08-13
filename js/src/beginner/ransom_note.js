import { strict as assert } from 'node:assert'
import logger from '../utils.js'

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  for (const char of ransomNote.split('')) {
    if (!magazine.includes(char)) {
      return false
    } else {
      magazine = magazine.replace(char, '')
    }
  }

  return true
}

export function test() {
  logger.log('Running tests for canConstruct')
  assert(canConstruct('aa', 'aa'))
  assert(!canConstruct('a', 'b'))
  assert(!canConstruct('aaa', 'bbb'))
  logger.log('All tests passed!')
}

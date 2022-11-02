/* 
Merge Strings Alternately (https://leetcode.com/problems/merge-strings-alternately/)
- Given two strings word1 and word2.
- Merge the strings by adding letters in alternating order, starting with word1.
- If a string is longer than the other, append the additional letters into the end of the merged string
- Return the merged string.
*/

// ---- Test Cases ----
const testCase1 = {
  word1: 'abc',
  word2: 'pqr',
} // 'apbqcr'

const testCase2 = {
  word1: 'ab',
  word2: 'pqrs',
} // 'apbqrs'

const testCase3 = {
  word1: 'abcd',
  word2: 'pq',
} // 'apbqcd'

// ---- Solution ----
/**
 * Merge strings by adding letters in alternating order, starting with word1
 * @param {string} word1 
 * @param {string} word2 
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  let p1 = 0
  let p2 = 0

  let mergedStringArr = []

  while (p1 < word1.length || p2 < word2.length) {
    if (word1[p1]) {
      mergedStringArr.push(word1[p1])
      p1++
    }
    if (word2[p2]) {
      mergedStringArr.push(word2[p2])
      p2++
    }
  }

  return mergedStringArr.join('')
}

console.log(mergeAlternately(testCase1.word1, testCase1.word2)) // 'apbqcr'
console.log(mergeAlternately(testCase2.word1, testCase2.word2)) // 'apbqrs'
console.log(mergeAlternately(testCase3.word1, testCase3.word2)) // 'apbqcd'


// ---- Space and Time Complexity ----
/*
word1.length = n, word2.length = m

Time: O(n + m)
Space: O(n + m)
*/

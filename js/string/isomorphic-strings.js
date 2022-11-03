/* 
Isomorphic Strings (https://leetcode.com/problems/isomorphic-strings/)
- Given two strings s and t, determine if they are isomorphic

Definition of isomorphic strings:
All occurrences of a character must be replaced with another character while preserving the order of characters
No two characters may map to the same character, but a character may map to itself
*/

// ---- Test Cases ----
const testCase1 = {
  s: 'egg',
  t: 'add',
} // true

const testCase2 = {
  s: 'foo',
  t: 'bar',
} // false

const testCase3 = {
  s: 'abbcda',
  t: 'ebbghe',
} // true

const testCase4 = {
  s: 'a',
  t: 'y'
} // true

const testCase5 = {
  s: 'babc',
  t: 'baba',
} // false

const testCase6 = {
  s: 'baba',
  t: 'babc',
} // false

// ---- Solution ----
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length === 1) return true

  const sCharMap = new Map()
  const tCharMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const currentS = s[i]
    const currentT = t[i]

    if ((sCharMap.has(currentS) && sCharMap.get(currentS) !== currentT) ||
      (tCharMap.has(currentT) && tCharMap.get(currentT) !== currentS)
    ) return false

    sCharMap.set(currentS, currentT)
    tCharMap.set(currentT, currentS)
  }
  return true
};

console.log(isIsomorphic(testCase1.s, testCase1.t))
console.log(isIsomorphic(testCase2.s, testCase2.t))
console.log(isIsomorphic(testCase3.s, testCase3.t))
console.log(isIsomorphic(testCase4.s, testCase4.t))
console.log(isIsomorphic(testCase5.s, testCase5.t))
console.log(isIsomorphic(testCase6.s, testCase6.t))

// ---- Space and Time Complexity ----
/*
Time: O(s+t)
Space: O(s+t)
*/

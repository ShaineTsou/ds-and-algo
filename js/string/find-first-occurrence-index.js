/* 
Find the Index of the First Occurrence in a String (https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- Given two strings needle and haystack, 
- return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack
*/

// ---- Test Cases ----
const testCase1 = {
  haystack: 'sadbutsad',
  needle: 'sad',
} // 0

const testCase2 = {
  haystack: 'supersad',
  needle: 'sad',
} // 5

const testCase3 = {
  haystack: 'notsad',
  needle: 'sad',
} // 3

const testCase4 = {
  haystack: 'justhappy',
  needle: 'sad',
} // -1

const testCase5 = {
  haystack: 'leetcode',
  needle: 'k',
} // -1

const testCase6 = {
  haystack: 'a',
  needle: 'a',
} // 0

// ---- Solution ----
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = (haystack, needle) => {
  const needleLength = needle.length
  const haystackLength = haystack.length

  for (let i = 0; i < haystackLength; i++) {
    if (haystack[i] === needle[0] &&
      i + needleLength <= haystackLength &&
      haystack.slice(i, i + needleLength) === needle) {
      return i
    }
  }
  return -1
};

console.log(strStr(testCase1.haystack, testCase1.needle))
console.log(strStr(testCase2.haystack, testCase2.needle))
console.log(strStr(testCase3.haystack, testCase3.needle))
console.log(strStr(testCase4.haystack, testCase4.needle))
console.log(strStr(testCase5.haystack, testCase5.needle))
console.log(strStr(testCase6.haystack, testCase6.needle))


// ---- Space and Time Complexity ----
/*
haystack.length = h, needle.length = n

Time: O(h)
Space: O(h + n)
*/

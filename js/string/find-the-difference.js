/* 
Find the Difference (https://leetcode.com/problems/find-the-difference/)
- Given tw strings s and t
- String t is generated by random shuffling string s and then add one more letter at a random position
- Return the letter added to t
You are given two strings s and t.
*/

// ---- Test Cases ----
const testCase1 = {
  s: "abcd",
  t: "abcde",
}; // 'e'

const testCase2 = {
  s: "",
  t: "y",
}; // 'y

const testCase3 = {
  s: "a",
  t: "aa",
}; // 'a'

// ---- Solution ----
const getCharMap = (string) => {
  if (!string) return {}

  return string.split('').reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1
    } else {
      acc[char]++
    }
    return acc
  }, {})
}

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sCharMap = getCharMap(s)
  const tCharMap = getCharMap(t)

  for (let [tChar, tCharCount] of Object.entries(tCharMap)) {
    if (!sCharMap[tChar] || sCharMap[tChar] !== tCharCount) return tChar
  }
  return null
};

console.log(findTheDifference(testCase1.s, testCase1.t));
console.log(findTheDifference(testCase2.s, testCase2.t));
console.log(findTheDifference(testCase3.s, testCase3.t));

// ---- Space and Time Complexity ----
/*
String s has n characters, string t has m characters
Time: O(n + 2m)
Space: O(n + 2m)
*/
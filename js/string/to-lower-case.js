/* 
To Lower Case (https://leetcode.com/problems/to-lower-case/)
- Given a string s
- Return the string after replacing every uppercase letter with the same lowercase letter.
*/

// ---- Test Cases ----
const testCase1 = 'hELlo@#!' // hello@#!
const testCase2 = 'A' // a
const testCase3 = 'a' // a
const testCase4 = '' // ''

// ---- Solution ----
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  if (!s) return ''

  const charArr = s.split('')
  const uppercaseRegex = new RegExp(/^[A-Z]$/)

  return charArr.map((char) => {
    if (uppercaseRegex.test(char)) {
      const charCode = char.charCodeAt(0)
      return String.fromCharCode(charCode + 32)
    }
    return char
  }).join('')
};

console.log(toLowerCase(testCase1))
console.log(toLowerCase(testCase2))
console.log(toLowerCase(testCase3))
console.log(toLowerCase(testCase4))

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

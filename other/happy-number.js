/* 
Happy Number (https://leetcode.com/problems/happy-number/)
A happy number is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits
- Repeat until the number equals 1, which means the number is happy, return true
- If it loops endlessly in a cycle, which means the number is not happy, return false

Constraints:
- The number is at least 1
*/

// ---- Test Cases ----
const testCase1 = 19; // true
const testCase2 = 2; // false

// ---- Solution ----
const transformNumber = (num) => {
  const digits = num.toString().split('')

  return digits.reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0)
}

const isHappy = (n, existingNums = {}) => {
  if (n === 1) return true

  if (existingNums[n]) return false

  existingNums[n] = true

  return isHappy(transformNumber(n), existingNums)
};

console.log(isHappy(testCase1)); // true
console.log(isHappy(testCase2)); // false

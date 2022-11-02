/*
Contains Duplicate (https://leetcode.com/problems/contains-duplicate/)
- Given an array of nums, return true if any value appears at least twice
- Otherwise, return false
*/

// ---- Test Cases ----
const testCase1 = [1, 2, 3, 1] // true
const testCase2 = [1, 1, 1, 1, 1] // true
const testCase3 = [3, 1, 2, 10] // false
const testCase4 = [2] // false

// ---- Solution ----
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const containsDuplicate = (nums) => {
  // check param
  if (!Array.isArray(nums) || nums.length < 1 || nums.length > 1000) return

  const seenMap = {}

  for (let num of nums) {
    if (seenMap[num]) return true
    seenMap[num] = true
  }
  return false
}

console.log(containsDuplicate(testCase1))
console.log(containsDuplicate(testCase2))
console.log(containsDuplicate(testCase3))
console.log(containsDuplicate(testCase4))

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/

/*
Running Sum of 1d Array (https://leetcode.com/problems/running-sum-of-1d-array/)
* Definition of Running Sum:
  an array where element at index i is the sum of elements from 0 to index i (inclusive)

- Given an array of nums, return the running sum of nums.

Constraints:
- Numbers can be non-positive
- 1 <= nums.length <= 1000
- every element in nums is number
*/

// ---- Test Cases ----
const testCase1 = [1, 2, 3, 4] // [1, 3, 6, 10]
const testCase2 = [1, 1, 1, 1, 1] // [1, 2, 3, 4, 5]
const testCase3 = [3, 1, 2, 10, 1] // [3, 4, 6, 16, 17]
const testCase4 = [2] // [2]
const testCase5 = [-3, 9, 0, -2, 8] // [-3, 6, 6, 4, 12]

// ---- Solution ----
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  // check param
  if (!Array.isArray(nums) || nums.length < 1 || nums.length > 1000) return

  let sum = 0
  return nums.map((e) => {
    sum += e
    return sum
  })
}

console.log(runningSum(testCase1))
console.log(runningSum(testCase2))
console.log(runningSum(testCase3))
console.log(runningSum(testCase4))
console.log(runningSum(testCase5))

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

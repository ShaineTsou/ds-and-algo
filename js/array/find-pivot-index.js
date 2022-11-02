/*
Find Pivot Index (https://leetcode.com/problems/find-pivot-index/)
* Definition of Pivot Index:
  The pivot index is the index where the sum of all the numbers strictly to the left of the index
  is equal to the sum of all the numbers strictly to the index's right.
  If pivot index is on the left edge of the array, then the left sum is 0 and vice versa.

- Given an array of intgers nums, return the leftmost pivot index.
- If no such index, return -1

Constraints:
- nums at least has 1 element
*/

// ---- Test Cases ----
const testCase1 = [1, 7, 3, 6, 5, 6] // 3
const testCase2 = [1, 2, 3] // -1
const testCase3 = [2, 1, -1] // 0
const testCase4 = [0, 0, 0, 0] // 0
const testCase5 = [0, 0, 0, 2, -1, 1] // 3

// ---- Solution ----
/**
 *
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  if (nums.length <= 1) return 0

  const total = nums.reduce((acc, cur) => acc += cur)
  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === (total - leftSum - nums[i])) return i
    leftSum += nums[i]
  }
  return -1
}

console.log(pivotIndex(testCase1))
console.log(pivotIndex(testCase2))
console.log(pivotIndex(testCase3))
console.log(pivotIndex(testCase4))
console.log(pivotIndex(testCase5))

// ---- Space and Time Complexity ----
/*
Time: O(2n)
Space: O(1)
*/

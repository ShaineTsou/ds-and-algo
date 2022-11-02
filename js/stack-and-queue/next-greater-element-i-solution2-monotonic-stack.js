/* 
Next Greater Element I (https://leetcode.com/problems/next-greater-element-i/)
- Definition: 
  The next greater element of some element x in an array is the first greater element that is to the right of x in the same array

- Given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2
- Return an array containing the next greater element of each element of nums1 in the nums2 array.
- If there's no next greater element, the next greater element of that element can be represented as -1

Constraints:
- There are no duplicates in both arrays
- There are at least 1 element in each array
*/

// ---- Test Cases ----
const testCase1 = {
  nums1: [4, 1, 2],
  nums2: [1, 3, 4, 2],
} // [-1, 3, -1]

const testCase2 = {
  nums1: [2, 4],
  nums2: [1, 2, 3, 4],
} // [3, -1]

const testCase3 = {
  nums1: [3],
  nums2: [3],
} // [-1]

// ---- Solution 2 (Monotonic Stack) ----
const nextGreaterElement2 = (nums1, nums2) => {
  // Use monotonic stack solution
  // Reference: https://medium.com/@vishnuvardhan623/monotonic-stack-e9dcc4fa8c3e
}

console.log(nextGreaterElement2(testCase1.nums1, testCase1.nums2)) // [-1, 3, -1]
console.log(nextGreaterElement2(testCase2.nums1, testCase2.nums2)) // [3, -1]
console.log(nextGreaterElement2(testCase3.nums1, testCase3.nums2)) // [-1]

// ---- Space and Time Complexity 1 ----
/*
Assume nums1 has n elements, and nums2 has m elements

Time: O()
Space: O()
*/

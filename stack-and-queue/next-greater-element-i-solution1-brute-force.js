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

// ---- Solution 1 (Brute force) ----
const nextGreaterElement1 = (nums1, nums2) => {
  const ans = nums1.map(() => -1)

  for (let p1 = 0; p1 < nums1.length; p1++) {
    let targetIndex = Infinity

    for (let p2 = 0; p2 < nums2.length; p2++) {
      if (p2 > targetIndex) {
        if (nums2[p2] > nums2[targetIndex]) {
          ans[p1] = nums2[p2]
          break
        }
      }

      if (nums1[p1] === nums2[p2]) {
        targetIndex = p2
      }
    }
  }
  return ans
}

console.log(nextGreaterElement1(testCase1.nums1, testCase1.nums2)) // [-1, 3, -1]
console.log(nextGreaterElement1(testCase2.nums1, testCase2.nums2)) // [3, -1]
console.log(nextGreaterElement1(testCase3.nums1, testCase3.nums2)) // [-1]

// ---- Space and Time Complexity 1 ----
/*
Assume nums1 has n elements, and nums2 has m elements

Time: O(n * m)
Space: O(n)
*/

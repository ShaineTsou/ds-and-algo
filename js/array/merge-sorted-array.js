/*
Merge Sorted Array (https://leetcode.com/problems/merge-sorted-array/)
- Given two integer arrays nums1 and nums2, sorted in non-decreasing order
- And given two integers m and n, representing the number of elements
- nums1 has a length of m + n, where the last n elements are set to 0 and should be ignored

- Merge nums2 into nums1 in-place and then nums1 should be sorted in non-decreasing order
*/

// ---- Test Cases ----
const testCase1 = {
  nums1: [1, 2, 3, 0, 0, 0],
  m: 3,
  nums2: [2, 5, 6],
  n: 3,
} // [1, 2, 2, 3, 5, 6]

const testCase2 = {
  nums1: [2, 4, 7, 8, 0, 0, 0],
  m: 4,
  nums2: [1, 2, 6],
  n: 3,
} // [1, 2, 2, 4, 6, 7, 8]

const testCase3 = {
  nums1: [1, 2],
  m: 2,
  nums2: [],
  n: 0,
} // [1, 2]

const testCase4 = {
  nums1: [0],
  m: 0,
  nums2: [2],
  n: 1,
} // [2]

// ---- Solution 1: Using another array ----
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (allNums, m, nums2, n) {
  let index = 0
  let p1 = 0
  let p2 = 0

  const bulkReplace = (arr, pointer) => {
    for (let i = index; i < allNums.length; i++) {
      allNums[i] = arr[pointer]
      pointer++
    }
  }

  // Handle edge cases
  if (n === 0) return
  if (m === 0) {
    bulkReplace(nums2, 0)
    return
  }

  // Handle happy cases
  const nums1 = allNums.slice(0, m)

  while ((p1 < nums1.length) && (p2 < nums2.length)) {
    if (nums1[p1] < nums2[p2]) {
      allNums[index] = nums1[p1]
      p1++
    } else {
      allNums[index] = nums2[p2]
      p2++
    }
    index++
  }

  if (p2 >= nums2.length) {
    bulkReplace(nums1, p1)
  } else {
    bulkReplace(nums2, p2)
  }
};

merge(testCase1.nums1, testCase1.m, testCase1.nums2, testCase1.n)
merge(testCase2.nums1, testCase2.m, testCase2.nums2, testCase2.n)
merge(testCase3.nums1, testCase3.m, testCase3.nums2, testCase3.n)
merge(testCase4.nums1, testCase4.m, testCase4.nums2, testCase4.n)

console.log(testCase1.nums1)
console.log(testCase2.nums1)
console.log(testCase3.nums1)
console.log(testCase4.nums1)

// ---- Space and Time Complexity 1 ----
/*
Time: O(m+n)
Space: O(m+n)
*/

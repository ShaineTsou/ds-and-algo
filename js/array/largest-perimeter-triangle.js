/* 
Largest Perimeter Triangle (https://leetcode.com/problems/largest-perimeter-triangle/)
- Given an array integers, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
- Return 0 if it's impossible to form any triangle of a non-zero area.

Constraints:
- There are at least 3 integers in the array
- Each element of the array is greater than or equal to 1
- There can be duplicates
*/

// ---- Test Cases ----
const testCase1 = [2, 1, 2]; // 5
const testCase2 = [1, 2, 1]; // 0
const testCase3 = [4, 2, 7, 5, 13, 5]; // 17

// ---- Solution ----
/*
The Triangle Inequality Theorum to determine whether the 3 lengths can form a triangle with a non-zero area:
- The sum of two side lengths of a triangle is always greater then the third side.

Logic: 
1. Sort the array in descending order
2. Have a sliding window of the first 3 lengths, check if the first length in the window is less than the sum of the other two
3. If false, move the sliding window 1 element to the right
4. If true, return the sum of all lengths in the sliding window
5. If the loop ends, and there's no possible combination, return 0
*/

const largestPerimeter = (nums) => {
  // sort nums in descending order
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};

console.log(largestPerimeter(testCase1)); // 5
console.log(largestPerimeter(testCase2)); // 0
console.log(largestPerimeter(testCase3)); // 17

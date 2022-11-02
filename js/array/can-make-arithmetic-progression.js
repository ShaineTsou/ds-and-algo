/* 
Can Make Arithmetic Progression From Sequence (https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/)
- Given an array of numbers, return tru if the array can be rearranged to form an arithmetic progression.
- Otherwise, return false.
- 

Constraints:
- There can be non-positive numbers
- There can be duplicates
- There at least 2 elements in the array

Side note:
An arithemetic progression is a sequence of numbers where the difference between any two consecutive elements is the same
*/

// ---- Test Cases ----
const testCase1 = [3, 5, 1]; // true
const testCase2 = [1, 2, 4]; // false
const testCase3 = [1, 1, 3, 5]; // false
const testCase4 = [2, 4, -2, 0]; // true

// ---- Solution ----
const canMakeArithmeticProgression = (arr) => {
  if (arr.length === 2) return true;
  arr.sort((a, b) => a - b);

  const difference = arr[1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== difference) {
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression(testCase1)); // true
console.log(canMakeArithmeticProgression(testCase2)); // false
console.log(canMakeArithmeticProgression(testCase3)); // false
console.log(canMakeArithmeticProgression(testCase4)); // true

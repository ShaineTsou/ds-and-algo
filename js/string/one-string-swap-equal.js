/* 
Check if One String Swap Can Make Strings Equal (https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/)
- Given two strings, s1 and s2 of equal length.
- Return true if it's possible to make both string equal by performing at most one string swap on exactly one of the strings.
- Return false if it's not possible.

- Definition:
  - A string swap is an operation where you choose two indices in a string (not necessarily different) and swap characters at these indices.

- Constraints:
  - Return true if two strings are already the same
  - Both strings are at least one character long
*/

// ---- Test Cases ----
const testCase1 = {
  s1: "bank",
  s2: "kanb",
}; // true

const testCase2 = {
  s1: "attack",
  s2: "defend",
}; // false

const testCase3 = {
  s1: "kelb",
  s2: "kelb",
}; // true

// ---- Solution ----
const areAlmostEqual = function (s1, s2) {
  const diffCharIndices = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffCharIndices.push(i);
    }
    if (diffCharIndices.length > 2) return false;
  }
  if (diffCharIndices.length === 1) return false;
  if (!diffCharIndices.length) return true;
  return (
    s1[diffCharIndices[0]] === s2[diffCharIndices[1]] &&
    s1[diffCharIndices[1]] === s2[diffCharIndices[0]]
  );
};

console.log(areAlmostEqual(testCase1.s1, testCase1.s2)); // true
console.log(areAlmostEqual(testCase2.s1, testCase2.s2)); // false
console.log(areAlmostEqual(testCase3.s1, testCase3.s2)); // true

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

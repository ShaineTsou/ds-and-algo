/* 
Valid Palindrome II (https://leetcode.com/problems/valid-palindrome-ii/)
- Given a string s, return true if the string can be a valid after deleting at most 1 character

- Definition of valid palindrome:
  - After ignoring all non-aphabumeric characters and case sensitivity, a string reads the same forward and backward
  - An empty is considered as a valid palindrome
*/

// ---- Test Cases ----
const s1 = "race a car"; // true
const s2 = "abccdba"; // true
const s3 = "abcdefdba"; // false
const s4 = "ab"; // true
const s5 = "a"; // true
const s6 = ""; // true

// ---- Solution ----
const isPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
};

const validPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  if (s.length <= 2) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
};

console.log(validPalindrome(s1)); // true
console.log(validPalindrome(s2)); // true
console.log(validPalindrome(s3)); // false
console.log(validPalindrome(s4)); // true
console.log(validPalindrome(s5)); // true
console.log(validPalindrome(s6)); // true

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

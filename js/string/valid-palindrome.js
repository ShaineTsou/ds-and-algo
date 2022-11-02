/* 
Valid Palindrome (https://leetcode.com/problems/valid-palindrome/)
- Given a string s, return true if it's a valid palindrome. Otherwise, return false

- Definition of valid palindrome:
  - After ignoring all non-aphabumeric characters and case sensitivity, a string reads the same forward and backward
  - An empty is considered as a valid palindrome
*/

// ---- Test Cases ----
const s1 = "A man, a plan, a canal: Panama"; // true
const s2 = "Race car"; // true
const s3 = "aabaa"; // true
const s4 = "abc"; // false
const s5 = "a"; // true
const s6 = ""; // true

// ---- Solution ----
const isPalindrome = function (s) {
  // Ignore all non-alphanumeric characters and case sensitivity
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (s.length < 2) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(s1)); // true
console.log(isPalindrome(s2)); // true
console.log(isPalindrome(s3)); // true
console.log(isPalindrome(s4)); // false
console.log(isPalindrome(s5)); // true
console.log(isPalindrome(s6)); // true

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

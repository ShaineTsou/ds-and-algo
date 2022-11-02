/* 
Longest Substring Without Repeating Character (https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- Given a string s, find the length of the longest substring without repeating character

Constraints:
- Substrings are contiguous. Look for substring, not subsequence
- Case sensitivity matters.
*/

// ---- Test Cases ----
const s1 = "abccabb"; // 3
const s2 = "abcdbca"; // 4
const s3 = "cccccc"; // 1
const s4 = ""; // 0

// ---- Solution ----
// Sliding window technique
const lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let left = 0;
  let maxLength = 0;
  const prevSeenPos = {};

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (prevSeenPos[currentChar] >= left) {
      left = prevSeenPos[currentChar] + 1;
    }

    prevSeenPos[currentChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring(s1)); // 3
console.log(lengthOfLongestSubstring(s2)); // 4
console.log(lengthOfLongestSubstring(s3)); // 1
console.log(lengthOfLongestSubstring(s4)); // 0

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/

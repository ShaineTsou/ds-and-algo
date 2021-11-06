/* 
Valid Parentheses (https://leetcode.com/problems/valid-parentheses/)
- Given a string s containing only the characters '(', ')', '[', ']', '{' and '}'.
- Return true if the string is valid. Otherwise, return false.
- The string is valid when all the open brackets are closed by the same type of bracket and in the correct order.

Constraints:
- An empty string counts as valid.
*/

// ---- Test Cases ----
const s1 = "()[]{}"; // true
const s2 = "{[[]]()}"; // true
const s3 = "[(])"; // false
const s4 = "([]"; // false
const s5 = ""; // true

// ---- Solution ----
const parens = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isValid = function (s) {
  if (s.length === 0) return true;

  let stack = [];
  for (let character of s) {
    if (character in parens) {
      stack.push(character);
    } else {
      if (!stack.length) return false;

      const openBracket = stack.pop();

      if (parens[openBracket] !== character) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(s1)); // true
console.log(isValid(s2)); // true
console.log(isValid(s3)); // false
console.log(isValid(s4)); // false
console.log(isValid(s5)); // true

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/

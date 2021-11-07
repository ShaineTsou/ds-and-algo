/* 
Mininum Remove To Make Valid Parentheses (https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)
- Given a string s only containing "(", ")" and lowercase English characters.
- Return any valid string after removing the least amount of brackets in any position

- A string is considered valid if it's
  - an empty string 
  - a string containing lowercase characters
  - or a string where all brackets are closed 
*/

// ---- Test Cases ----
const s1 = "ab(c(d)e"; // "abc(d)e" or "ab(cd)e"
const s2 = "ab(c(de"; // "abcde"
const s3 = "(()))"; // "(())"
const s4 = "("; // ""
const s5 = "))"; // ""
const s6 = ""; // ""

// ---- Solution ----
const minRemoveToMakeValid = function (s) {
  debugger;
  if (!s.length) return s;

  const strArr = s.split("");
  const leftBracketIndices = [];

  for (let idx = 0; idx < strArr.length; idx++) {
    const character = strArr[idx];

    if (character === ")") {
      if (leftBracketIndices.length) {
        leftBracketIndices.pop();
      } else {
        strArr[idx] = "";
      }
    } else if (character === "(") {
      leftBracketIndices.push(idx);
    }
  }

  while (leftBracketIndices.length) {
    const index = leftBracketIndices.pop();
    strArr[index] = "";
  }

  return strArr.join("");
};

console.log(minRemoveToMakeValid(s1)); // "abc(d)e"
console.log(minRemoveToMakeValid(s2)); // "abcde"
console.log(minRemoveToMakeValid(s3)); // "(())"
console.log(minRemoveToMakeValid(s4)); // ""
console.log(minRemoveToMakeValid(s5)); // ""
console.log(minRemoveToMakeValid(s6)); // ""

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/

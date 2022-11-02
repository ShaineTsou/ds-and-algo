/* 
Backspace String Compare (https://leetcode.com/problems/backspace-string-compare/)
- Given two string s and t, return true if they are equal when both are typed into empty text editor
- '#' represents a backspace character

Constraints:
- When two '#'s appear beside each other, it deletes the two non-# character before the first #.
- When there's already nothing to remove, the result of typing out any '#'s is still an empty string
- Two empty strings are equal to each other
- The function should be case sensitive. 'a' does not equal to 'A'.
*/

// ---- Test Cases ----
const s1 = "ab#z",
  t1 = "az#z"; // true
const s2 = "abc#d",
  t2 = "abc#c"; // false
const s3 = "x#y#z#",
  t3 = "#"; // true
const s4 = "a##b",
  t4 = "b"; // true
const s5 = "Ab#z",
  t5 = "ab#z"; // false

// ---- Solution ----
const backspaceCompare = function (s, t) {
  let pointerS = s.length - 1;
  let pointerT = t.length - 1;
  let charS = s[pointerS];
  let charT = t[pointerT];

  while (pointerS >= 0 || pointerT >= 0) {
    let charsToDeleteS = 0;
    let charsToDeleteT = 0;

    while (pointerS >= 0) {
      if (s[pointerS] === "#") {
        charsToDeleteS++;
        pointerS--;
      } else {
        if (charsToDeleteS > 0) {
          charsToDeleteS--;
          pointerS--;
        } else {
          charS = s[pointerS];
          break;
        }
      }
    }
    if (pointerS < 0) {
      charS = "";
    }

    while (pointerT >= 0) {
      if (t[pointerT] === "#") {
        charsToDeleteT++;
        pointerT--;
      } else {
        if (charsToDeleteT > 0) {
          charsToDeleteT--;
          pointerT--;
        } else {
          charT = t[pointerT];
          break;
        }
      }
    }
    if (pointerT < 0) {
      charT = "";
    }

    if (charS !== charT) return false;
    pointerS--;
    pointerT--;
  }
  return true;
};

console.log(backspaceCompare(s1, t1)); // true
console.log(backspaceCompare(s2, t2)); // false
console.log(backspaceCompare(s3, t3)); // true
console.log(backspaceCompare(s4, t4)); // true
console.log(backspaceCompare(s5, t5)); // false

// ---- Space and Time Complexity ----
/*
Time: O(s+t)
Space: O(1)
*/

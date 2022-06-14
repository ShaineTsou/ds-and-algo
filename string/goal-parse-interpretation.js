/* 
Goal Parser Interpretation (https://leetcode.com/problems/goal-parser-interpretation/)
- Given a string command consisting only 'G', '()' and/or '(al)'
- Interpret 'G' as 'G', '()' as 'o', and '(al)' as 'al'
- Return the interpreted strings concatenated in the original order
*/

// ---- Test Cases ----
const testCase1 = 'G()(al)' // Goal
const testCase2 = 'G()()()()(al)' // Gooooal
const testCase3 = '(al)G(al)()()G' // alGalooG

// ---- Solution ----
const stringMap = {
  'G': 'G',
  '()': 'o',
  '(al)': 'al',
}

/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
  const result = []

  let pointer = 0
  let key = ''

  while (pointer < command.length) {
    key += command[pointer]

    if (stringMap[key]) {
      result.push(stringMap[key])
      key = ''
    }

    pointer++
  }

  return result.join('')
}

console.log(interpret(testCase1)) // Goal
console.log(interpret(testCase2)) // Gooooal
console.log(interpret(testCase3)) // alGalooG

// ---- Space and Time Complexity ----
/*
command.length = n

Time: O(n)
Space: O(n)
*/

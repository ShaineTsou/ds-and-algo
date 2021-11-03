/* 
Reverse A Linked List II (https://leetcode.com/problems/reverse-linked-list-ii/)
- Given the head of a linked list and two integers, left and right
- Reverse the linekd list from position left to position right
- Return the reversed linked list

Constraints:
- The number of nodes in the list is n
- 1 <= left <= right <= n
*/

// ---- Test Cases ----
// (1 → 2 → 3 → 4 → 5 → null),  left = 2, right = 4 —> (1 → 4 → 3 → 2 → 5 → null)
// (6 → 7 → 8 → null), left = 1, right = 3 —> (8 → 7 → 6 → null)
// (3 → null), left = 1, right = 1 —> (3 → null)

// ---- Solution ----
const reverseBetween = function (head, left, right) {
  if (!head || !head.next || left === right) return head;

  let pos = 1;
  let currentNode = head;
  let leftBound = null;

  // Make currentNode land on the node at position left
  while (pos < left) {
    leftBound = currentNode;
    currentNode = currentNode.next;
    pos++;
  }

  let start = currentNode;
  let prevNode = null;

  // Make currentNode land on the node right next to the node at position right
  while (pos <= right) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    pos++;
  }

  start.next = currentNode;

  if (left === 1) {
    head = prevNode;
  } else {
    leftBound.next = prevNode;
  }

  return head;
};

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

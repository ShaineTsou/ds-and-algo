/* 
Reverse A Linked List (https://leetcode.com/problems/reverse-linked-list/)
- Given a linked list, return it in reverse.

Constraints:
- Return null when receiving null
- Return the same node when receiving a single node
*/

// ---- Test Cases ----
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// Should return: 5 -> 4 -> 3 -> 2 -> 1 -> null
const linkedList1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

// 3 -> null
// Should return: 3 -> null
const linkedList2 = {
  val: 3,
  next: null,
};

// null
// Should return: null
const linkedList3 = null;

// ---- Solution ----
const reverseLinkedList = function (head) {
  if (!head || !head.next) return head;

  let currentNode = head;
  let prevNode = null;

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};

console.log(reverseLinkedList(linkedList1));
console.log(reverseLinkedList(linkedList2));
console.log(reverseLinkedList(linkedList3));

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

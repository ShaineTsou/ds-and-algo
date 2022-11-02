/* 
Flatten Multilevel Doubly Linked List (https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
- Given the head of a doubly linked list in which nodes also have a child property that may or may not point to a separate doubly linked list.
- These child list may have one or more children of their own.
- Return the list as single level flattened doubly linked list

Constraints:
- Every list node can have multiple levels of children
- After flattening, the value of child property should be null
*/

// ---- Solution 1 ----
const flatten1 = function (head) {
  if (!head || (!head.next && !head.child)) return head;

  let currentNode = head;
  let nodeStack = [];

  while (currentNode.child || currentNode.next || nodeStack.length) {
    if (currentNode.child) {
      if (currentNode.next) {
        nodeStack.push(currentNode.next);
      }

      currentNode.next = currentNode.child;
      currentNode.child.prev = currentNode;
      currentNode.child = null;
    } else {
      if (!currentNode.next) {
        if (nodeStack.length) {
          const nextNode = nodeStack.pop();

          nextNode.prev = currentNode;
          currentNode.next = nextNode;
        }
      }
    }
    currentNode = currentNode.next;
  }
  return head;
};

// ---- Space and Time Complexity 1 ----
/*
Time: O(n)
Space: O(n)
*/

// ---- Solution 2 ----
const flatten2 = function (head) {
  if (!head) return head;

  let currentNode = head;

  while (currentNode) {
    if (currentNode.child) {
      let childTail = currentNode.child;

      while (childTail.next) {
        childTail = childTail.next;
      }

      if (currentNode.next) {
        childTail.next = currentNode.next;
        currentNode.next.prev = childTail;
      }

      currentNode.next = currentNode.child;
      currentNode.child.prev = currentNode;
      currentNode.child = null;
    }

    currentNode = currentNode.next;
  }

  return head;
};

// ---- Space and Time Complexity 2 ----
/*
Time: O(n)
Space: O(1)
*/

/* 
Cycle Detection (https://leetcode.com/problems/linked-list-cycle-ii/)
- Given a linked list, return the node where the cycle begins
- Return null if there's no cycle
*/

// ---- Solution ----
/*
Using Floyd's Tortoise and Hare Algorith to achieve O(1) space complexity
- Initialize 2 pointers: tortoise and hare, and they both start from the head
- The tortoise pointer moves 1 step on each iteration
- The hare pointer moves 2 steps on each iteration
- If the hare pointer lands on null, it means there's no cycle
- If tortoise and hare meet together, it means there's a cycle

- To find out where the cycle starts,
  - Move tortoise back to the head, and it still moves 1 step on each iteration
  - Keep hare at the meeting point. But this time, it moves 1 step on each iteration
  - The node they meet this time is the starting point of the cycle.
*/
const detectCycle = function (head) {
  if (!head) return null;

  let tortoise = head;
  let hare = head;

  while (true) {
    if (!hare || !hare.next) return null;

    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) break;
  }

  tortoise = head;

  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;
  }

  return tortoise;
};
// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(1)
*/

/* 
Binary Tree Level Order Traversal (https://leetcode.com/problems/binary-tree-level-order-traversal/)
- Given the root of a binary tree, return the level order traversal of its nodes' values as an array
- From left to right, level by level

Constraints:
- Return an empty array if the tree is empty
*/

// ---- Solution ----
/*
1. Do we have to traverse through the entire tree? Yes
2. What type of traversal should we use? Bread-First-Search (BFS)
3. How do we know we've finished processing all the nodes on the same level?
  - Before we go to the next level, the queue actually stores all the nodes on the next level
  - So, before we start processing next level, we can stores the length of the queue as count
  - If count becomes 0, at this point, we've finished processing all the nodes on the same level
4. After processing all the nodes on the same level, 
  - push the values into the final answer array, 
  - then start processing the next level
*/
const levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const ans = [];

  while (queue.length) {
    let nodesCount = queue.length;
    const values = [];

    while (nodesCount > 0) {
      const currentNode = queue.shift();
      values.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      nodesCount--;
    }

    ans.push(values);
  }

  return ans;
};

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/

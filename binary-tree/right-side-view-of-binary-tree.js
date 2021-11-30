/* 
Binary Tree Right Side View (https://leetcode.com/problems/binary-tree-right-side-view/)
- Given the root of a binary tree, return an array of the values of the nodes you can see when you stand on the right side of the tree
- Nodes should be ordered from top to bottom.

Constraints:
- Return an empty array when the tree is empty
*/

// ---- Solution 1 ----
/*
DFS - reverse Preorder DFS (Node, Right, Left)
*/
const dfs = function (node, level, ans) {
  if (!node) return ans;

  if (ans[level] === undefined) {
    ans[level] = node.val;
  }

  dfs(node.right, level + 1, ans);
  dfs(node.left, level + 1, ans);

  return ans;
};

const rightSideView = function (root) {
  return dfs(root, 0, []);
};

// ---- Space and Time Complexity 1 ----
/*
Time: O(n)
Space: O(n)
*/

// ---- Solution 2 ----
/*
BFS - Save the value of the last node at the same level
*/
const rightSideView = function (root) {
  if (!root) return [];

  const queue = [root];
  const ans = [];

  while (queue.length) {
    let levelNodesCount = queue.length;

    while (levelNodesCount > 0) {
      const currentNode = queue.shift();

      if (levelNodesCount === 1) {
        ans.push(currentNode.val);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      levelNodesCount--;
    }
  }

  return ans;
};

// ---- Space and Time Complexity 2 ----
/*
Time: O(n)
Space: O(n)
*/

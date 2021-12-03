/* 
Validate Binary Search Tree (https://leetcode.com/problems/validate-binary-search-tree/)
- Given the root of a binary tree, determine if it is a valid binary search tree (BST)

Definition of a valid BST:
- The left subtree of a node contains only nodes with keys less than the node's key
- The right subtree of a node contains only nodes with keys greater than the node's key
- Both the left and right subtrees must also be binary search trees

Constraints:
- There can be duplicates. In this case, return false
- Return true if there's only one node in the tree
- Return true if the tree is empty
*/

// ---- Solution ----
const dfs = function (node, lower, upper) {
  if (node.val <= lower || node.val >= upper) {
    return false;
  }

  if (node.left) {
    if (!dfs(node.left, lower, node.val)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.val, upper)) {
      return false;
    }
  }

  return true;
};

const isValidBST = function (root) {
  if (!root) return true;

  return dfs(root, -Infinity, Infinity);
};

// ---- Space and Time Complexity ----
/*
Time: O(n)
Space: O(n)
*/

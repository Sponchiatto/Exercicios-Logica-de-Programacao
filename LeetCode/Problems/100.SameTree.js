// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Represents a node in a binary tree.
 * Each node contains a value and references to its left and right children.
 * - val: The value stored in the node.
 * - left: Reference to the left child node, or null if no left child.
 * - right: Reference to the right child node, or null if no right child.
 */

// Main concepts

// Tree Traversal: The code recursively traverses both binary trees, checking each node and its children for equality.

// Node Comparison: At each level of traversal, the code compares the values of corresponding nodes in the two trees 
// to determine if they are equal.

// Base Cases: Base cases are used to handle scenarios where one tree has reached the end of its branch while the 
// other tree still has nodes, ensuring proper termination of the recursion.



function isSameTree(p, q) {
  // Base case: if both nodes are null, they are the same
  if (!p && !q) {
    return true;
  }

  // If one node is null and the other is not, they are different
  if (!p || !q) {
    return false;
  }

  // If the values of the current nodes are different, they are different trees
  if (p.val !== q.val) {
    return false;
  }

  // Recursively check the left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Define tree nodes
const nodeint = { val: 1, left: 2, right: 3 };
const nodeint2 = { val: 1, left: 2, right: 3 };

const node1 = { val: 1, left: null, right: null };
const node2 = { val: 1, left: null, right: null };
const node3 = { val: 2, left: null, right: null };

// Test cases
console.log(isSameTree(nodeint, nodeint2)); // Output: true (same nodes)

console.log(isSameTree(node1, node2)); // Output: true (same nodes)
console.log(isSameTree(node1, node3)); // Output: false (different values)

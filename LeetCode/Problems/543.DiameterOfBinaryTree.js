// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Define the structure of a tree node

// Main concepts:
// 1. Binary Tree: The data structure representing a binary tree is fundamental in this code. 
// Each node of the tree has a value (`val`) and two references to the left (`left`) and right (`right`) child nodes.

// 2. Recursion: The calculation of the maximum depth of a node and, consequently, the diameter of the tree, 
// is performed recursively. The `maxDepth` function is called recursively to calculate the depth of the left and 
// right child nodes of each node.

// 3. Global Variables: The `diameter` variable is a global variable that stores the diameter of the tree.
// It is updated during the calculation of the depth of the nodes.

// 4. Recursion Base: The `maxDepth` function has a stopping condition (recursion base) that checks if the 
// current node is null. If the node is null, the function returns 0, indicating that the maximum depth is 0.

// 5. Diameter Update: During the calculation of the depth of the nodes, the code updates the value of the 
//`diameter` variable if the sum of the depths of the left and right child nodes is greater than the current diameter.

// 6. Diameter Return: After calculating the maximum depth of the tree, the code returns the value of the 
// `diameter` variable as the result, which represents the diameter of the tree.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Function to calculate the diameter of a binary tree
const diameterOfBinaryTree = function(root) {
    let diameter = 0;

    // Function to calculate the maximum depth of a node
    const maxDepth = function(node) {
        // Base case: If the node is null, return 0
        if (!node) return 0;

        // Recursively calculate the maximum depth of the left and right subtrees
        const leftDepth = maxDepth(node.left);
        const rightDepth = maxDepth(node.right);

        // Update the diameter if the sum of depths of left and right subtrees is greater
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the maximum depth of the current node
        return Math.max(leftDepth, rightDepth) + 1;
    };

    // Call the maxDepth function to calculate the depth of the root node
    maxDepth(root);

    // Return the calculated diameter of the binary tree
    return diameter;
};

// Example usage:
// Create an example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate and print the diameter of the binary tree
console.log(diameterOfBinaryTree(root));

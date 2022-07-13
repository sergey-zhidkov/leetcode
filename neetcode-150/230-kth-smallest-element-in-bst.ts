// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function kthSmallest(root: TreeNode | null, k: number): number {
    if (!root) {
        return -1
    }

    const path = []
    traverse(root, k, path)
    return path[k - 1]

    function traverse(node: TreeNode | null, k: number, array: number[]) {
        if (!node) {
            return
        }

        traverse(node.left, k, array)
        array.push(node.val)
        if (array.length === k) {
            return
        }
        traverse(node.right, k, array)
    }
}

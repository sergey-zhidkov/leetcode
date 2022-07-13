// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length) {
        return null
    }

    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }

    return buildNode(preorder, inorder)

    function buildNode(preorder: number[], inorder: number[]): TreeNode | null {
        if (!preorder.length || !inorder.length) {
            return null
        }

        const rootVal = preorder.shift()!
        const root = new TreeNode(rootVal)
        const rootValIndex = inorder.indexOf(rootVal)
        root.left = buildNode(preorder, inorder.slice(0, rootValIndex))
        root.right = buildNode(preorder, inorder.slice(rootValIndex + 1))

        return root
    }
}

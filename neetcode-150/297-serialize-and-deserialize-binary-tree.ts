// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Example 1:

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

// Example 2:

// Input: root = []
// Output: []

// Definition for a binary tree node.
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (!root) {
        return ''
    }

    const preorder: number[] = []
    const inorder: number[] = []
    dfs(root, preorder, inorder)

    return preorder.join(',') + '#' + inorder.join(',')

    function dfs(node: TreeNode | null, preorder: number[], inorder: number[]): void {
        if (!node) {
            return
        }

        preorder.push(node.val)
        dfs(node.left, preorder, inorder)
        inorder.push(node.val)
        dfs(node.right, preorder, inorder)
    }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (!data) {
        return null
    }

    const chunks = data.split('#')
    const preorder = chunks[0].split(',').map((char) => parseInt(char, 10))
    const inorder = chunks[1].split(',').map((char) => parseInt(char, 10))

    return buildTree(preorder, inorder)

    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        if (!preorder.length || !inorder.length) {
            return null
        }

        const rootVal = preorder.shift()!
        const root = new TreeNode(rootVal)

        const rootIndexInInorder = inorder.lastIndexOf(rootVal)
        root.left = buildTree(preorder, inorder.slice(0, rootIndexInInorder))
        root.right = buildTree(preorder, inorder.slice(rootIndexInInorder + 1))

        return root
    }
}

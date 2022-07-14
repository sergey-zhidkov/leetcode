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

    const result = dfs(root, [])
    return result.join(',')

    function dfs(node: TreeNode | null, acc: string[]): string[] {
        if (!node) {
            acc.push('n') // null
            return acc
        }

        acc.push(node.val.toString())
        dfs(node.left, acc)
        dfs(node.right, acc)
        return acc
    }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (!data) {
        return null
    }

    const array = data.split(',')
    return buildTree(array)

    function buildTree(array: string[]): TreeNode | null {
        if (!array.length) {
            return null
        }

        const rootVal = array.shift()!
        if (rootVal === 'n') {
            return null
        }

        const root = new TreeNode(parseInt(rootVal, 10))
        root.left = buildTree(array)
        root.right = buildTree(array)

        return root
    }
}

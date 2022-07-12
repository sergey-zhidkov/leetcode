// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

//     a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

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

function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true
    }

    const [leftPath, isLeftBalanced] = dfs(root.left)
    const [rightPath, isRightBalanced] = dfs(root.right)

    return isLeftBalanced && isRightBalanced && Math.abs(leftPath - rightPath) <= 1

    function dfs(node: TreeNode | null) {
        if (!node) {
            return [0, true]
        }

        const [leftPath, isLeftBalanced] = dfs(node.left)
        const [rightPath, isRightBalanced] = dfs(node.right)

        if (!isLeftBalanced || !isRightBalanced) {
            return [0, false]
        }

        const diff = Math.abs(leftPath - rightPath)

        return [Math.max(leftPath, rightPath) + 1, diff <= 1]
    }
}

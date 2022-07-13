// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) {
        return true
    }

    if (!root || !subRoot) {
        return false
    }

    const allHits: TreeNode[] = []
    const queue = [root]
    while (queue.length) {
        const next = queue.shift()!
        if (next.val === subRoot.val) {
            allHits.push(next)
        }
        if (next.left) {
            queue.push(next.left)
        }
        if (next.right) {
            queue.push(next.right)
        }
    }

    for (const hit of allHits) {
        if (isEqual(hit, subRoot)) {
            return true
        }
    }

    return false

    function isEqual(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) {
            return true
        }

        if ((p && !q) || (!p && q)) {
            return false
        }

        if (p.val === q.val) {
            return isEqual(p?.left, q?.left) && isEqual(p?.right, q?.right)
        }

        return false
    }
}

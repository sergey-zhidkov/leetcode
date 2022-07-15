// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln

// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head || !head.next) {
        return
    }

    const temp = []

    let cur = head
    while (cur) {
        temp.push(cur)
        cur = cur.next
    }

    let i = 0
    let j = temp.length - 1
    let prevLast = null
    while (true) {
        const first = temp[i]
        if (j - i <= 0) {
            prevLast.next = first
            first.next = null
            break
        }
        const last = temp[j]
        if (prevLast) {
            prevLast.next = first
        }

        first.next = last
        prevLast = last
        if (j - i === 1) {
            prevLast.next = null
            break
        }
        i++
        j--
    }
}

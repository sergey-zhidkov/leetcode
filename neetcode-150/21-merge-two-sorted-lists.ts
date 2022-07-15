// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }

    // dummy
    let pointer3 = new ListNode()
    const result = pointer3

    let pointer1: ListNode | null = l1
    let pointer2: ListNode | null = l2
    while (pointer1 || pointer2) {
        if (pointer1 && pointer2) {
            if (pointer1.val < pointer2.val) {
                pointer3.next = pointer1
                pointer1 = pointer1.next
            } else {
                pointer3.next = pointer2
                pointer2 = pointer2.next
            }
        } else if (!pointer1) {
            pointer3.next = pointer2
            pointer2 = pointer2!.next
        } else if (!pointer2) {
            pointer3.next = pointer1
            pointer1 = pointer1!.next
        }
        pointer3 = pointer3.next
    }

    return result.next
}

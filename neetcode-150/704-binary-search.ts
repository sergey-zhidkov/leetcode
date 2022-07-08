// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

//     1 <= nums.length <= 104
//     -104 < nums[i], target < 104
//     All the integers in nums are unique.
//     nums is sorted in ascending order.

function search(nums: number[], target: number): number {
    if (!nums?.length) {
        return -1
    }

    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }

    let lo = 0
    let hi = nums.length - 1
    while (lo <= hi) {
        const mi = Math.floor((hi - lo) / 2) + lo
        const cur = nums[mi]

        if (cur === target) {
            return mi
        }
        if (lo === hi) {
            return -1
        }

        if (cur < target) {
            lo = mi + 1
        } else {
            hi = mi - 1
        }
    }

    return -1
}

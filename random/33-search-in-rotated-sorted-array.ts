// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:

// Input: nums = [1], target = 0
// Output: -1

function search(nums: number[], target: number): number {
    if (!nums?.length) {
        return -1
    }

    if (nums.length === 1) {
        return target === nums[0] ? 0 : -1
    }

    let isRotated = false
    let pivotIndex = 0
    if (nums[0] > nums[nums.length - 1]) {
        isRotated = true
        pivotIndex = searchPivot(nums)
    }

    if (target >= nums[0] && target <= nums[pivotIndex - 1]) {
        return binarySearch(nums, 0, pivotIndex - 1, target)
    }
    return binarySearch(nums, pivotIndex, nums.length - 1, target)
}

function searchPivot(nums: number[]): number {
    let lo = 0
    let hi = nums.length - 1
    while (lo < hi) {
        const mid = Math.trunc((lo + hi) / 2)
        if (nums[mid] > nums[hi]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return lo
}

function binarySearch(nums: number[], lo: number, hi: number, target: number): number {
    if (lo >= hi) {
        return nums[hi] === target ? hi : -1
    }

    const curIndex = Math.trunc((hi - lo) / 2) + lo
    const cur = nums[curIndex]

    if (cur === target) {
        return curIndex
    } else if (target < cur) {
        return binarySearch(nums, lo, curIndex - 1, target)
    } else {
        return binarySearch(nums, curIndex + 1, hi, target)
    }
}

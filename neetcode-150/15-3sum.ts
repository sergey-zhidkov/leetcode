// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

// Example 3:

// Input: nums = [0]
// Output: []

function threeSum(nums: number[]): number[][] {
    const result: number[][] = []
    if (!nums?.length || nums.length < 3) {
        return result
    }

    nums.sort((a, b) => a - b)

    // Two pointers solution
    for (let i = 0; i < nums.length - 2; i++) {
        const num1 = nums[i]
        if (nums[i + 1] === num1) {
            continue
        }

        let leftPointer = i + 1
        let rightPointer = nums.length - 1
        const target = 0 - num1
        while (leftPointer < rightPointer) {
            if (nums[leftPointer] + nums[rightPointer] === target) {
                result.push([num1, nums[leftPointer], nums[rightPointer]])

                while (nums[leftPointer] === nums[leftPointer + 1]) leftPointer++
                while (nums[rightPointer] === nums[rightPointer - 1]) rightPointer--

                leftPointer++
                rightPointer--
            } else if (nums[leftPointer] + nums[rightPointer] > target) {
                rightPointer--
            } else {
                leftPointer++
            }
        }
    }

    return result
}

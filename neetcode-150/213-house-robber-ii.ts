// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:

// Input: nums = [1,2,3]
// Output: 3

function rob(nums: number[]): number {
    if (!nums?.length) {
        return 0
    }

    return Math.max(robInRange(nums, 0, nums.length - 2), robInRange(nums, 1, nums.length - 1))

    // hi index included
    function robInRange(nums: number[], lo: number, hi: number): number {
        if (nums.length === 1) {
            return nums[0]
        }

        if (nums.length === 2) {
            return Math.max(nums[0], nums[1])
        }

        const max: number[] = []
        max[0] = 0
        max[1] = nums[lo + 0]

        for (let i = lo + 1, j = 1; i <= hi; i++, j++) {
            const curStep = nums[i]
            max[j + 1] = Math.max(curStep + max[j], max[j - 1])
        }

        return max.pop() as number
    }
}

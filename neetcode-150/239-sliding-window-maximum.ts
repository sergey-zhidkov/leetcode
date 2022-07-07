// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function maxSlidingWindow(nums: number[], k: number): number[] {
    if (k > nums.length) {
        return []
    }

    const result: number[] = []
    const monothoneQueue: number[] = []

    for (let i = 0; i < k; i++) {
        pushToMq(nums[i])
    }
    result.push(monothoneQueue[monothoneQueue.length - 1])

    for (let i = k; i < nums.length; i++) {
        const removedNum = nums[i - k]
        popFromMq(removedNum)
        pushToMq(nums[i])
        result.push(monothoneQueue[monothoneQueue.length - 1])
    }

    return result

    function pushToMq(num: number): void {
        while (monothoneQueue.length !== 0 && monothoneQueue[0] < num) {
            monothoneQueue.shift()
        }
        monothoneQueue.unshift(num)
    }

    function popFromMq(num: number): void {
        if (num === monothoneQueue[monothoneQueue.length - 1]) {
            monothoneQueue.pop()
        }
    }
}

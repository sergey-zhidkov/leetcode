// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

//     1 <= nums.length <= 105
//     k is in the range [1, the number of unique elements in the array].
//     It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topKFrequent(nums: number[], k: number): number[] {
    if (!nums?.length) {
        return []
    }

    const numToFrequencyMap = new Map<number, number>()
    for (const singleNum of nums) {
        const frequency = numToFrequencyMap.get(singleNum) ?? 0
        numToFrequencyMap.set(singleNum, frequency + 1)
    }

    // Can be replaced with a bucket sort and bring it to O(n)
    const array = Array.from(numToFrequencyMap)
    array.sort((a, b) => {
        if (a[1] < b[1]) {
            return 1
        }
        if (a[1] > b[1]) {
            return -1
        }
        return 0
    })

    return array.slice(0, k).map((arr) => arr[0])
}

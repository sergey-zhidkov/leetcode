// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers: number[], target: number): number[] {
    if (!numbers?.length || numbers.length < 2) {
        return []
    }

    for (let i = 0; i < numbers.length; i++) {
        const leftNum = numbers[i]
        const searchableNum = target - leftNum
        const searchableNumIndex = binarySeach(searchableNum, numbers, i + 1, numbers.length - 1)
        if (searchableNumIndex >= 0) {
            return [i + 1, searchableNumIndex + 1]
        }
    }

    return []

    function binarySeach(targetNum: number, arr: number[], leftIndex: number, rightIndex: number): number {
        if (leftIndex === rightIndex) {
            return arr[leftIndex] === targetNum ? leftIndex : -1
        }

        const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2)
        const value = arr[midIndex]
        if (value === targetNum) {
            return midIndex
        }
        if (value < targetNum) {
            return binarySeach(targetNum, arr, midIndex + 1, rightIndex)
        } else {
            return binarySeach(targetNum, arr, leftIndex, midIndex - 1)
        }
    }
}

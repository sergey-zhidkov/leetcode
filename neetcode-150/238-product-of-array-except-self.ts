// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

//     2 <= nums.length <= 105
//     -30 <= nums[i] <= 30
//     The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

function productExceptSelf(nums: number[]): number[] {
    if (!nums?.length) {
        return []
    }

    let product = 1
    // indexes of 0 values
    const howManyZeros = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        const singleNum = nums[i]
        if (singleNum === 0) {
            howManyZeros.add(i)
            continue
        }
        product *= singleNum
    }

    if (howManyZeros.size > 1) {
        return new Array(nums.length).fill(0)
    }

    if (howManyZeros.size === 1) {
        const result = new Array(nums.length).fill(0)
        result[howManyZeros.values().next().value] = product
        return result
    }

    const result: number[] = []
    for (const singleNum of nums) {
        result.push(product / singleNum)
    }
    return result
}

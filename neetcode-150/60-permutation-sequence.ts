// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

//     "123"
//     "132"
//     "213"
//     "231"
//     "312"
//     "321"

// Given n and k, return the kth permutation sequence.

// Example 1:

// Input: n = 3, k = 3
// Output: "213"

// Example 2:

// Input: n = 4, k = 9
// Output: "2314"

// Example 3:

// Input: n = 3, k = 1
// Output: "123"

// Constraints:

//     1 <= n <= 9
//     1 <= k <= n!

function getPermutation(n: number, k: number): string {
    console.log(n, k)

    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array[i] = i + 1
    }

    for (let i = 0; i < array.length; i++) {
        const result = []
        traverse(array, i, i - 1, i + 1, result)
    }

    return ''
}

function traverse(array: number[], curIndex, leftSub, rightSub): void {}

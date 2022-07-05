// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

//     1 <= s1.length, s2.length <= 104
//     s1 and s2 consist of lowercase English letters.

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false
    }

    let s1Hash = 0
    for (const character of s1) {
        s1Hash += character.charCodeAt(0)
    }

    let leftPointer = 0
    let rightPointer = leftPointer + s1.length - 1

    let s2Hash = 0
    for (let i = 0; i <= rightPointer; i++) {
        s2Hash += s2.charCodeAt(i)
    }
    if (s1Hash === s2Hash && isPermutation(s1, s2.substring(leftPointer, rightPointer + 1))) {
        return true
    }

    while (rightPointer < s2.length) {
        s2Hash -= s2.charCodeAt(leftPointer)
        leftPointer++
        rightPointer++
        s2Hash += s2.charCodeAt(rightPointer)
        if (s1Hash === s2Hash && isPermutation(s1, s2.substring(leftPointer, rightPointer + 1))) {
            return true
        }
    }

    return false

    function isPermutation(sA: string, sB: string): boolean {
        for (let i = 0; i < sA.length; i++) {
            if (!sB.includes(sA[i])) {
                return false
            }
        }
        return true
    }
}

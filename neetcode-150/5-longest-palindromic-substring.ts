// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

//     1 <= s.length <= 1000
//     s consist of only digits and English letters.

function longestPalindrome(s: string): string {
    if (!s) {
        return ''
    }

    if (s.length === 1) {
        return s
    }

    const getLongest = (center: number, useAsCenter: boolean): string => {
        // Longest with center character
        let j = center
        let k = useAsCenter ? center : center + 1
        if (j < 0 || k >= len) {
            return ''
        }
        while (j >= 0 && k < len && s[j] === s[k]) {
            j--
            k++
        }
        j++
        k--
        return s.substr(j, k - j + 1)
    }

    let longest = ''
    const len = s.length
    for (let i = 0; i < len; i++) {
        const curLongestWithCenter = getLongest(i, true)
        const curLongestWithoutCenter = getLongest(i, false)
        if (curLongestWithCenter.length > longest.length) {
            longest = curLongestWithCenter
        }
        if (curLongestWithoutCenter.length > longest.length) {
            longest = curLongestWithoutCenter
        }
    }
    return longest
}

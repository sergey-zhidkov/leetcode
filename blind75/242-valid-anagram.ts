// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.

function isAnagram(s: string, t: string): boolean {
    if (s === t) {
        return true
    }
    if (s.length !== t.length) {
        return false
    }

    const map = new Map<string, number>()
    for (const singleS of s) {
        const timesVisited = map.get(singleS) ?? 0
        map.set(singleS, timesVisited + 1)
    }

    console.log(map)

    for (const singleT of t) {
        const timesVisited = map.get(singleT)
        // if undefined or 0
        if (!timesVisited) {
            return false
        }
        if (timesVisited === 1) {
            map.delete(singleT)
        } else {
            map.set(singleT, timesVisited - 1)
        }
    }

    console.log(map)

    return map.size === 0
}

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.

function groupAnagrams(strs: string[]): string[][] {
    if (!strs?.length) {
        return []
    }

    const mapSortedToAnagrams = new Map<string, string[]>()

    for (const singleStr of strs) {
        const sortedStr = Array.from(singleStr).sort().join()
        const anagrams = mapSortedToAnagrams.get(sortedStr) ?? []
        anagrams.push(singleStr)
        mapSortedToAnagrams.set(sortedStr, anagrams)
    }

    const result: string[][] = []
    for (const anagrams of mapSortedToAnagrams.values()) {
        result.push(anagrams)
    }

    return result
}

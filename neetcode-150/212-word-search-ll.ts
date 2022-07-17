// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:

// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// Constraints:

//     m == board.length
//     n == board[i].length
//     1 <= m, n <= 12
//     board[i][j] is a lowercase English letter.
//     1 <= words.length <= 3 * 104
//     1 <= words[i].length <= 10
//     words[i] consists of lowercase English letters.
//     All the strings of words are unique.

interface TrieNode {
    [key: string]: { word?: string; children?: TrieNode }
}

class Trie {
    public root: TrieNode = {}

    public insert(word: string) {
        let i = 0
        let nextNode = this.root
        while (i < word.length) {
            const char = word[i]
            nextNode[char] = nextNode[char] ?? { children: {} }
            if (i === word.length - 1) {
                nextNode[char].word = word
            }
            nextNode = nextNode[char].children!
            i++
        }
    }
}

function findWords(board: string[][], words: string[]): string[] {
    if (!board?.length || !words?.length) {
        return []
    }

    // build trei from words
    const trie = buildTrie(words)

    // search words in board through dfs and trie
    const result: string[] = []
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            dfs(row, col, trie.root, result)
        }
    }

    return result

    function buildTrie(words: string[]): Trie {
        const trie = new Trie()

        for (const singleWord of words) {
            trie.insert(singleWord)
        }

        return trie
    }

    function dfs(row: number, col: number, trieNode: TrieNode | undefined, result: string[]): void {
        const char = board[row][col]
        if (char === '#' || !trieNode?.[char]) {
            return
        }

        // we found a word
        if (trieNode[char].word) {
            result.push(trieNode[char].word!)
            // avoid duplication in results
            delete trieNode[char].word
        }

        // track where we go
        board[row][col] = '#'
        if (row > 0) {
            dfs(row - 1, col, trieNode[char].children, result)
        }
        if (col > 0) {
            dfs(row, col - 1, trieNode[char].children, result)
        }
        if (row < board.length - 1) {
            dfs(row + 1, col, trieNode[char].children, result)
        }
        if (col < board[0].length - 1) {
            dfs(row, col + 1, trieNode[char].children, result)
        }

        // recover the original character
        board[row][col] = char
    }
}

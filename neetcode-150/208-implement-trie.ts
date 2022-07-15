// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

//     Trie() Initializes the trie object.
//     void insert(String word) Inserts the string word into the trie.
//     boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
//     boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:

//     1 <= word.length, prefix.length <= 2000
//     word and prefix consist only of lowercase English letters.
//     At most 3 * 104 calls in total will be made to insert, search, and startsWith.

class Trie {
    private rootNodes: { val?: number; children?: any }[]
    private aIndex: number

    constructor() {
        this.rootNodes = new Array(26)
        this.aIndex = 'a'.charCodeAt(0)
    }

    insert(word: string): void {
        let i = 0
        let nextLevel = this.rootNodes
        while (i < word.length) {
            const index = (word.codePointAt(i) as number) - this.aIndex
            nextLevel[index] ??= {}
            if (i === word.length - 1) {
                nextLevel[index].val = word.length
            } else {
                nextLevel[index].children ??= new Array(26)
                nextLevel = nextLevel[index].children
            }
            i++
        }
    }

    private searchWord(word: string): object | undefined {
        let i = 0
        let nextLevel = this.rootNodes
        while (nextLevel && i < word.length) {
            const index = (word.codePointAt(i) as number) - this.aIndex
            if (!nextLevel[index]) {
                return undefined
            }
            if (i === word.length - 1) {
                return nextLevel[index]
            }
            nextLevel = nextLevel[index].children
            i++
        }
        return undefined
    }

    search(word: string): boolean {
        const result = this.searchWord(word) as { val?: number }
        return !!result?.val
    }

    startsWith(prefix: string): boolean {
        const result = this.searchWord(prefix)
        return result !== undefined
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

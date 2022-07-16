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
    public rootNodes: { [key: string]: { val?: number; children?: any } }
    public aIndex: number

    constructor() {
        this.rootNodes = {}
    }

    insert(word: string): void {
        let i = 0
        let nextLevel = this.rootNodes
        while (i < word.length) {
            nextLevel[word[i]] ??= {}
            if (i === word.length - 1) {
                nextLevel[word[i]].val = word.length
            } else {
                nextLevel[word[i]].children ??= {}
                nextLevel = nextLevel[word[i]].children
            }
            i++
        }
    }
}

class WordDictionary {
    trie: Trie
    constructor() {
        this.trie = new Trie()
    }

    addWord(word: string): void {
        this.trie.insert(word)
    }

    search(word: string): boolean {
        return this.match(word, 0, this.trie.rootNodes)
    }

    private match(
        word: string,
        index: number,
        nodes: { [key: string]: { val?: number; children?: any } } | undefined,
    ): boolean {
        if (!nodes) {
            return false
        }

        const char = word[index]
        if (char === '.') {
            if (index === word.length - 1) {
                return Object.values(nodes).some((n) => n?.val)
            }

            for (const singleNodeKey in nodes) {
                if (nodes[singleNodeKey] && this.match(word, index + 1, nodes[singleNodeKey].children)) {
                    return true
                }
            }
            return false
        } else {
            const matchedNodes = nodes[word[index]]
            if (!matchedNodes) {
                return false
            }

            if (index === word.length - 1) {
                return matchedNodes?.val !== undefined
            }

            return this.match(word, index + 1, matchedNodes.children)
        }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

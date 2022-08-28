// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

//     For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:

//     1 <= numCourses <= 2000
//     0 <= prerequisites.length <= 5000
//     prerequisites[i].length == 2
//     0 <= ai, bi < numCourses
//     All the pairs prerequisites[i] are unique.

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if (numCourses <= 1 || !prerequisites?.length) {
        return true
    }

    class Digraph {
        V: number = 0
        adj: number[][]

        constructor(V: number) {
            this.V = V
            this.adj = new Array(V).fill(0)
            this.adj = this.adj.map((_) => [])
        }

        addEdge([to, from]: number[]): void {
            const list = this.adj[from]
            list.push(to)
        }
    }

    const digraph = new Digraph(numCourses)
    const marked = new Array(digraph.V)
    const onStack = new Array(digraph.V)
    let hasCycle = false
    for (const singlePrerequisite of prerequisites) {
        digraph.addEdge(singlePrerequisite)
    }

    return !isDAG(digraph)

    function isDAG(d: Digraph): boolean {
        for (let v = 0; v < d.V; v++) {
            if (!marked[v]) {
                dfs(d, v)
            }
        }
        return hasCycle
    }

    function dfs(d: Digraph, v: number) {
        if (hasCycle) {
            return
        }
        marked[v] = true
        onStack[v] = true

        const adj = d.adj[v]
        for (const w of adj) {
            if (!marked[w]) {
                dfs(d, w)
            } else if (onStack[w]) {
                hasCycle = true
                return
            }
        }

        onStack[v] = false
    }
}

// You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.

// You are given an array of employees employees where:

//     employees[i].id is the ID of the ith employee.
//     employees[i].importance is the importance value of the ith employee.
//     employees[i].subordinates is a list of the IDs of the direct subordinates of the ith employee.

// Given an integer id that represents an employee's ID, return the total importance value of this employee and all their direct and indirect subordinates.

// Definition for Employee.
class Employee {
    id: number
    importance: number
    subordinates: number[]
    constructor(id: number, importance: number, subordinates: number[]) {
        this.id = id === undefined ? 0 : id
        this.importance = importance === undefined ? 0 : importance
        this.subordinates = subordinates === undefined ? [] : subordinates
    }
}

function getImportance(employees: Employee[], id: number): number {
    if (!employees?.length) {
        return 0
    }

    const idToEmployee = new Map<number, Employee>()
    for (const singleEmployee of employees) {
        idToEmployee.set(singleEmployee.id, singleEmployee)
    }

    const root = idToEmployee.get(id) as Employee
    let queue: Employee[] = [root]
    let result = 0
    while (queue.length) {
        const nextLevel: Employee[] = []
        for (const singleNode of queue) {
            if (!singleNode) {
                continue
            }
            result += singleNode.importance
            for (const singleId of singleNode.subordinates) {
                const singleSubordinate = idToEmployee.get(singleId)
                singleSubordinate && nextLevel.push(singleSubordinate)
            }
        }
        queue = nextLevel
    }

    return result
}

const tree = [
    {
        count: 5,
        c: [
            {
                count: 10,
                c: [
                    {
                        count: 11
                    }
                ]
            },
            {
                count: 7,
                c: [
                    {
                        count: 5,
                        c: [
                            {
                                count: 1
                            }
                        ]
                    }
                ]
            },
            {
                count: 5,
                c: [
                    {
                        count: 10
                    },
                    {
                        count: 15
                    }
                ]
            }
        ]
    }
]

const treeRecursive = (tree) => {
    let sum = 0;

    tree.forEach((item) => {
        sum += item.count
        if(!item.c) {
            return item.count
        }
        sum += treeRecursive(item.c)
    }
    )
    
    return sum;
}

console.log(treeRecursive(tree))
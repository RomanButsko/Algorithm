let input1 = [[1,3], [2,6], [8,10], [15, 18]] //[[1,6], [8,10], [15,18]]
let input2 = [[1,4], [4,5], [6, 3]] // [[1,5]]
let input3 = [[11,12], [2,3], [5, 7], [1, 4], [8, 10], [6, 8]]
let input4 = [[1, 4], [2, 3], [5, 7], [6, 8], [8, 10], [11, 12]]


function merge(arr) {

    arr.sort((a,b) => a[0] - b[0])

    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            if (k % 2 !== 0) { 
                if (arr[i][k] >= arr[i + 1][k - 1] && arr[i][k - 1] <= arr[i + 1][k]) {
                    console.log(arr[i][k])
                    arr[i + 1][k - 1] = arr[i][k - 1];
                    arr[i].length = 0
                }
            }
        }
    }
    return arr.filter(elem => !!elem.length)
}

console.log(merge(input3))

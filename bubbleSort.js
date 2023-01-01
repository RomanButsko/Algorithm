const arr = [1, 3, 5, 2, 4, 6, 0];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length - 1; k++) {
            if (arr[i] < arr[k]) {
                [arr[i], arr[k]] = [arr[k], arr[i]]
            }
        }
    }
    return arr;
}
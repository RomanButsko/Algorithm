const arr = [1, 3, 5, 2, 4, 6, 0];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
}
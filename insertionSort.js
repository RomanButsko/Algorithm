let arr = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentElem = arr[i];

        let k = i;

        while (k > 0 && arr[k - 1] > currentElem) {
            arr[k] = arr[k - 1];
            k--;
        }
        arr[k] = currentElem;
    }
    return arr
}
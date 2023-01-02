const arr = [1, 3, 5, 2, 4, 6, 0];

function quickSort(arr) {
    if (arr.length <= 1 ) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2);
    let middleElem = arr[middleIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === middleIndex) {
            continue
        }
        if (middleElem > arr[i]) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), middleElem, ...quickSort(greater)]
}
const arr = [1, 30, 25, 12, 184, 6, 0];

function binarySearch(arr, elem) {
    arr.sort((a, b) => a - b);

    let start = 0;
    let end = arr.length;

    let middleIndex;
    let found = false;
    let position;

    while(found === false && start <= end) {
        middleIndex = Math.floor((start + end )/ 2);
        if (arr[middleIndex] === elem) {
            found = true;
            position = middleIndex;
            return position;
        }
        if (elem < arr[middleIndex]) {
            end = middleIndex - 1;
        } else {
            start = middleIndex + 1;
        }
    }

    return position;
}


//Recursive

function binarySearch(arr, elem, start, end) {
    arr.sort((a, b) => a - b);

    let middleIndex = Math.floor((start + end) / 2);
    
    if (arr[middleIndex] === elem) {
        return middleIndex
    }
    
    if (elem < arr[middleIndex]) {
        return binarySearch(arr, elem, start, middleIndex - 1);
    } else {
        return binarySearch(arr, elem, middleIndex + 1, end)
    }
}
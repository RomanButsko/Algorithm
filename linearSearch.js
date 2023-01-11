const linear = (arr, target) => {
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) return `Found: ${arr[i]} in ${steps} steps`;
    };
};
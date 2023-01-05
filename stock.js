// количество элементов от 1 до 100 000
// элементы внутри от 0 до 10 000
// [7,1,3,5,6,4]

const arr = [7,6,4,8,1];

//1
function stock(priceArr) {
    let sum = []
    for (let i = 0; i < priceArr.length; i++) {
        for (let k = i + 1; k < priceArr.length; k++) {
            if (priceArr[k] > priceArr[i]) {
                sum.push(priceArr[k] - priceArr[i])
            }
        }
    }
    return sum.length ? Math.max(...sum) : 0
}

console.log(stock(arr))

//2
function stock2(priceArr) {
    let minPrice = priceArr[0];
    let maxPrice = 0;

    for (let i = 0; i < priceArr.length; i++) {
        let currentPrice = priceArr[i];

        if (currentPrice < minPrice) {
            minPrice = currentPrice
        }

        if (currentPrice - minPrice > maxPrice) {
            maxPrice = currentPrice - minPrice
        }
    }
    
    return maxPrice;
}

console.log(stock2(arr))
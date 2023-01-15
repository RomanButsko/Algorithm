const arr = [0, 7, 1, 5, 3, 6, 4];


function stock(prices) {
    let maxPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        let nextPrice = prices[i + 1];

        if (nextPrice > prices[i]) {
            maxPrice += nextPrice - prices[i]
        }
    }
    return maxPrice
}  

console.log(stock(arr))
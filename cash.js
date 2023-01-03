function factorial(n) {
    let result = 1;
    while(n !== 1) {
        result *= n;
        n -= 1; 
    }
    return result;
}

function cashFn(fn) {
    let cash = {};
    return function(n) {
        if (cash[n]) {
            return cash[n]
        }
        let result = fn(n);
        cash[n] = result;
        return result;
    }
}

const cashFactorial = cashFn(factorial);

console.log(cashFactorial(5))
const fibonacci = function(num) {
    const loopCount = parseInt(num);
    let fib = [];

    if (num === 1 || num === 2){
        return 1
    } else if (num < 0){
        return 'OOPS'
    }  else {
        fib.push(1);
        fib.push(1);

        for (let i = 2; i < loopCount; i++){
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib[loopCount-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;

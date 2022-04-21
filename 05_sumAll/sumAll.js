const sumAll = function(...moreArgs) {
let higher;
let lower;
let sum = 0;

// if number is negative

// if either value is not an int

// loop determining the lower value
for (let i = 0; i < moreArgs.length; i++){
    lower = moreArgs[0];

    if (moreArgs[1] < lower){
        lower = moreArgs[1];
        higher = moreArgs[0];
    } else {
        higher = moreArgs[1];
    }
}


// loop to sum values
for (let i = lower; i <= higher; i++){
    sum += i;
}

return sum;
};

// Do not edit below this line
module.exports = sumAll;

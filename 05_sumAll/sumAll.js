const sumAll = function(...moreArgs) {
let higher;
let lower;
let sum = 0;

// if number is negative
if (moreArgs[0] < 0 || moreArgs[1] < 0){
    return 'ERROR'
} // if either value is not an int
    else if (typeof(moreArgs[0]) !== typeof(0) || typeof(moreArgs[1]) !== typeof(0)){
    return 'ERROR'
} else {

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
}
};

// Do not edit below this line
module.exports = sumAll;

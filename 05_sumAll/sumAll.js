const sumAll = function(...moreArgs) {
let higher;
let lower;
let sum = 0;

// loop determining the lower value
for (let i = 0; i < moreArgs.length; i++){
    lower = moreArgs[0];

    if (moreArgs[i] < lower){
        lower = moreArgs[i];
    }
}

// loop determining the higher value
for (let i = 0; i < moreArgs.length; i++){
higher = moreArgs[0];

if (moreArgs[i] > higher){
    higher = moreArgs[i];
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

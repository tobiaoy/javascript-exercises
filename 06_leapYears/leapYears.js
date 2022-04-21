const leapYears = function(number) {
let num = number;

if (num % 100 === 0){
    return false;
} else if (num % 4 === 0 || num % 400 === 0){
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;

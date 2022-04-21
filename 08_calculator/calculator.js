const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i]; 
  }

  return sum;
};

const multiply = function(arr) {
  let res = 1;

  for (let i = 0; i < arr.length; i++){
    res *= arr[i];
  }

  return res;
};

const power = function(num, power) {
	let res = Math.pow(num, power);

  return res;
};

const factorial = function(num) {
	let res;

  if (num === 0){
    res = 1;
  } else {
    res *= factorial(num - 1);
  }

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

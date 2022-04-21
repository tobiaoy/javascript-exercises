const palindromes = function (s) {
//remove all whitespace
let str = s.replace(/^\s+|\s+|\s+$/gm,'');

//remove punctuation
str = str.replace(/[^\w\s]/g, '');

//set string to lowercase
str = str.toLowerCase();

//create reverse string

// -> split the string 
split_str = str.split("");
let reverse_str = [];

// -> reverse the split string 
for (let i = split_str.length; i >= 0; i--){
    reverse_str.push(split_str[i]);
}

// -> put the string back together
let rev_str = reverse_str.join("");


//condition to check if the string and reverse string are the same
if(str === rev_str){
    return true;
} else {
    return false;
}

};

// Do not edit below this line
module.exports = palindromes;

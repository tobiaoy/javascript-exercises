// A function to reverse any string

const reverseString = function(string) {
// take the string
const str = string

// split the string 
split_str = str.split("");
let reverse_str = [];

// reverse the split string 
for (let i = split_str.length; i >= 0; i--){
    reverse_str.push(split_str[i]);
}

// put the string back together
let rev_str = reverse_str.join("");

return rev_str;
};

// Do not edit below this line
module.exports = reverseString;

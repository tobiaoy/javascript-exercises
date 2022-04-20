

const repeatString = function(string, num) {
    let str = '';
    const number = Math.floor(Math.random() * 1000);

    if (num < 0) {
        return "ERROR"
   } else if (num === 0 || string === ''){
       return "";
   } else if (string != '' && num > 0){
       for (let i = 1; i <= num; i++){
           str += string;
           }
           return str;
   } else if (typeof(num) === undefined){
       for (let i = 1; i<= number; i++){
           str += string;
       }
       return str;
   }
};

// Do not edit below this line
module.exports = repeatString;

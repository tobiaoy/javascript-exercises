const removeFromArray = function(arr, ...moreArgs) {

    // take array
    let original = arr;

    // take values
    let args = moreArgs;

    // get index of values
    for (let i = 0; i < args.length; i++){
        let index = original.indexOf(args[i]);
        if (index > -1){
        original.splice(index, 1);
        }
    } 
    
    // return new array
    return original;
};

// Do not edit below this line
module.exports = removeFromArray;

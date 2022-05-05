const findTheOldest = function(arr) {
    let older;

    //function to get age
    function getAge(obj){
        let currYear = ((new Date()).getFullYear());
        
        if (obj.yearOfDeath){
        return obj.yearOfDeath - obj.yearOfBirth;
        } else {
          return currYear - obj.yearOfBirth;
        }
      };

    //function to find the oldest given an array of values
    const oldest = arr.reduce((previous, current) => {
        if(getAge(current) > getAge(previous)){
        older = current;
        } else {
        older = previous;
        }
        return older;
    });

    return older;
    }

// Do not edit below this line
module.exports = findTheOldest;


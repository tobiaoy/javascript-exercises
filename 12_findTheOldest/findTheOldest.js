const findTheOldest = function(arr) {
    let older;

    function getAge(obj){
        let currYear = (new Date()).getFullYear;
        
        if (obj.yearOfDeath){
        return obj.yearOfDeath - obj.yearOfBirth;
        } else {
          return currYear - obj.yearOfBirth;
        }
      };

      const oldest = arr.reduce((previous, current) => {
        //check to see if person has died
        if (getAge(current) > getAge(previous)){
          older = current;
        } else {
          older = previous;
        }
        
        return older;
      });
      
      return older;
};

// Do not edit below this line
module.exports = findTheOldest;

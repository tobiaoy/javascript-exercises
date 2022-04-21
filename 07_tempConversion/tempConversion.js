const ftoc = function(num) {
let ftemp = num;

let ctemp = (ftemp - 32) * 5/9;
ctemp = ctemp.toFixed(1);

return ctemp;
};

const ctof = function(num) {
let ctemp = num;

let ftemp = (ctemp * 9/5) + 32;
ftemp = ftemp.toFixed(1);

return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

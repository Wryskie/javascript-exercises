const ftoc = function(num) {
  let converted = (num - 32) * 5/9 ;
  rounded = Math.round(converted * 10) / 10;
  return rounded;

};

const ctof = function(num) {
  let converted = (num * 9/5) + 32;
  rounded = Math.round(converted * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

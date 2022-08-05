const reverseString = function(string) {
  let splitString = string.split("");
  console.log(splitString);
  let reversed = [];
  
  for (i = splitString.length; i > 0; i--) {
    reversed.push(splitString[i - 1]);
  }
  console.log(reversed);
  return reversed.join("");
  

};

// Do not edit below this line
module.exports = reverseString;

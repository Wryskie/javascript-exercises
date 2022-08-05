const sumAll = function (num1, num2) {

  let sum = 0;
  let bigNum = 0;
  let smallNum = 0;

  // Checks if numbers are actually numbers
  if (typeof (num1 && num2) === 'number') {
    // Organizes smaller and bigger numbers while error checking for negative numbers.
    if (num1 > num2 && num1 > 0 && num2 > 0) {
      bigNum = num1;
      smallNum = num2;
    }
    else if (num1 < num2 && num1 > 0 && num2 > 0) {
      smallNum = num1;
      bigNum = num2;
    }
    else {
      return "ERROR";
    }

    for (let i = smallNum; i <= bigNum; i++) {
      sum += i;
    }
    return sum;
  }
  else {
    return "ERROR";
  }
}
// Do not edit below this line
module.exports = sumAll;



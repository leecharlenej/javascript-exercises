const add = function(left, right) {
  return left+right;
};

const subtract = function(left, right) {
	return left-right;
};

const sum = function(arr) {
  return arr.reduce((accum,item) => accum+item,0)
	
};

const multiply = function(arr) {
  return arr.reduce((accum,item) => accum*item, 1);
};

const power = function(num,power) {
  return num**power;
};

const factorial = function(num) {
  if (num===0){
    return 1;
  } else {
    return [...Array(num).keys()]
            .map(item => item+1, )
            .reduce((accum,item) => accum*item,1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

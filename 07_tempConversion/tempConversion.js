const convertToCelsius = function(tempFahrenheit) {
  let ans = (tempFahrenheit-32)*5/9;
  ansRound = Math.round(ans*10)/10;
  return ansRound;
};

const convertToFahrenheit = function(tempCelsius) {
  let ans = (tempCelsius*9/5)+32
  ansRound = Math.round(ans*10)/10;
  return ansRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

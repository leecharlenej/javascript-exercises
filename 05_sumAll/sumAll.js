const sumAll = function(num1, num2) {

    if ((typeof num1 !== "number") || (typeof num2 != "number")
        || (num1 < 0) || (num2 <0)
        || (num1 > Math.floor(num1) && num1 < Math.ceil(num1))
        || (num2 > Math.floor(num2) && num2 < Math.ceil(num2)) ){
        return ("ERROR");
    }

    let numSmall, numBig;

    if (num1 > num2) {
        numSmall = num2;
        numBig = num1;
    } else {
        numSmall = num1;
        numBig = num2;
    }

    let sum = 0;
    
    for (let i=numSmall; i<=numBig; i++) {
        sum += i;
    }

    return sum;

};


// Do not edit below this line
module.exports = sumAll;

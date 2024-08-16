const fibonacci = function(num) {
    let ansArr = [0,1,1];
    if (num < 0) {
        return "OOPS";
    } else if(num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {

        for (i=3; i<=num; i++) {
            ansArr.push(ansArr[i-2]+ansArr[i-1]);
        }

        return ansArr[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;

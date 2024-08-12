const repeatString = function(randomString, num) {
    
    if (num < 0) {
        return "ERROR";
    }
    
    let answer = '';

    for (i=0; i<num; i++) {
        answer = answer + randomString;
    }

    return answer;
};

// Do not edit below this line
module.exports = repeatString;

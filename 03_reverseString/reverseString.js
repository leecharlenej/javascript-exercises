const reverseString = function(word) {
    let wordArr = [];
    for (let i=0; i<word.length; i++) {
        wordArr.unshift(word[i]);
    }
    let ans = wordArr.join('');
    return ans;

};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (str) {
    let strNoSpace = str.replaceAll(" ", "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let reverseStr = strNoSpace.split("").reverse().join("");
    if (strNoSpace === reverseStr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;

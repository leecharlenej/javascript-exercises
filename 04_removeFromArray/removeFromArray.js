const removeFromArray = function(arrNum, ...theArgs) {
    let ansArr = [];

    outer: for(let i=0; i<arrNum.length; i++){
        // console.log(`Outer: ${arrNum[i]}`);
        
        for(const arg of theArgs){
            if (arrNum[i] === arg) {
                // console.log('equal');
                continue outer;
            }
        }

        ansArr.push(arrNum[i]);

    }
    
    return ansArr;
};

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;

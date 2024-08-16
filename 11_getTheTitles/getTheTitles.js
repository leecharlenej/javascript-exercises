const getTheTitles = function(booksArr) {
    let ansArr = [];

    for (i=0; i<booksArr.length; i++){
        ansArr.push(booksArr[i].title);
    }
    console.log(ansArr);
    return ansArr;
};

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

//   getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;

const findTheOldest = function(peopleArr) {
   let ans;
   let oldestAge = 0;

   for (let i=0; i<peopleArr.length; i++) {
    let currPerson = peopleArr[i];

    if (!currPerson.yearOfDeath){
        currPerson.yearOfDeath = 2024;
    }

    let currAge = currPerson.yearOfDeath - currPerson.yearOfBirth;
    
    if ( currAge > oldestAge ){
        oldestAge = currAge;
        ans = currPerson;
    }
   }
   // console.log(ans);
   return ans;
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

//   findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;

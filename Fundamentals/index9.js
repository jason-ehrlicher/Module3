// Question 9:
// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports and add new sport
// let moreSports = teamSports;
// moreSports.push('Baseball');
// moreSports.unshift('Football');

// b) Create a new dog2 variable equal to dog1 and give it a new value
// let dog2 = dog1;
// dog2 = 'Sparky';

// c) Create a new cat2 variable equal to cat1 and change its name property
// let cat2 = cat1;
// cat2.name = 'Garth';

// d) Print the original teamSports, dog1 and cat1 variables to the console.
// console.log(teamSports);
// console.log(dog1);
// console.log(cat1);

// dog1 has not changed because we are creating a new string with the same value.  
// cat1 has changed because we modified the object it points to.

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
let moreSports = [...teamSports];
moreSports.push('Baseball');
moreSports.unshift('Football');

let cat2 = { ...cat1 };
cat2.name = 'Garth';
cat2.breed = 'Persian';

console.log(teamSports);
console.log(cat1);
console.log(moreSports);
console.log(cat2);
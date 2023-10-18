// Question 2:
// Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?

let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?

// let addition = three + four
// this will result in 34 because the values are strings and not numbers because implicit conversion is not happening

// let multiplication = three * four
// this will result in 12 because js will convert the strings to numbers

// let division = three / four
// this will result in 0.75 because js will convert the strings to numbers

// let subtraction = three - four
// this will result in -1 because js will convert the strings to numbers

// let lessThan1 = three < four
// this will result in true because js will compare them lexicographically

// let lessThan2 = thirty < four
// this will result in false because js will compare them lexicographically and 3 is less than 4

// console.log(addition);
// console.log(multiplication);
// console.log(division);
// console.log(subtraction);
// console.log(lessThan1);
// console.log(lessThan2);

// To get the expected mathematical results, we can use parseInt to convert the strings to numbers

let addition = parseInt(three) + parseInt(four);
let multiplication = parseInt(three) * parseInt(four);
let division = parseFloat(three) / parseFloat(four);
let subtraction = parseInt(three) - parseInt(four);
let lessThan1 = parseInt(three) < parseInt(four);
let lessThan2 = parseInt(thirty) < parseInt(four);

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

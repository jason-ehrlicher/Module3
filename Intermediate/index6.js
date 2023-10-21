// Question 6: 
// Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.
// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicatesArray) {
    let uniqueSet = new Set(duplicatesArray);
    return Array.from(uniqueSet);
}

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

console.log(unique(colors)) 
console.log(unique(testScores))

const mixedValues = [1, 5, 5, 6, 9, 'cat', 'cat', 'lion', 'lion', 'dog'];
console.log(unique(mixedValues));
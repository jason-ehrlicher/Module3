// Question 6:
// Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
// function multiply(a, b) {
// console.log( a * b );
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.

Function.prototype.delay = function (ms) {   // use the function prototype to add delay(ms) to all functions
  let func = this;
  return function (a, b) {
    setTimeout(() => func(a, b), ms);
  };
};

// function multiply(a, b) {  // a) use the multiply function to test
//   console.log(a * b);
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds


Function.prototype.delay = function(ms) {  // b) use apply to improve solution
    let func = this;
    return function(...args) {
        setTimeout(() => func.apply(null, args), ms)
    }
}

// function multiply(a, b) {  // b) test
//     console.log(a * b);
// }

// multiply.delay(500)(5, 5)

function multiply(a, b, c, d) {  // c) modify multiply to take 4 parameters
    console.log(a * b * c * d)
}

multiply.delay(1000)(3, 6, 9, 12)

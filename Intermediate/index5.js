// Question 5:
// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns

// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

//------------------------- ANSWERS ----------------------------------------------

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Explain why the above code returns the wrong answer

// The above code returns the wrong answer because it is concatenating strings instead of adding numbers.

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers

let twentyCents = 0.2;
let tenCents = 0.1;

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

function currencyAddition(float1, float2) {
  let num1 = typeof float1 === "string" ? parseFloat(float1) : float1; //convert inputs to numbers if they are strings
  let num2 = typeof float2 === "string" ? parseFloat(float2) : float2;

  return parseFloat((num1 + num2).toFixed(2));
}

console.log(
  "Currency Addition Result:  ",
  currencyAddition(fixedTen, fixedTwenty)
);
console.log("Currency Addition Result:  ", currencyAddition(0.1, 0.2));

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.

function currencyOperation(float1, float2, operation, numDecimals = 2) {  //extend the function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
  let num1 = typeof float1 === "string" ? parseFloat(float1) : float1; //convert inputs to numbers if they are strings
  let num2 = typeof float2 === "string" ? parseFloat(float2) : float2;

  if (numDecimals < 1 || numDecimals > 10) {
    throw "numDecimals must be between 1 and 10";
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  return parseFloat(result.toFixed(numDecimals));
}

console.log("Currency Operation Result:  ", currencyOperation(0.1, 0.2, "+"));
console.log("Currency Operation Result:  ", currencyOperation(0.1, 0.2, "-"));
console.log(
  "Currency Operation Result:  ",
  currencyOperation(fixedTen, fixedTwenty, "*")
);
console.log(
  "Currency Operation Result:  ",
  currencyOperation(tenCents, twentyCents, "/")
);

console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, "+"));
console.log(
  "Currency Operation Result:  ",
  currencyOperation(0.31415999, 0.555, "*", 4)
);


// --testing error throw-- 
// console.log(
//     "Currency Operation Result:  ",
//     currencyOperation(0.31415999, 0.555, "*", 11)
//   );


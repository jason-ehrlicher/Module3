// Question 4:
// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

// a) Write a function camelCase(cssProp) that changes dash-separated CSS properties into camel-cased
function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

// b) Create variants of the camelCase function that use different types of for loops
function camelCase(cssProp) {
  const words = cssProp.split("-");
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}

console.log("For loop function: ", camelCase("margin-left"));
console.log("For loop function: ", camelCase("background-image"));
console.log("For loop function: ", camelCase("display"));

// c) For...of loop function
function camelCase(cssProp) {
  let result = "";
  let capitalize = false;

  for (const char of cssProp) {
    if (char === "-") {
      capitalize = true;
    } else if (capitalize) {
      result += char.toUpperCase();
      capitalize = false;
    } else {
      result += char;
    }
  }
  return result;
}

console.log("For...of loop function: ", camelCase("margin-left"));
console.log("For...of loop function: ", camelCase("background-image"));
console.log("For...of loop function: ", camelCase("display"));

//for loop without conditional operator
function camelCase(cssProp) {
    let result = '';
    let capitalizeNext = false;
    for (let i = 0; i < cssProp.length; i++) {
        if (cssProp[i] === '-') {
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                result += cssProp[i].toUpperCase();
                capitalizeNext = false;
            } else {
                result += cssProp[i];
            }
            }
        }
    return result;
    }

console.log("For loop w/o conditional operator function: ", camelCase("margin-left"));
console.log("For loop w/o conditional operator function: ", camelCase("background-image"));
console.log("For loop w/o conditional operator function: ", camelCase("display"));


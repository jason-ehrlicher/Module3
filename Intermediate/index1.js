// Question 1:
// Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {  //create a function to capitalize the first letter of each word
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

//test the function
console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("new york"));
console.log(ucFirstLetters("new orleans"));
console.log(ucFirstLetters("my name is jason"));

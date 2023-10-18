// Question 5:
// Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("Jason"));

// Function expression syntax
const getGreetingExp = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreetingExp("Jason"));

// Arrow function syntax
const getGreetingArrow = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreetingArrow("Jason"));

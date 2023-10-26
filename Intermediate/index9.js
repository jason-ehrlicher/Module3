// Question 9:
// Given the below salaries object, perform the following tasks.
// let salaries = {
// "Timothy" : 35000,
// "David" : 25000,
// "Mary" : 55000,
// "Christina" : 75000,
// "James" : 43000
// };
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all
// salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the
// person earning the highest salary

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function that calculates the sum of salaries
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

console.log(sumSalaries(salaries));

// b) Write a function that returns the name of the highest earner
function topEarner(salaries) {
    let highestSalary = 0
    let highestEarner = '';
    for( let [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary;
            highestEarner = name;
        }
    }
    return highestEarner;
}

console.log(topEarner(salaries))
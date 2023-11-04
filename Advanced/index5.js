// Question 5:
// The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
// let car = {
// make: "Porsche",
// model: '911',
// year: 1964,
// description() {

// console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// }
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails
// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function
// b) Change the year for the car by creating a clone of the original and overriding it
// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)

// ------Answers------

// The setTimeout function fails because it calls "car.description" without a "car", so "this" is undefined.

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works

setTimeout(() => car.description(), 200)  // a) fix setTimeout by wrapping car.description inside function

let car2023 = {...car, year: 2023}  // b) change year by creating a car clone and overriding it

car2023.description(); //works

setTimeout(() => car2023.description(), 200) 

// c) description() will us the original "car" values because setTimeout was set referring to the original "car". Even if modified later, the function remains tied to the original "car" used when setTimeout was called.

setTimeout(car.description.bind(car), 300);  // d) use bind to fix description method

let carFord = {...car, make: "Ford"};  // e)  change another property of the car

carFord.description();
setTimeout(car.description.bind(car), 300);   // e) test setTimeout still uses the bound value form d)

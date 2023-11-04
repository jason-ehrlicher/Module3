// Question 7:
// In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details
// b) Test your method by creating 2 different people using the below constructor function
// and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.


function Person(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
// define custom toString method for the person object that will format and print their details
this.toString = function() {
    return `Name = ${this.name}, Age = ${this.age}, Gender = ${this.gender}`
}
}
const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Jason Ehrlicher', 34, 'male')  //  b) Test the method by creating 2 different people using the constructor function 

console.log('Person 1: '+person1) //prints person1: [object Object]
console.log('Person 2: '+person2)

function Student(name, age, gender, cohort) {  // c) create a const function student that use call to inherit from person and add an extra property cohort
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);  
Student.prototype.constructor = Student;
Student.prototype.toString = function() {
    return Person.prototype.call(this) + `, cohort=${this.cohort}`
}

const student1 = new Student('Cam Newton', 44, 'male', 'swe2023')  // d) add a custom toString for Student objects
const student2 = new Student('Matt Ryan', 29, 'male', 'ds2020')

console.log(`Student 1: `+ student1)
console.log(`Student 2: `+ student2)
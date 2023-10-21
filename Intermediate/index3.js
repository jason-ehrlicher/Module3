// Question 3:
// Use the following animals array for the below tasks. Test each one by printing the result to
// the console. 


// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
console.log(animals)

// a) Add 2 new values to the end
animals.push('Cat', 'Dog')
console.log(animals)

// b) Add 2 new values to the beginning
animals.unshift('Lion', 'Bear')
console.log(animals)

// c) Sort the values alphabetically
animals.sort()
console.log(animals)

// d) Write a function replaceMiddleAnimal(newValue)
function replaceMiddleAnimal(newValue) {
    const middle = Math.floor(animals.length / 2);
    animals[middle] = newValue;
}

replaceMiddleAnimal('Moose')
console.log(animals)

// e) Write a function findMatchingAnimals(beginsWith), make it work regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
    const searchString = beginsWith.toLowerCase();
    return animals.filter(animal => 
        animal.toLowerCase().startsWith(searchString)
        );
}

console.log(findMatchingAnimals('m'))
console.log(findMatchingAnimals('T'))

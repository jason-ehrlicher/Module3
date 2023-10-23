// Question 8:
// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialize the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book


const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const defContacts = [  // b) initialize the contents of phoneBookDEF
    ['Debbie', '0444444445'],
    ['Ed', '0455555556'],
    ['Frank', '0466666667']
]

const phoneBookDEF = new Map(defContacts) // a) create phoneBookDEF Map

phoneBookABC.set('Caroline', '0455221199') // c) update the phone number for Caroline

function printPhoneBook (contacts) {  // d) write a function printPhoneBook(contacts)
    for (const [name, phoneNumber] of contacts) {
        console.log(`${name}: ${phoneNumber}`);
    }
}

// printPhoneBook(phoneBookABC)

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]) // e) combine the contents of the two individual Maps into a single phoneBook Map

printPhoneBook(phoneBook) // f) print out the full list of names in the combined phone book
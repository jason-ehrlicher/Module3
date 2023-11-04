// Question 9:
// We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value


function randomDelay() {
    // Create a promise
    return new Promise((resolve, reject) => {
        // generate random delay between 1 and 20
        let delay = Math.floor(Math.random() * 20 + 1) * 1000;
        setTimeout(() => {
            // resolve or reject the promise based on being even or odd
            if (delay % 2000 === 0) {
                resolve(delay);
            } else {
                reject(delay)
            }
        }, delay);
    })
}

randomDelay()
    .then((delay) => console.log(`Delay of ${delay / 1000} seconds was successful.`))
    .catch((delay) => console.log(`Delay of ${delay / 1000} seconds failed, it was an odd number.`));
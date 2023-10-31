// Question 4:
// The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

// a) write a printFibonacci function
function printFibonacci() {
    let[prev, curr] = [0, 1];
    let interval = setInterval(() => {
        console.log(`[Interval] ${curr}`);
        [prev, curr] = [curr, prev + curr];
    }, 1000);
    return interval;
}

const intervalId = printFibonacci();

//stops the printFibonacci function
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped printing interval Fibonacci sequence after ten seconds')
}, 10000);

// b) write a printFibonacciTimeouts function that uses nested setTimeout
function printFibonacciTimeouts (limit) {
    let [prev, curr] = [0, 1];
    let count = 0;

    function printNext() {
        if (count >= limit) {         // c) extend the above function to accept limit argument
            return; 
        }
        console.log(`[Timeout] ${curr}`); [prev, curr] = [curr, prev + curr];
        count++;

        setTimeout(printNext, 1000);
    }
    printNext()
}

printFibonacciTimeouts(5);
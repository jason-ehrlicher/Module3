// Question 2:
// The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

// --------------Answers--------------
// a)  The order in which the four tests will print is:
// This message will be printed after a delay: #4: Not delayed at all, this message will run immediately without delay
// This message will be printed after a delay: #3: Delayed by 0ms, a 0ms delay will run after the current tasks are cleared, so it runs after the immediate function but before the delayed functions.
// This message will be printed after a delay: #2: Delayed by 20ms, the delayed functions will execute in order.
// This message will be printed after a delay: #1: Delayed by 100ms


// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// b) Rewrite delayMsg as arrow function

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


let cancelMsg = setTimeout(delayMsg, 13000, '#5: Delayed by 13s')  // c) add a fifth test which uses a delay greater than ten seconds
clearTimeout(cancelMsg); // d) cancel the fifth test

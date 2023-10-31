// Question 1:
// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

function makeCounter(startFrom = 0, incrementBy = 1) {
  // let currentCount = 0;                 // modify makeCounter to take startFrom argument
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy; //  modify makeCounter to take incrementBy argument
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//create a second counter
let counter2 = makeCounter();
counter2();
counter2();

//counter to test startFrom
let counter3 = makeCounter(8);
counter3();
counter3();

// counter to test incrementBy
let counter4 = makeCounter(3, 3);
counter4();
counter4();

// Question 10:
// The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the
// amount of days in between the two given dates.

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
const totalMinutesToday = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutesToday + " minutes have passes so far today");

// b) Print the total number of seconds that have passed so far today
const totalSecondsToday = totalMinutesToday * 60 + today.getSeconds();
console.log(totalSecondsToday + " seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old' (September 12th, 1989)
const birthDate = new Date(1989, 8, 12);
const ageDiff = new Date(today - birthDate);

const years = ageDiff.getUTCFullYear() - 1970;
const months = ageDiff.getUTCMonth();
const days = ageDiff.getUTCDate() - 1;

console.log(`I am ${years} years, ${months} months, and ${days} days old.`);

// d) Function that calculates amount of days between two given dates
function daysInBetween(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(date2 - date1);
  const dayDiff = Math.round(timeDiff / oneDay);
  return dayDiff;
}

const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 11, 31);

console.log(daysInBetween(date1, date2));

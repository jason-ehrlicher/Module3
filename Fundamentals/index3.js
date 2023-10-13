// Question 3:
// Which of the following console.log messages will print? Why?


if (0) console.log('#1 zero is true')
// this will not print because 0 is an empty value

if ("0") console.log('#2 zero is true')
// this will print because "0" is a non-empty string

if (null) console.log('null is true')
// this will not print because null is a non-existing object

if (-1) console.log('negative is true')
// this will print because -1 is a non-zero number

if (1) console.log('positive is true')
// this will print because 1 is a non-zero number
// Question 7:
// The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0, // part c: added method to track fouls

  freeThrow() {
    this.score++;
    return this; // part a: added 'return this' to enable chain
  },

  basket() {
    this.score += 2;
    return this; // part a: added 'return this' to enable chain
  },
  threePointer() {
    this.score += 3;
    return this; // part a: added 'return this' to enable chain
  },
  foul() {
    this.fouls++;
    return this; // part c: added method to track fouls
  },

  halfTimeFouls() {
    // part c: added method to increment fouls
    console.log("The Halftime foul count is " + this.fouls++);
    return this;
  },

  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    // part b: added new method to print full time score
    console.log("Fulltime final score is " + this.score);
    return this;
  },

  fullTimeFouls() {
    // part c: added method to increment fouls
    console.log("The Fulltime foul count is " + this.fouls++);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .foul()
  .basket()
  .threePointer()
  .halfTime()
  .halfTimeFouls()
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .foul()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .freeThrow()
  .freeThrow()
  .fullTime()
  .fullTimeFouls();

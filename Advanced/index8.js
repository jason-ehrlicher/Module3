// Question 8:
// The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision – the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
// const myClock = new DigitalClock("my clock:");
// myClock.start();

class PrecisionClock extends DigitalClock {
  // a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// const preciseClock = new PrecisionClock("Precise Clock: ", 500);
// preciseClock.start();

class AlarmClock extends DigitalClock {   // create AlarmClock that inherits DigitalClock
    constructor(prefix, wakeupTime = "07:00:00") {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    display() {
    super.display();
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(num => num < 10 ? '0' + num : num.toString());
    let currentTime = `${hours}:${mins}` + (this.wakeupTime.length === 5 ? '' : `:${secs}`);
    if (currentTime === this.wakeupTime) {
        console.log('Wake Up!');
        this.stop();
    }
}
}

const alarmClock = new AlarmClock('Alarm Clock: ', "16:13")
alarmClock.start()
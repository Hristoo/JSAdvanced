import { dateFormat, utfTimeToLocal } from "./lib34.js";

class Watch {
  constructor(date) {
    this.date = date || new Date();
    this.startedTimers = new Map();
  }

  showTime(
    format = "HH:mm:ss",
    timeZone = "Europe/Sofia",
    callback = undefined
  ) {
    const utfDate = new Date(utfTimeToLocal(this.date, timeZone));

    if (!this.startedTimers.has(timeZone)) {
      const timer = setInterval(() => {
        this.update(utfDate, format, timeZone, callback);
      }, 1000);
      this.startedTimers.set(timeZone, timer);
    } else if (this.startedTimers.has(timeZone)) {
      return this.hideTime(timeZone);
    }
  }

  update(date, format, timeZone, callback) {
    date.setSeconds(date.getSeconds() + 1);
    const formatedTime = format ? dateFormat(date, format, timeZone) : date;
    if (callback !== undefined) {
      callback([formatedTime]);
    }
    console.log(formatedTime, timeZone);
    // console.log(this)
  }

  hideTime(timeZone) {
    if (this.startedTimers.has(timeZone)) {
      console.log(`You stopped the watch for timezone ${timeZone}`);
      clearInterval(this.startedTimers.get(timeZone));
    }
  }

  chronoStart() {
    this.startTime = Date.now();
  }

  chronoStop() {
    const elapsedTime = Date.now() - this.startTime;
    console.log("seconds:", (elapsedTime % 60000) / 1000);
    console.log("milliseconds:", elapsedTime);
  }
}

function sendData(arr) {
  console.log("It's to late: ", arr.join("/"));
}

const watch = new Watch(new Date("2022-03-07T14:33:42"));

watch.chronoStart();

watch.showTime("HH:mm:s A", "Asia/Singapore", sendData);
watch.showTime("HH:mm:ss", "Europe/London");
watch.showTime("HH:mm:ss", "Europe/Sofia");

setTimeout(() => {
  watch.hideTime("Europe/London");
  watch.chronoStop();
  // watch.showTime("HH:mm:ss A", "Europe/Sofia");
}, 3000);

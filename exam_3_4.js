import { dateFormat, utfTimeToLocal } from "./lib34.js";

class Watch {
  constructor(date) {
    this.date = date ? date : new Date();
  }

  showTime(format, timeZone, callback) {
    // if (this.timeZone) {
    //   clearTimeout(this.timeZone);
    // } else {
      return this.startWatch(format, timeZone, callback);
    // }
  }

  startWatch(format, timeZone, callback) {
    const utfDate = utfTimeToLocal(this.date, timeZone); // use the date from constructor 
    const formatedTime = dateFormat(utfDate, format, timeZone);

    this.timeZone = setTimeout(() => {
      if (callback !== undefined) {
        callback([formatedTime]);
      }
      console.log(this.startWatch(format, timeZone, callback), timeZone); // setinterval
    }, 1000);
    

    return formatedTime;
  }

  hideTime(timeZone) {
    this.showTime("", timeZone);
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

const watch = new Watch();

watch.chronoStart();
const t = setTimeout(() => {
  watch.chronoStop();
  // watch.hideTime("HH:mm:ss A", "Europe/London");
}, 3000);

function sendData(arr) {
  console.log("It's to late: ",arr.join("/"));
}

watch.showTime("HH:mm:ss A", "Europe/London", sendData);
// watch.showTime("HH:mm:ss A", "Europe/Sofia");

// e,g done !!!!
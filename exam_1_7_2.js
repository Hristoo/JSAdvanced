function toISOString(dateInput) {
  let date = {
    year: dateInput.getFullYear(),
    month: dateInput.getMonth() + 1,
    day: dateInput.getDate(),
    hours: dateInput.getHours(),
    minutes: dateInput.getMinutes(),
    seconds: dateInput.getSeconds(),
    milliSeconds: dateInput.getMilliseconds(),
  };

  Object.entries(date).forEach(([key, value], index) => {
    date[key] = pad(value, index != 6 ? 2 : 3);
  });

  return `${date.year}-${date.month}-${date.day}T${date.hours}:${date.minutes}:${date.milliSeconds}Z`;
}

function pad(num, index) {
  num = num.toString().padStart(index, "0");

  return num;
}
console.log(toISOString(new Date()));
// function with args num and index and return string with padding (0004)

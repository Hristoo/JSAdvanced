function toISOString(dateInput) {
  let dateInfo = [
    dateInput.getFullYear(),
    dateInput.getMonth(),
    dateInput.getDate(),
    dateInput.getHours(),
    dateInput.getMinutes(),
    dateInput.getSeconds(),
    dateInput.getMilliseconds(),
  ];

  const delimiters = ["-", "-", "T", ":", ":", ".", "Z"];

  dateInfo = dateInfo.map((x) => pad(x, 2));
  let dateString = "";

  for (let i = 0; i < dateInfo.length; i++) {
    dateString += dateInfo[i] + delimiters[i];
  }

  return dateString;
}

function pad(num, index) {
  num = num.toString().padStart(index, "0");

  return num;
}

console.log(toISOString(new Date()));

// function with args num and index and return string with padding (0004)

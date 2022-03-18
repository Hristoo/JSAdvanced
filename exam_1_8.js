const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formats = [
  {
    startingSymbol: "Y",
    format: "YYYY",
    dataFormatFunction: (element) => {
      return element.getFullYear();
    },
  },
  {
    startingSymbol: "M",
    format: "MMMM",
    dataFormatFunction: (element) => {
      return monthNames[element.getMonth()];
    },
  },
  {
    startingSymbol: "M",
    format: "MMM",
    dataFormatFunction: (element) => {
      return monthNames[element.getMonth()].substring(0, 3);
    },
  },
  {
    startingSymbol: "M",
    format: "MM",
    dataFormatFunction: (element) => {
      return element.getMonth() + 1 > 9
        ? element.getMonth() + 1
        : "" + element.getMonth() + 1;
    },
  },
  {
    startingSymbol: "M",
    format: "M",
    dataFormatFunction: (element) => {
      return element.getMonth() + 1;
    },
  },
  {
    startingSymbol: "D",
    format: "DD",
    dataFormatFunction: (element) => {
      return element.getDate() > 9
        ? element.getDate()
        : "0" + element.getDate();
    },
  },
  {
    startingSymbol: "D",
    format: "D",
    dataFormatFunction: (element) => {
      return element.getDate();
    },
  },
  {
    format: "HH",
    dataFormatFunction: (element, hoursFormat) => {
      return element.getHours() > 9 && !hoursFormat
        ? hoursFormat ? element.getHours() % 12 : element.getHours()
        : hoursFormat ? "0" +  element.getHours() % 12 : element.getHours();
    },
  },
  {
    format: "H",
    dataFormatFunction: (element, hoursFormat) => {
      return hoursFormat ? " " +  element.getHours() % 12 : element.getHours();
    },
  },
  {
    format: "mm",
    dataFormatFunction: (element) => {
      return element.getMinutes() > 9
        ? element.getMinutes()
        : "0" + element.getMinutes();
    },
  },
  {
    format: "m",
    dataFormatFunction: (element) => {
      return element.getMinutes();
    },
  },
  {
    format: "ss",
    dataFormatFunction: (element) => {
      return element.getSeconds() > 9
        ? element.getSeconds()
        : "0" + element.getSeconds();
    },
  },
  {
    format: "s",
    dataFormatFunction: (element) => {
      return element.getSeconds();
    },
  },
  {
    format: "A",
    dataFormatFunction: (element) => {
      return element.getHours() >= 12 ? "PM" : "AM";
    },
  },
  {
    format: "a",
    dataFormatFunction: (element) => {
      return element.getHours() >= 12 ? "pm" : "am";
    },
  },
];

function dateToString(dateInput, str) {
  let tokens = str.replace(/\W/g, " ");
  tokens = tokens.split(" ");
  let formatedDateString = "";
  tokens.forEach((element) => {
    const formatedValues = formats.find((x) => x.format === element);
    if (formatedValues) {
      formatedDateString = formatedValues.dataFormatFunction(
        dateInput,
        new RegExp(element).test(str)
      );
      str = str.replace(element, formatedDateString);
    }
  });
  return str
}

console.log(
  dateToString(new Date("2021-09-10T12:33:42"), "MMMM DD YYYY, HH:mm:s A Is my proof of concept!")
);
// function with args num and index and return string with padding (0004) 
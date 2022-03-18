const formats = [
  {
    format: "HH",
    dataFormatFunction: (element, hoursFormat) => {
      const hour = hoursFormat ? element.getHours() % 12 : element.getHours();
      return hoursFormat
        ? hour <= 9
          ? "0" + hour
          : hour
        : hour <= 9
        ? "0" + hour
        : hour;
    },
  },
  {
    format: "H",
    dataFormatFunction: (element, hoursFormat) => {
      return hoursFormat ? " " + (element.getHours() % 12) : element.getHours();
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

export function dateFormat(dateInput, format) {
  let tokens = format.replace(/\W/g, " ");
  tokens = tokens.split(" ");
  let formatedDateString = "";
  tokens.forEach((element) => {
    const formatedValues = formats.find((x) => x.format === element);
    if (formatedValues) {
      formatedDateString = formatedValues.dataFormatFunction(
        dateInput,
        new RegExp(/A/gi).test(format)
      );
      format = format.replace(element, formatedDateString);
    }
  });
  return format;
}

const timeZones = [
  {
    name: "America/New_York",
    offset: -5,
  },
  {
    name: "Asia/Singapore",
    offset: 8,
  },
  {
    name: "Europe/Sofia",
    offset: 2,
  },
  {
    name: "Europe/Moscow",
    offset: 3,
  },
  {
    name: "Europe/London",
    offset: 0,
  },
];

export function utfTimeToLocal(date, timeZone) {
  const timeZoneObj = timeZones.find((x) => x.name === timeZone);
  const offset = timeZoneObj.offset;
  date.setHours(date.getUTCHours() + offset);

  return date;
}

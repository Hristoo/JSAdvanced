import { getValueType } from "./lib.js";
const dataTypes = [
  {
    id: "numbers",
    typeOfValue: "number",
    weight: 4,
  },
  {
    id: "objects",
    typeOfValue: "object",
    weight: 10,
  },
  {
    id: "nulls",
    typeOfValue: "null",
    weight: 2,
  },
  {
    id: "undefined",
    typeOfValue: "undefined",
    weight: 2,
  },
  {
    id: "arrays",
    typeOfValue: "array",
    weight: 10,
  },
  {
    id: "strings",
    typeOfValue: "string",
    weight: 8,
  },
  {
    id: "booleans",
    typeOfValue: "boolean",
    weight: 4,
  },
  {
    id: "functions",
    typeOfValue: "function",
    weight: 10,
  },
];

const arr = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admim" },
];
const weight = 4;

function isEveryElBigger(arr, weight) {
  // better name of func
  const typesValues = {};
  let result = true;
  dataTypes.forEach((x) => (typesValues[x.typeOfValue] = x.weight));

  for (let i = 0; i < arr.length; i++) {
    // new funs with some method
    const typeOfElement = getValueType(arr[i]);

    if (typesValues[typeOfElement] < weight) {
      result = false;
      break;
    }
  }

  return result;
}

function someSmallerEl(arr, weight) {  //can use reduce
  const typesValues = {};
  dataTypes.forEach((x) => (typesValues[x.typeOfValue] = x.weight));

  return arr.some((x) => typesValues[getValueType(x)] < weight);
}

console.log(someSmallerEl(arr, weight));

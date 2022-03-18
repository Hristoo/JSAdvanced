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
const weight = 26;

function calcWeight(input, typesValues) {
  let weight = 0;
  let checked = [];

  input.forEach((element) => {
    const typeOfElement = getValueType(element);
    if (typeOfElement == "object" && !checked.includes(element)) {
      checked.push(element);
      weight += calcWeight(element, typesValues);
    }
    weight += typesValues[typeOfElement];
  });

  return weight;
}

function hasElWithWeight(arr, weight) {
  const typesValues = {};
  const checked = [];
  let result = false;
  dataTypes.forEach((x) => (typesValues[x.typeOfValue] = x.weight));

  for (let i = 0; i < arr.length; i++) {
    let elWeight = 0;
    const typeOfElement = getValueType(arr[i]);

    if (typeOfElement == "object" && !checked.includes(arr[i])) {
      checked.push(arr[i]);
      if (!Array.isArray(arr[i])) {
        arr[i] = Object.values(arr[i]);
      }
      elWeight += calcWeight(arr[i], typesValues);
    }
    elWeight += typesValues[typeOfElement];
    result = elWeight === weight;
    if (result) {
      break;
    }
  }

  return result;
}

console.log(hasElWithWeight(arr, weight));

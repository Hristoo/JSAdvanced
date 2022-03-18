import { compareArrays } from "./compareArrays.js";
import { isObj } from "./lib.js";

function compareObjects(sourceObj, searchedObj) {
  const searchedObjKeys = Object.keys(searchedObj);
  const sourceObjKeys = Object.keys(sourceObj);
  let result = false;
  const checked = [];

  for (const key of searchedObjKeys) {
    if (sourceObjKeys.includes(key)) {
      const isChecked = checked.includes(sourceObj[key]);
      const sourceObjValue = sourceObj[key];
      const searchedObjValue = searchedObj[key];

     
      if (typeof sourceObjValue !== typeof searchedObjValue || isChecked) {
        result = false;
        break;
      } else if (sourceObjValue === searchedObjValue) {
        result = true;
        break;
      } else if (Array.isArray(sourceObjValue)) {
        result = compareArrays(sourceObjValue, searchedObjValue);

        if (!result) {
          break;
        }
      } else if (isObj(sourceObjValue)) {
        checked.push(sourceObjValue);
        result = compareObjects(sourceObjValue, searchedObjValue);

        if (!result) {
          break;
        }
      } else {
        result = false;
        break;
      }
    }
  }

  return result;
}

function findObj(data, searchObj) {
  if (!Array.isArray(data)) {
    throw "Must pass an array variable!@";
  }
  const len = data.length;
  const checked = [];
  let result = false;

  for (let i = 0; i < len; i++) {
    const isChecked = checked.includes(data[i]);
    if (isChecked) {
      break;
    }
    if (Array.isArray(data[i])) {
      checked.push(data[i]);
      result = findObj(data[i], searchObj);
    } else if (isObj(data[i])) {
      checked.push(data[i]);
      result = compareObjects(data[i], searchObj);
    }

    if (result) {
      break;
    }
  }

  return result;
}

const person1 = { name: "John Doe" };
const person2 = { name: "Jane Doe", cosin: person1 };
person1.cosin = person2;

const person = {
  firstName: "John",
  lastName: "Doe",
  role: {
    type: "Admin",
    id: 2,
  },
  permissions: ["read", "write"],
};

console.log(
  findObj(
    [
      6,
      "Test",
      "value",
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      {
        firstName: "John",
        lastName: "Doe",
        role: {
          type: "Admin",
          id: 2,
        },
        permissions: ["read", "write"],
      },
    ],
    person
  )
);

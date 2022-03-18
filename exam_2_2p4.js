import { compareArrays } from "./compareArrays.js";
import { isObj } from "./lib.js";

function compareObjects(sourceObj, searchedObj) {
  const searchedObjKeys = Object.keys(searchedObj);
  const sourceObjKeys = Object.keys(sourceObj);
  let result = false;
  let checked = [];
   
  for (const key of searchedObjKeys) {
    if (sourceObjKeys.includes(key)) {
      const isChecked = checked.includes(sourceObj[key]);
      if (typeof sourceObj[key] !== typeof searchedObj[key] || isChecked) {
        result = false;
        break;
      } else if (sourceObj[key] === searchedObj[key]) {
        result = true;
        break;
      }else if (Array.isArray(sourceObj[key])) {
        result = compareArrays(sourceObj[key], searchedObj[key]);
        if (!result) {
          break;
        }
      } else if (isObj(sourceObj[key])) {
        checked.push(sourceObj[key]);
        result = compareObjects(sourceObj[key], searchedObj[key]);
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
  let checked = [];
  let result = false;
  if (data.some((x) => x === searchObj)) {
    result = true;
  } else {
    for (let i = 0; i < len; i++) {
      const isChecked = checked.includes(data[i]);
      if (isChecked) {
        break;
      }
      if (Array.isArray(data[i])) { // !isChecked early return
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
  }

  return result;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  role: { type: "Admin", id: 2 },
  permissions: ["read", "write"],
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
  role: { type: "Admin", id: 2 },
};
const person2 = { firstName: "Jane", lastName: "Doe", cosin: person1 };
person1.cosin = person2;

console.log(
  findObj(
    [
      6,
      "Test",
      "value",
      1,
      undefined,
      null,
      person1,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      {
        firstName: "John",
        lastName: "Doe",
        role: { type: "Admin", id: 2 },
        permissions: ["read", "write"],
      },
    ],
    person
  )
);

import { isObj } from "./lib.js";

const person = { name: "John Doe" };
let checked = [];

function findObj(data, searchObj) {
  if (!Array.isArray(data)) {
    throw "Must pass an array variable!@";
  }
  // todo circular reference
  const len = data.length;
  let result = false;


  for (let i = 0; i < len; i++) {
    const isChecked = !checked.includes(data[i]);
    if (data[i] === searchObj) {
      return true;
    } else if (Array.isArray(data[i]) && isChecked) {
      checked.push(data[i]);
      result = findObj(data[i], searchObj);
    } else if (isObj(data[i]) && isChecked) {
      checked.push(data[i]);
      result = findObj(Object.values(data[i]), searchObj);
    }

    if (result) {
      return result;
    }
  }

  return result;
}
const person1 = { name: "John Doe" };
const person2 = { name: "Jane Doe", cosin: person1 };
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
      { name: "John Doe", test: { test: { person: person, test: "test" } } },
    ],
    person
  )
);

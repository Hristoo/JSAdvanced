import { isObj } from "./lib.js";

const obj = {
  person: {
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
  },
  permissions: ["read", "write", "special"],
  age: 42,
  competencies: [
    { skill: "JavaScript", level: "junior" },
    { skill: "css", level: "junior" },
  ],
  func: () => {
    console.log("Second object function!");
    return 123;
  },
};

Object.prototype.deepCopy = function (firstObj, secondObj) {
  const tmpObj = secondObj || firstObj;
  let newObj = copyObj(tmpObj);

  if (secondObj !== undefined) {
    newObj = copyObj(firstObj);
  }

  return newObj;
};

function copyObj(obj) {
  const checked = [];
  let newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "function") {
      newObj[key] = value.bind(null, value);
    } else if (isObj(value) && !checked.includes(newObj[key])) {
      checked.push(newObj[key]);
      newObj[key] = copyObj(value);
    } else if (Array.isArray(value)) {
      newObj[key] = copyArray(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}

function copyArray(arr) {
  const newArr = [];
  const checked = [];

  for (const el of arr) {
    if (isObj(el)) {
      checked.push(el);
      newArr.push(copyObj(el));
    } else if (Array.isArray(el) && !checked.includes(el)) {
      checked.push(el);
      newArr.push(copyArray(el));
    } else {
      newArr.push(el);
    }
  }
  return newArr;
}

const newObj = Object.deepCopy(
  {
    person: {
      firstName: "Jane",
      lastName: "Doe",
      role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 25,
    competencies: [
      { skill: "JavaScript", level: "junior" },
      { skill: "css", level: "mid" },
    ],
    func: () => {
      console.log("First object function!");
      return 321;
    },
  },
  obj
);

console.log(Object.is(newObj["person"], obj["person"]));
console.log("-", Object.is(newObj["competencies"], obj["competencies"]));
console.log(Object.is(newObj, obj), Object.is(newObj, obj), newObj === obj);

console.log(Object.is(newObj["competencies"][1], obj["competencies"][1]));
console.log(
  Object.is(newObj["func"], obj["func"]),
  newObj["func"] === obj["func"]
);
// newObj["func"]();
// obj.func();
// console.log(newObj.func());
// newObj.func();
// console.log(JSON.stringify(newObj, null, 1));

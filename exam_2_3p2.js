
import { isObj } from "./lib.js";

const arr1 = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];

const arr2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];

//todo memoization for optimizing
function appender(firstInput, secondInput) {
  let cacheArrays = [];
  let cacheObjects = [];

  for (let j = 0; j < secondInput.length; j++) {
    if (Array.isArray(secondInput[j])) {
      cacheArrays = cacheArrays.concat(secondInput[j]);
    } else if (isObj(secondInput[j])) {
      cacheObjects.push(secondInput[j]);
    }
  }

  for (let i = 0; i < firstInput.length; i++) {
    firstInput[i] = firstInput[i].concat(i % 2 ? cacheObjects : cacheArrays);
  }

  return JSON.stringify(firstInput, null, 1);
}

console.log(appender(arr1, arr2));

// [
//   [1, 2, 3, 4, "one", "five", 1000, 1001],
//   ["one", "two", { role: "admin" }, { name: "John" }],
//   [5, 6, "one", "five", 1000, 1001],
// ];

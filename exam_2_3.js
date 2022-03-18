const arr1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

const arr2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];

function appender(firstInput, secondInput) {
  for (let i = 0; i < firstInput.length; i++) {
    if (Array.isArray(firstInput[i])) {
      firstInput[i].concat(secondInput.filter(el => !!el));
    }
  }

  return firstInput;
}

console.log(appender(arr1, arr2));

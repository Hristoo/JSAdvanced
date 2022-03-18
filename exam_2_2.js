const person = { name: "John Doe" };

function findObj(data, searchedObj) {
  return data.some((element) => element === searchedObj);
}

console.log(
  findObj(
    [
      6,
      "Test",
      "value",
      person,
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ],
    person
  )
);
// ARR METHOD SOME
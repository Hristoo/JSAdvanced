let obj = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello,  world!");
  },
  experience: { count: 5 },
};
// obj.test = obj;
// console.log(obj);

// circle reference

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

function iterateProps(obj) {
  let typesValues = {};
  let weight = 0;
  let checked = [];
  dataTypes.forEach((x) => (typesValues[x.typeOfValue] = x.weight));

  Object.values(obj).forEach((element) => {
    const typeOfElement = element != null ? typeof element : "null";
    if (typeOfElement == "object" && !checked.includes(element)) {
      checked.push(element);
      weight += iterateProps(element);
    }
    weight += typesValues[typeOfElement];
  });
  
  return weight;
}

console.log(iterateProps(obj));

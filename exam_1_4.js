const arr = [ 6, "Test", "value", 1, true, undefined, null, null,  () => {console.log("Hello,  world!")}, {count: 5}];

const dataTypes = [
  {
    id: "numbers",
    typeOfValue: "number",
    resultsProperty: "numericsCount",
  },
  {
    id: "objects",
    typeOfValue: "object",
    resultsProperty: "objectsCount",
    testerFunction: (element) => {
      return element != null && element != undefined;
    },
  },
  {
    id: "nulls",
    typeOfValue: "object",
    resultsProperty: "nullCount",
    testerFunction: (element) => {
      return element === null;
    },
  },
  {
    id: "undefined",
    typeOfValue: "undefined",
    resultsProperty: "undefinedCount",
    testerFunction: (element) => {
      return element === undefined;
    },
  },
  {
    id: "arrays",
    typeOfValue: "object",
    resultsProperty: "objectsCount",
    testerFunction: (element) => {
      return Array.isArray(element);
    },
  },
  {
    id: "strings",
    typeOfValue: "string",
    resultsProperty: "stringsCount",
  },
  {
    id: "booleans",
    typeOfValue: "boolean",
    resultsProperty: "booleansCount",
  },
  {
    id: "functions",
    typeOfValue: "function",
    resultsProperty: "functionsCount",
  },
];

const calculateDataTypes = function (input) {
  const result = {};
  dataTypes.forEach((x) => (result[x.resultsProperty] = 0));

  input.forEach((element) => {
    const typeOfElement = typeof element;

    const types = dataTypes.filter((x) => x.typeOfValue === typeOfElement);
      for (let i = 0; i < types.length; i++) {
        if (!types[i].testerFunction) {
          result[types[i].resultsProperty]++;
          break;
        } else if (types[i].testerFunction(element)) {
          result[types[i].resultsProperty]++;
          break;
        }
      }
  });

  return result;
};

console.log(calculateDataTypes(arr));

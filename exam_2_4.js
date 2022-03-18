const arr1 = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;

function calculate(input, higherThan) {
  input = input.filter((x) => x > higherThan);
  const reducer = (prev, curr) => prev + curr;
  const sum = input.reduce(reducer);

  return sum;
}

console.log(calculate(arr1, higherThan));

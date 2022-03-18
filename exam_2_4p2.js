const arr1 = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;

function calculate(input, divisible) {
  return input.filter((x) => x % divisible == 0);
}

console.log(calculate(arr1, divisible));

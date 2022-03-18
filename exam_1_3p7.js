const input = 10;
function solve(n) {
  let result = [];
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  const bigestNUmber = bigestNumber(input);

  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  result = result.forEach((n) => console.log(n.join(" ")));
}

function bigestNumber(input) {
  return (input *= input);
}

solve(input);

// functoin to format the result

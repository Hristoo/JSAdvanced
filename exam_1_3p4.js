function generatePyramid(input) {
  let output = "";
  for (let i = 1; i <= input; i++) {
    for (let k = input - i; k > 0; k--) {
      output += " ";
    }
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }

    console.log(output);
    output = "";
  }

  for (let i = input - 1; i >= 1; i--) {
    for (let k = input - i; k > 0; k--) {
      output += " ";
    }
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }
    console.log(output);
    output = "";
  }
}
generatePyramid(9);

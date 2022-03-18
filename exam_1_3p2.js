function generatePyramid(input) {
  output = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + "  ";
    }
    console.log(output);
    output = "";
  }
  for (let i = input - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      output += j + "  ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid(12);

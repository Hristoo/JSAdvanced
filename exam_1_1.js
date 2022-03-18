const arr = [6, 4, 3, 1, 9, 44, 33, 2];

const oddCounter = (inputArr) => {
  let counter = 0;
  inputArr.forEach((element) => {
    if (element % 2 == 0) {
      counter++;
    }
  });

  return counter;
};

console.log(oddCounter(arr));

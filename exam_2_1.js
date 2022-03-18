let testData = [6, 4, 3, 1, 9, 44, 33, 2];
const basicComparer = (left, right) => {
  return left < right;
};

let bubbleSort = function (input, comparer) {
  const len = input.length;
  let done = false;

  for (let i = 0; i < len; i++) {
    if (done) {
      break;
    }
    done = true;
    for (let j = 0; j < len - 1; j++) {
      if (!comparer(input[j], input[j + 1])) {
        done = false;
        let tmp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = tmp;
      }
    }
  }

  return input;
};

// console.log(bubbleSort(testData, basicComparer));

function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function minMaxSort(input, comparer) {
  n = input.length;

  for (let i = 0, j = n - 1; i < j; i++, j--) {
    let curMin = input[i];
    let curMax = input[i];
    let curMin_i = i;
    let curMax_i = i;

    for (let k = i; k <= j; k++) {
      if (comparer(input[k], curMin)) {
        curMin = input[k];
        curMin_i = k;
      } else if (!comparer(input[k], curMax)) {
        curMax = input[k];
        curMax_i = k;
      }
    }

    if (i === curMin_i || j === curMax_i) {
      break;
    }
    swap(input, i, curMin_i);
    swap(input, j, curMax_i);
  }

  return input;
}

console.log(minMaxSort(testData, basicComparer));
// chech if arr is ordered

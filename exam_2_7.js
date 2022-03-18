const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function longestSequence(arr) {
  arr = arr.sort(() => Math.random() - 0.5);
  let sequence = [];
  const tmpArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      tmpArr.push(arr[i]);
    } else if(tmpArr.length > 0){
        tmpArr.push(arr[i]);      
      if (sequence.length < tmpArr.length) {
        sequence = tmpArr.splice(0, tmpArr.length);
      } else {
        tmpArr.splice(0, tmpArr.length)
      }
    }
  }
  console.log(arr);
  return sequence;
}

console.log(longestSequence (arr));

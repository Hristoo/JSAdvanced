const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const percentage = 50;

function removeInner(arr, num) {
  const percentage  = (num / 100) ;
  const elCount = Math.ceil(arr.length * percentage);
  const evenElCount = 2 * Math.round(elCount / 2);
  const startIndex = Math.ceil((arr.length - evenElCount) / 2);

  arr.splice(startIndex, evenElCount);
  return arr;
}

console.log(removeInner(arr, percentage));

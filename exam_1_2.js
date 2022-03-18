function bubbleSort(array){   
    let done = false;
    let counter = 0;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            counter++;
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    console.log('Total iterations:' ,counter);
    return array;
}

const b = [6, 4, 3, 1, 9, 44, 33, 2];
const c = [1,2,3,4,5,6,7,8]
console.log(bubbleSort(c));

 

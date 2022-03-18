const arr1 = [1, undefined, [1, 2, 3], "test", {name: "John Doe"}]

const arr2 = [null, () => {console.log("Hello,  world!")}, ["one", "five"], undefined, 6]

function appender(firstInput, secondInput){
    // const result = firstInput.forEach(element => {
    //     element = secondInput.filter(el => el != null);
        
    // });
    let result = firstInput;

    for (let i = 0; i < firstInput.length - 1; i++) {
        
        result.splice(i, 0, secondInput.filter(el => el != null));
    }

    return result;
}

console.log(appender(arr1, arr2));
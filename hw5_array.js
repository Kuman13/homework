let arr = new Array(10).fill(null);
//console.log(arr)

function addValueAtIndex500(array, value) {
    array[500] = value;
    //console.log(array)
}
function separateStringsAndNumbers(array) {
    let stringsArray = [];
    let numbersArray = [];

    for (let item of array) {
        if (typeof item === 'string') {
            stringsArray.push(item);
        } else if (typeof item === 'number') {
            numbersArray.push(item);
        }
    }

    return {
        strings: stringsArray,
        numbers: numbersArray
    };
}

addValueAtIndex500(arr, "Hello");
console.log(arr[500]); 

let mixedArray = [1, "apple", 2, "banana", 3, "cherry"];
let separated = separateStringsAndNumbers(mixedArray);
console.log(separated.strings); 
console.log(separated.numbers); 
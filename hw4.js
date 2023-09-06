function toUpperCase(value) {
    if (typeof value !== 'string') {
        console.log('Incorrect type of data. Expected a string.');
        return;
    }
    return value.toUpperCase();
}

console.log(toUpperCase("hello")); 
toUpperCase(123); 


function addPropertyIfNumber(obj, key, value) {
    if (typeof value === 'number') {
        obj[key] = value;
    } else {
        console.warn(`The value for key "${key}" is not a number. Property not added.`);
    }
}

const myObj = {};
addPropertyIfNumber(myObj, 'age', 25);  
addPropertyIfNumber(myObj, 'name', 'John');  

console.log(myObj);



// const myObject = {
//     name: "Oleg",
//     age: 44,
//     occupation: "QA",
//     country: "Ukraine",
//     isMarried: true
// };

// console.log(myObject);



const myObject = {
    name: "Oleg",
    age: 44,
    occupation: "QA",
    country: "Ukraine",
    isMarried: true
};


myObject.hobbies = ["reading", "cycling", "photography"];

console.log(myObject);



let sum = function(a, b) {
    return a + b;
  }
  console.log(sum(5, 3));

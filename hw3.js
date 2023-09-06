// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }


let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        let NotDivide = i;
        console.log(`Number ${NotDivide} can't be divided by 2.`);
    }
}


for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}



let number1 = 11; 

if (number1 < 10) {
    console.log('Hello');
} else if (number1 > 10) {
    console.log('Bye');
}

let number = 6; 

if (number < 10) {
    console.log('Hello');
} else if (number > 10) {
    console.log('Bye');
}

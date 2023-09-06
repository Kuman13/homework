//const values = require('./values.json')
// const { error } = require('console')
// const { readFile, writeFile } = require('fs')
// const fs = require('fs-extra')
//const { writeFile, readFile } = require('fs');

// let jsonObj1 = '{"name":"oleg","lname":"kyym","age":100500}'

// let obj2 = JSON.parse(jsonObj1)

// console.log(obj2.name)

// obj2.city = "York"

// console.log(obj2)

// jsonObj1 = JSON.stringify(obj2)

 //console.log(values)

 //const path ='./values.json'
 //const newData = {phone: 434234, address: 'Street'}

//  let readData
//  //try {code with problem} catch (err) {cons}
//  try { 
//  fs.readFile(path, 'utf8', (error, data) => {
//     if(error) {
//         console.log('Error during reading file')
//     } else {
//          readData = JSON.parse(data)
//          //readData.address = 'Street1'
//     }
    
//  })

 
// //console.log(readData)
//   //fs.writeFile(path, JSON.stringify(newData));
// } catch(err) {
//     console.log('Error during code actions: ${err}')
// }

// readFile(path, (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     const parsedData = JSON.parse(data);
//     parsedData.createdAt = new Date().toISOString();
//     writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
//       if (err) {
//         console.log('Failed to write updated data to file');
//         return;
//       }
//       console.log('Updated file successfully');
//     });
//   });

// function read() {
//     fs.writeFile(path).then(rData) => {
//         return
//     }).then(nData) => {console.log(nData)}
// }

// function Func() {
//     fetch("./values.json")
//       .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data));
// }
// Func()

//console.log(readData)


 //console.log()

//  let dd = JSON.parse(fs.readFileSync(path, 'utf-8'))
//  console.log(ddd)

// ddd.newVal = 'Myval'

// fs.writeFileSync(path, JSON.stringify(ddd))

// String
// Number
// Promise
const fs = require('fs-extra');
const path = './values.json';

async function func1() {
  let ddd = await JSON.parse(fs.readFileSync(path, 'utf-8'))
  console.log(ddd)
  console.log('Hello from async function')
  ddd.dkd = 'DKD'
  await fs.writeFile(path, JSON.stringify(ddd))

}

func1()

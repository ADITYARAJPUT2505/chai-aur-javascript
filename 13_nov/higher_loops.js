// //for of loop
// const arr= [1,2,3,4,5]
// for (const i of arr) {
//     console.log("2 *",i,"=",2*i)
// }

// //maps

// const map = new Map()
// map.set('IN','INDIA')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('IN','INDIA')
// console.log(map)

// for (const [key,value]  of map) {
//     console.log(key , ":-" ,value)
// }

// // const myObject = {
// //     'game1':'nfs',
// //     'game2':'gta'
// // }
// // for (const [key,value]  of myObject) {
// //     console.log(key , ":-" ,value)
// // } // will give error not possibe by this method

// const myObject = {
//         js:'javascript',
//         rb:'ruby',
//         cpp:'c++'
//     }
// //for in loop
// for (const keys in  myObject) {
//     console.log(`${keys} shortcut is for ${myObject[keys]}`)
// }
////for each loop

const coding=['js','ruby','py','cpp']

coding.forEach(function (item) {
    console.log(item)
} )
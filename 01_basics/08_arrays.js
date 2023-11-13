const myArr = [321,24,24,5,3,23,true,'hitesh']
//learn shallow and deep copies from mdn
//another way 
const myArr2 = new Array(2,53,4,2,'shaktiman')

// array methods 
myArr.push(5)
myArr.pop()
myArr.unshift(9)
myArr.shift()
//console.log(myArr)

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(3))

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr)


//slice,splice

console.log('A',myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log('b',myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log('b',myArr)

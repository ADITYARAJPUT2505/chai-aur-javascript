let myDate =  new  Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)
//date is object in javascript
//month starts from 0 in js
let myCreateDate = new Date(2023,11,6)
console.log(myCreateDate.toDateString())
//time stamp in js
console.log( Date.now())
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

const newDate= new Date()

const dates=newDate.toLocaleString(
    'default',
    {weekday:'long'},

    )
    console.log(dates)
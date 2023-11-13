////-------part 1
// //singleton
// //object literals
// //Object.create()

// const mySym=Symbol("key1")
// const jsUser={
//     name:'hitesh',
//     "full name":"aditya rajput",
//     age:'18',
//     [mySym]:"mykey1",
//     location:'kanpur',
//     isloggedin:false
// }
// //ways of accessing objects
// console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.age = '19'
// console.log(jsUser.age)
// //Object.freeze(jsUser)//freezing all values we cant change values now
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("hello js user")
// }
// jsUser.greetingtwo = function(){
//     console.log(`hello js user , ${this.name}`)
// }

// console.log(jsUser.greeting())
// console.log(jsUser.greetingtwo())


////-----part 2

const tinderuser = new Object()

tinderuser.id="123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin=false
//console.log(tinderuser)

const regularuser ={
    email:'someone.gmail.com',
    fullname:{
        firstname:"hitesh",
        lastname:"rajput"
    }
}
//console.log(regularuser.fullname.firstname)

const obj1 ={
    1:'a',
    2:'b',
    3:'c'
}
const obj2={4:'a',5:'b',6:'c'}

//const obj3 =Object.assign({},obj1,obj2)

//console.log(obj3)

const obj3 ={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('id'))
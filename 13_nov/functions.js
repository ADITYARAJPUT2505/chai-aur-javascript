// //-------part1

// function sayMe(){
//     console.log('a')
//     console.log('d')
//     console.log('i')
//     console.log('t')
//     console.log('y')
//     console.log('a')
// }

// //sayMe()
// //inputs inside function calling in parametres
// function addTwo(num1,num2){
//     console.log(num1+num2)
// }
// //inputs inside function calling is called arguements
// addTwo(3,4)
// const result = addTwo(4,4)
// console.log("result:",result)
// function addTwoNum(num1,num2){
//     let final=(num1+num2)
//     return final
// }

// const total = addTwoNum(5,4)
// console.log(total)

// function loginUserMessage(username){
//     if(username===undefined){
//        console.log("please enter a valid name")
//        return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage('hitesh'))
// console.log(loginUserMessage())

////------part2
function calculateCartprice (...num1){
    return num1
}
function calculateCartprice2 (val1,val2,...num1){
    return num1
}


console.log(calculateCartprice(200,300,500))
console.log(calculateCartprice2(200,300,500))


const user ={
    username:'hitesh',
    price :'199'
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`) 
}

handleObject(user)
handleObject({
    username:'sam',
    price:299
})
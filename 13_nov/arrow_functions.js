// const user ={
//     username:'hitesh',
//     price:999,
//     welcomemessage:function(){
//         console.log(`${this.username} welcome to website`)
//         console.log(this)
//     }
// }

//user.welcomemessage()
// user.username='sam'
// user.welcomemessage()
console.log(this)

// function chai(){
//     let username='hitesh'
//     console.log(this)
// }

// chai()

// const chai = ()=>{
//     let username ="hitesh"
//     console.log(this.username)
// }
// chai()

const addtwo =(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(7,3))

//implicit return 
const add =(num11,num22)=> num11+num22

console.log(add(7,8))
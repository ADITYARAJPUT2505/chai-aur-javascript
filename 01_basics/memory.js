//stack(primitive),heap(non-primitive)
let myyoutube = "hitesh chaudhary"//will go in stack

let anothername = myyoutube
anothername ="chaiaurcode"
console.log(anothername)
console.log(myyoutube)

let userone={
    email:"usergoogle.com",
    upi:"user@ybl"
}//will go in heap

let usertwo = userone

usertwo.email = "hitesh@google.com"
console.log(userone.email)
console.log(usertwo.email)
// you will find copy from heap memory
// you will find reference  from stack memory
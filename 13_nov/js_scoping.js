// //-----part1

// var c= 300
// let a =400
// if(true){
//     let a =  10 
//     const b =9
//     var c=14
//     console.log("inner:",a)
// }

// console.log(a)
// //console.log(b)
// console.log(c)

//-----part2

function one(){
    const username="hitesh"
    function two(){
        const websites ="youtube"
        console.log(username)
    }
    //console.log(websites)
    //two()
}
//one()

if(true){
    const username ="hitesh"
    if(username==="hitesh")
    {
        const website =" youtube"
        console.log(username+website)
    }
    //console.log(website)//error scoping
}
//console.log(username)//error scoping

// ------ interesting

function addone(num){
    return num+1
}

console.log(addone(5))

const addtwo = function (num){
    return num+2
}

//console.log(addtwo(5)) // will give error
//control flow or logical flow

if(true){
//code will be executed
}
if(false){
//code will not  be executed
}

const isUserLoggedin = true 
//=== strict equal check data type also
if(isUserLoggedin){
     
}
////------truthy and falsy values

//false, 0 , -0 , BigInt 0n , "", null , undefined,NaN

//true,"0",'false'," ",[],{},function(){}

const empty = {

}

if(Object.keys(empty).length===0){
    console.log("object is  empty")
}

//Nullish Coalscing Operator(??):null undefined

let val1 = 5 ?? 10
let val2= null??10
console.log(val1)
console.log(val2)
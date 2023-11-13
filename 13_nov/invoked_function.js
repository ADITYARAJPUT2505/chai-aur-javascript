//invoked function
(function chai(){
    //named iife
    console.log(`db connected`)
})();//semicolan is necessary to use  to stop invoked function
// chai()
//()() //to want to  remove global scope pollution we use invoked function

((name)=>{
    //simpple iife
    console.log(`bd connected two ${name}`)
})('hitesh')
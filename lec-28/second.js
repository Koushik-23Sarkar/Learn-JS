// console.log("10")
// console.log("20")
// console.log("30")

// Output:
// 10
// 20
// 30

//_________________________________________________________________________________________________________________________________________________________________


console.log("10")

setTimeout(()=>{
    console.log("20")
},2000)     //<--- this setTimeout, is 

console.log("30");

// Output:
// 10
// 30
// 20


//_________________________________________________________________________________________________________________________________________________________________

console.log("10")

function mySetTimeOut(callback,x){
    const oldTimer = Date.now()
    while((Date.now()-oldTimer)<x){
    }
    callback();
}

mySetTimeOut(()=>{
    console.log("20")
},2000)

console.log("30");




//_________________________________________________________________________________________________________________________________________________________________

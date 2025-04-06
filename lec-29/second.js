console.log("i am first")

fetch("https://youtube.com")
.then(()=>{
    console.log("hello")
})

console.log("I am last");

/*
    Call stack:
    WEB API:
    MicroTask queue: (To execute Promise Callback.) (It has higher perioity than 'callback queue')
    callback queue:
*/


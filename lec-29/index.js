// At the End, Call stack will implement your code. (It will execute your code.) 

// Browser is multi thread language. (Browser has WEB API)

/*
WEB API:
    1. setTimeout 
    2. setInterval 
    3. fetch
    4. DOM
    5. console
    6. Timer
    7. event listeners
    etc...
*/

/*
    When JS see a WEB API, JS will give that WEB API to the Browser. After complete that thing, it will send to the CallBack Queue.

    Event loop: Check the 'call stack', If 'call stack' is empty and 'callBack Queue' has a 'callback' to execute, then 
                Event loop, take this 'callback' and push into the 'call stack'. Ultimatly 'call stack' execute the 'call back'.

*/

//(Q) why is 'event loop' check 'call stack' is empty or not?


/*
    event listeners (example 'click' event) needs threads to continuously listen and execute their 'call backs'
    Browser helps to do that thing.
*/

/*
button.addEventListener('click',()=>{
    console.log('hello')
})  //When JS see this '.addEventListener' , 'call stack' call WEB API . then WEB API has responsibity to listen that event.
    // When event occur then, 'call back' of the event will push into the 'callback queue'.
    // and when'event loop' see 'call stack' is empty, then 'event loop' push that 'callback' into the 'callstack'. and 'call stack' will execute that 'callback'.

*/
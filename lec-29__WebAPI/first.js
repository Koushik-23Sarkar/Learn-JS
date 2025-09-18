console.log('Hello coder army')

setTimeout(()=>{
    const a = 2+4;
    console.log(a)
},5000);


setInterval(()=>{
    console.log('i am fast')
},2000);

let b = 20;
let arr = [20,30,40]

for(let i of arr){
    console.log(i+b);
}

//_________________________________________________________________________________________________________________________________________________________________________________________
/*
1. First a global execution Context will be create and This 'Global Execution Context' will pushed into the Call Stack.
2. Call Stack: GEC (global execution Context)
        Now this, GEC(global execution Context) will be execute. (line-1 to line-18, will be executed.)

3. 'console.log()' is not a part of the JS. It's a part of the WEB API. Call Stack will call the WEB API to execute the 'console.log()'
4. 'setTimeout' is not a part of the JS, For That 'call stack' will again call the WEB API. Then, WEB API waits to execture the 'call back'.(of that setTimeOut)
    
5. Parallelly,JS see the 'setIntervel' which is also not part of the JS. Again 'call stack' call the WEB API. WEB API execture the 'setInterval' and it's 'callback' will push into the 'callback queue'.

    If 'setTimeout' and 'setIntervel' is completed on that time then, their callbacks will push into the 'callback queue'.
6. Then, line-13 to line-18 will be executed. After that 'call stack' will be empty.
7. Event Loop has only one task. If event loop see the 'call stack' is empty then, it takes 'callback' from the 'callback queue' and push it into the 'call stack'.
    'call stack' will execute that 'call back'.
*/


/*
(Q) Why is event loop check that 'call stack' is empty or not, before push 'callbacks' to the 'call stack'?
    If we allow i.e. If event loop doesn't check before push 'callbacks' to the 'call stack', then It will occur race condition.
    and eventually it will return inconsistant result (means same code will give you different result for different devices).
*/
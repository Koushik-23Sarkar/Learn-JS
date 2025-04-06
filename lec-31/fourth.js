async function greet(){
    return "hello world"
}   //---> Async function always return 'Promise'
    //---> If that async function return nothing then, it return "undefined".

greet().then(value=>console.log(value));

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________


function task1(){
    const p4 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("first promise resolved")
        },5000)
    })

    return p4;
}


function task2(){
    const p5 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("second promise resolved")
        },5000)
    })

    return p5;
}

async function meet(){  //---> It will work like a normal function.
    console.log("meet function")
    const data1 = await tast1();    //---> JS take that thing in a microTack queue.
    console.log(data1);

    const data2 = await tast2();    //---> JS take that thing in a microTack queue.
    console.log(data2);
}

meet();
console.log("Hello Coder Army")
console.log("Hello Coder Army2")

/*
CallStack:
WebAPI:
MicroTask Queue:
Callback Queue:
*/




/*
(1) A GEC (global execution Context) is created and push into the 'CallStack'. Then Start executing the Whole CODE.
    CallStack: (GEC)
(2) When JS see 'meet();' then It will push into the 'CallStack'. and Start executing the CODE of the 'meet();'.
    CallStack: (GEC) (meet())
(3) 'console.log("meet function")' <--- This Line is executed.
(4) 'const data1 = await tast1();'  <--- In this line, first 'task1()' function will be executed, It means 'task1()' will push into the 'callStack'.and start executing that 'task1()' function.
    CallStack: (GEC) (meet()) (task1())

    (i)But this 'task1()' need 5 seconds to execute for that it will remove form the 'callstack'. and after 5 second, It's callback automatically push into the 'callback queue'.
    (ii)'const data1 = await tast1();' ---> In this line, 'data1' needs a data to store, and it's data will come after 5 second. Forthat, JS don't stop it's execution for this. JS push that 'meet()' into 'microTask queue'. remove from the 'callStack'.
        CallStack: (GEC)
(5) Now, It starts executing rest of the GEC code.
(6) Now, our 'CallStack' is empty. After 5 second, 'meet()' function come in the 'CallStack' from 'MicroTask queue' and executing.
    (i) print 'data1'.
    (ii) Same thing will be happened for 'task2()' function just like 'task1()'.
*/



/*

---> We handle async-await, by try-catch block.


try {
    
} catch (error) {
    
}

*/
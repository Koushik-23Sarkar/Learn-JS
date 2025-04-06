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

/*
async function meet(){  //---> It will work like a normal function.
    console.log("meet function")
    const data1 = await tast1();    //---> JS take that thing in a microTack queue.
    console.log(data1);

    const data2 = await tast2();    //---> JS take that thing in a microTack queue.
    console.log(data2);
}
*/



//task1() function and task2() function are not independent to each other. If there are dependent to each other then, you can do above CODE.
//If there are independent to each other then, you can use 'Promise.all([task1(),task2(),.....])'  ---> answer will come together (means If task1() takes 8s and task2() takes 5s then, answer will come after 8s (union of the seconds))

async function meet(){  
    console.log("meet function")
    const [data1,data2] = await Promise.all([task1(),task2()])    
    console.log(data1);
    console.log(data2)
}

meet();
console.log("Hello Coder Army")
console.log("Hello Coder Army2")


//_____________________________________________________________________________________________________________________________________________________________________________________________________
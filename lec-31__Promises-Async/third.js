
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

async function greet(){
    const data1 = await task1();
    console.log(data1);

    const data2 = await task2();
    console.log(data2);
}
greet();

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello everyone")
    },5000)
})

async function greet(){
    const data1 = await p1;
    console.log(data1);

    const data2 = await p1;
    console.log(data2);
}
greet(); 
/*
hello everyone
hello everyone  //This second line didn't come after 5 seconds of the above code. Because that promise is already resolve, forthat it didn't resolve it again.
*/

//___________________________________________________________________________________________________________________________________________________________________________________________________

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolved")
    },5000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second promise resolved")
    },5000)
})

async function greet(){
    const data1 = await p2;
    console.log("hello Coder Army")
    console.log(data1);

    const data2 = await p3;
    console.log(data2);
}
greet();

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolved")
    },8000)
})

const p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second promise resolved")
    },5000)
})

p4.then(value=>console.log(value))
p5.then(value=>console.log(value))
/*
second promise resolved
first promise resolved


---> Because both are independent task.
*/


//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________



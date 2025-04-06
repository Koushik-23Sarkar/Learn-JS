// Callback hells

// Why we need callback function:

function fetchuser1(){
    console.log("fatching the user detail.............")
    setTimeout(()=>{
        console.log("data fetching succussfully.")
        const name = "Rohit"
        greet(name);
    },2000);
}

function fetchuser2(){
    console.log("fatching the user detail.............")
    setTimeout(()=>{
        console.log("data fetching succussfully.")
        const name = "Rohit"
        meet(name);
    },2000);
}


function greet(name){
    console.log(`hello ${name}`)
}

function meet(){
    console.log(`I will meet you in  delhi`)
}

fetchuser1();
fetchuser2();

//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________




function fetchuser(callback){
    console.log("fatching the user detail.............")
    setTimeout(()=>{
        console.log("data fetching succussfully.")
        const name = "Rohit"
        callback(name);
    },2000);
}

fetchuser(greet)
fetchuser(meet) 

//By using callback, we use only one `fetchuser` function.


//__________________________________________________________________________________________________________________________________________________________________________________________________________



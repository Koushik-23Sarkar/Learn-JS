// weatherapi.com

const obj1 = fetch('');
console.log(obj1);  // Return Promise {<pending>}   //fetch() is an async task. Forthat we need to wait to execute. But we don't wait to execute, For that it returns 'Promise {<pending>}'

//__________________________________________________________________________________________________________________________________________________________________________________________________________

const obj2 = fetch('')
setTimeout(()=>{
    console.log(obj2)
},2000)

//__________________________________________________________________________________________________________________________________________________________________________________________________________

const obj3 = fetch('')
// obj3.then(//cakback//)
obj3.then((data)=>{     //It will execute after we get the 'data' from the 'fetch()';
    console.log(data);  //return Header part of the response.
    console.log(data.json())    //return Body part of the response.But it is also a Promises.
    
    const obj4 = data.json()
    obj4.then((data)=>{
        console.log(data);
    })
})  //where 'data' is the responce that we get from the 'fetch'.
.catch((error)=>{
    console.log(error)
})

//__________________________________________________________________________________________________________________________________________________________________________________________________________
//3 stages of Promise: pending , resolve , reject 

//___________________________Another Format_______________________________________________________________________________________________________________________________________________________________________________
const obj5 = fetch('')
obj5.then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
});

//___________________________Another Format_______________________________________________________________________________________________________________________________________________________________________________

const obj6 = fetch('')
obj6.then(data=>data.json()).then(data=>console.log(data));

//___________________________Another Format_______________________________________________________________________________________________________________________________________________________________________________

const obj7 = fetch('')
obj7
.then(data=>data.json())
.then(data=>console.log(data));

//___________________________Another Format_______________________________________________________________________________________________________________________________________________________________________________

fetch('')
.then(data=>data.json())
.then(data=>console.log(data));


//__________________________________________________________________________________________________________________________________________________________________________________________________________

fetch('')
.then(data=>data.json())
.then(data=>console.log(data))
.catch((data2)=>{   //We only need to use one 'catch'. Because we just need to show error.
    console.log(data2)
})


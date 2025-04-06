const timer = document.getElementById('root');

function timerFunc(){
    const now = new Date();
    const indianTime = now.toLocaleTimeString();
    timer.innerHTML=indianTime;
}

setInterval(timerFunc,1000);

timer.style.fontSize = "100px";
timer.style.height = "95vh"
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

//Homework countdown for Olympic


// document.querySelector('') ---> return only the First element
// document.querySelectorAll('') ---> return NodeList (kind of array, but not an array)

// (Q) Is 'document.querySelectorAll('')' allways returned `NodeList()`

//Convert NodeList to Array: Array.from(obj1)
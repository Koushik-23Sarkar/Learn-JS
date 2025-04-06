/*
const red = document.getElementById('red')
const blue = document.getElementById('blue')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const purple = document.getElementById('purple')

const body = document.body;

red.addEventListener('click',()=>{
    body.style.backgroundColor = 'red';
})

blue.addEventListener('click',()=>{
    body.style.backgroundColor = 'blue';
})

orange.addEventListener('click',()=>{
    body.style.backgroundColor = 'orange';
})

green.addEventListener('click',()=>{
    body.style.backgroundColor = 'green';
})

purple.addEventListener('click',()=>{
    body.style.backgroundColor = 'purple';
})

*/



//_________________________________________________________________________________________________________________________________________

/*
const button = document.querySelectorAll('button')
console.log(button);
const body = document.body;

button.forEach((button)=>{
    button.addEventListener('click',()=>{
        body.style.backgroundColor = button.id;
    });
});
*/

//____________________________________________________________________________________________________________________________________________________________________________
/*
Every EventListeners take memories, so if you create so many EventListeners, 
then it can slowdown your appliaction. 

solution: Event bubbling
*/

//____________________________________________________________________________________________________________________________________________________________________________

// Event Delaygation: If child has so many event Listeners, then we add event listener in the parent node 
        // addEventListener in root node

const root = document.querySelector('#root')
root.addEventListener('click', (e)=>{
    console.log(e.target);  // It gives you which element trigger that event.
    console.log(e.currentTarget);
})

// (Q) Difference between e.target and e.currentTarget

//_______________________________________________________________________________________________________________________
// event.stopPropagation() // to stop, bubbing
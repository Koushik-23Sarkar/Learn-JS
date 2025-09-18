const grandParent = document.querySelector('.grandParent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// .addEventListener(//Event//,//callback//,//capture//)
// by default, capture = false;


child.addEventListener('click', ()=>{
    console.log('chile div')
},true)

parent.addEventListener('click', ()=>{
    console.log('parent div')
},true)

grandParent.addEventListener('click', (e)=>{
    console.log('grandParent div')
    console.log(e.target)
    console.log(e.currentTarget)
},true)
const list = document.querySelector('li');
console.log(list.parentElement) //Used to select parent element of the Node.
console.log(list.parentNode)    //Used to select parent element of the Node.

// (Q) What is the difference between '.parentElement' and '.parentNode'.



const pare = document.querySelector("#third")
console.log(pare.childNodes);   //returns a NodeList which stores texts (space also) and elements both.
console.log(pare.children)  //Returns HTMLCollection which allways stores HTML elements.
console.log(pare.firstChild)    //returns according to NodeList
console.log(pare.firstElementChild) //return first child element of the parent. (elements means HTML tags)


const sib = document.querySelector('#sib');
console.log(sib.nextSibling)
console.log(sib.previousSibling)
console.lof(sib.nextElementSibling)
console.log(sib.previousElementSibling);


//innerHTML ---> returns all things as it is under it. (text and HTML tags)
//innerText ---> returns only the visible things. (things you can see in the screen)
//textContent ---> returns visible and unvisible text. (it can show you, display="none" elements)

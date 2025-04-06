//create element
const element = document.createElement("li");
element.innerHTML = "TS";

const parent = document.getElementById("third");
parent.appendChild(element);

function attachFunc(content) {
  const element = document.createElement("li");
  element.innerHTML = content;

  const parent = document.getElementById("third");
  parent.appendChild(element);  //can only append one element
  parent.append(element,"hello1","hello2")  //Can append multiple elements
  parent.prepend(element)   //add at the first
}

attachFunc("react")




//_____________________________TEXT NODE________________________________________________________________________________________________________________________

//create text node. (text nodes means they don't have any tags. example: spaces)
const element1 = document.createTextNode("hello world")
parent.append(element1);






//____________________________CREATE ATTRIBUTE_____________________________________________________________________________________________________________________________________
const attribute1 = document.createAttribute("id")   //Attribute 'id' is created
attribute1.value = "hello" //Give value of the attribute

const curr_list = document.querySelector('ul')
curr_list.setAttributeNode(attribute1);

// (Q) Try to add attribute at the 2nd element







//___________________________ACCESS ATTRIBUTE OF A ELEMENT____________________________________________________________________________________________________________________________________________________
const element2 = document.getElementById("root");
console.log(element2.getAttribute('class'));
element2.setAttribute('class','koushik')
console.log(element2.getAttribute('class'));
element2.removeAttribute('class')
console.log(element2.getAttribute('class'));






//______________________________________________________________________________________________________________________________________________________
document.querySelector('li').remove()
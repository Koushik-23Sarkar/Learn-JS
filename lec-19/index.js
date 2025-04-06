//DOM : Document Object Model.

//Browser convert our 'html' file in to an Object.
// JS knows how to malipulate object.

/*
    IF, i try to convert HTML
*/

// ----------------------------------------------------------------------------------------------------------------------------------

/*
DOM:
    window:
        document:
            HTML-file:  (each html element will convert into an Object)
                HEAD:
                    META:
                    META:
                    TITLE:
                        CODER ARMY
                BODY:
                    div:
                        h1:
                            Hello Coder Army
                            attribute: id:"first"
                        h2:
                        ul:

*/


// -------------------------------------------------------------------------------------------------------------------------------------



// let,
//     <h1 id="first" class="header1">Hello Coder Army</h1>   
//     const obj = {    //If i try to convert above tag, it somthing looks like this. 
//         id:"first",
//         class:"header1",
//         innerHTML:"Hello Coder Army",
//         tag:"h1"
//         //etc...
//     }


// -----------------------------------------------------------------------------------------------------------------------------

console.dir(document)   //To know, all property of the document.
const obj1 = document.getElementById("first");
console.log(typeof obj1);   //Object
console.log(obj1.__proto__)
console.log(obj1.id);
console.log(obj1.className);
/*
    To get Id of the HTML element, we use 'obj1.id'.
    But, To get class of the HTML elememt, we use 'obj1.className'.Because 'class' keyword is use to create Classes of The JS (OOPS). 
*/

const obj2 = document.getElementById("first");
const obj3 = document.getElementsByClassName("header1");
console.log(obj2); //
console.log(obj3);// This will return, HTMLCollection. We can have multiple HTML elements of same class name.
console.log(obj2.style) //Every properties in key:value pair of style object.


const obj4 = document.getElementsByTagName("h1");
console.log(obj4);
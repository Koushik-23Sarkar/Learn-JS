/**
 * Lexical Scope: lexical scope comes when we have nested functions.
 */

/**
 * Most typically, 'this' is used in object methods, where 'this' refers to the object that method is attached to, thus allowing the same method to be reused on different objects.
 * 
 * 
 * The value of 'this' in javaScript depends on how a function is invoked(runtime bindind), not how it defined.
 * When a regular function is invoked as a method of an object (obj.method()), 'this' points to that object.
 * 
 * 
 * When invoked as a standalone function (not attatched to a object: ' func() '). 'this' typically refers to the global object(in strict mode).
 * or 'undefined' (in strict mode).  We can use 'call/bind/apply' method to give 'this' value.
 * 
 * 
 * Arrow function differ in their handling of 'this'. An arrow function does not have it's own 'this'. Instead, it capture 'this' from the lexical scope. i.e. from where the arrow function was defined.
 */






{/*     Inline Event Handler

<button onClick={()=>console.log(this)}></button>
<button onClick={alert(this)}></button>
<button onClick={function(){
    return this;
}}></button> 

*/}
// In inline event handlers: (1) 'this' is bound to the DOM element on which the lister is placed. (if we have 'arrow function' or 'this')
//                           (2) If we use reguler function then, 'this' is bound to 'globalThis'. 
                                





/**         this in DOM event handlers
 *  When a function (reguler and arrow function too) is used as an event handler, its 'this' parameter is bound to the DOm element on which the listener is placed.
 */

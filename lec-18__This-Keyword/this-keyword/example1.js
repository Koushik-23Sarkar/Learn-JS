const obj = {
    count: 10,
    deSomethingLater(){
        setTimeout(function(){
            this.count++;
            console.log(this.count);
        },300)
    }
};

obj.deSomethingLater();

/**         step-by-step Breakdown
 *  1. obj.doSomeThingLater() is called.
 *  2. Inside doSomeThingLater(), setTimeout() is called with a reguler function as the callback:
 *                  
 *           +++++++++++++++++++++++++++++++++++++++++++++++++++++                     
 *                      function(){
 *                          this.count++;
 *                          console.log(this.count);
 *                      }
 *           +++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * 
 *  3. Important Behavior:
 *         ---> Reguler function  'this' depends on the caller.
 *         ---> In this case, the function passed to  'setTimeout' is called in the global context.
 *  4. Therefore,  'this' inside the function(){...}  refers to:
 *         ---> window in browsers (or global in NodeJS)
 *          ---> Not the obj.
 */



const obj1 = {
    count: 10,
    doSomething(){
        setTimeout(()=>{
            this.count++;
            console.log(this.count);
        },300)
    }
};

obj1.doSomething();
// Arrow function don't have their own 'this'. So, 'this' refers to the lexical context of doSomething(), i.e. the obj1.

/**
 *      The arrow function:
 * 
 *   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++         
 *             ()=>{
 *                  this.count++;
 *                  console.log(this.count);
 *              }
 *   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * 
 *    (Q) Where is this arrow function defined?
 *      ---> Inside the method  'doSomeThing()' which is a property of obj1.
 *     (Q) What is  'this' ?
 *      ---> When the arrow function is created, it captures the current 'this' of the outer function scope -> that is doSomeThing()'s 'this'.
 *      ---> Since doSomething() is called as obj1.doSomething(), inside doSomething(), this===obj1. 
 */

/**     (Q) Why doesn't   'setTimeout' change  'this' here/
 *   ---> 'setTimeout' is just a function that executes it's callback after some time.
 *   ---> Normally,  if you pass a regular function, 'this' inside the callback will refer to 'window' or 'global'.
 *   ---> But because we're using an arrow function, no matter the function is called, it always uses 'this' from the place where is was defined.
 */

/**
 *  inside doSomething() , when we define the arrow function inside setTimeout():
 * 
 *    ++++++++++++++++++++++++++++++++++++++++++++++++         
 *              setTimeout(()=>{
 *                  this.count++;
 *                  console.log(this.count);
 *              });
 *    ++++++++++++++++++++++++++++++++++++++++++++++++   
 * 
 *  the arrow function is defined right there inside the body of doSomeThing().
 *  at the point of definition,the current  'this' is obj.
 * 
 *  ---> Later, after 300ms, when  'setTimeout' calls the arrow function:
 *      Even though 'setTiemout' executes the function later, the arrow function still uses the captures this (which is obj).
 */
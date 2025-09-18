const outerObj = {
    count: 10,
    innerObj: {
        count: 20,
        showCount: ()=>{
            console.log(this.count);
        }
    }
};

outerObj.innerObj.showCount();

/**     Step-By-Step
 *  1. where is the arrow function defined?
 *    
 *   ++++++++++++++++++++++++++++++++++  
 *      showCount: ()=>{
 *          console.log(this.count);   
 *       }
 *  ++++++++++++++++++++++++++++++++++
 * 
 *  2. what's the lexical scope of the arrow function?
 *      ---> it is the scope in which the function was written.
 *      ---> in this case, the arrow function is created as part of the object literal expression:
 *  
 *      +++++++++++++++++++++++++++++++++++++++++            
 *              {
 *                  count:20;
 *                  showCount: ()=>{...}
 *              }
 *      +++++++++++++++++++++++++++++++++++++++++
 * 
 *  3. But object literals don't introduce a new function scope or this context.
 *      they are just data structure, and the code is parsed in the global scope.
 * 
 *  'this' is taken from the surrounding lexical context -> in this case, which is the global scope. 
 */ 
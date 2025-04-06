//Pizza order
function placeOrder(callback){
    console.log("Taking with Domino's");
    setTimeout(()=>{
        console.log('Order placed Successfully');
        callback();
    },2000);
}

function preparingOrder(callback){
    console.log("pizza preparation started....")

    setTimeout(()=>{
        console.log("Pizza preparation done!");
        callback();
    },5000);
}

function pickUpOrder(callback){
    console.log("Reaching restaurant fr picking Order!")

    setTimeout(()=>{
        console.log("Order picked up by delivery boy!")
        callback()
    },3000);
}

function deliverOrder(){
    console.log("Delivery Boy on the way")

    setTimeout(()=>{
        console.log("Order devilered successfuly!");
    },5000);
}


//placeOrder(preparingOrder)
// placeOrder(preparingOrder(pickUpOrder()))    <---- We can't do that 
placeOrder(()=>{
    preparingOrder(()=>{
        pickUpOrder(()=>{
            deliverOrder()
            // ......... 
            //If we have so many function like this, then it's readibility over. 
            // It would be so hard to understand that code.

            /*
            In a company, every function is allocated to each team.
            So, If I create callback Hall like this, then it's going to be so hard to understand the code.
            */

            /*
                Hard to debugging
            */
        });
    });
})


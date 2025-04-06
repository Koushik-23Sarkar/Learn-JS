//Pizza order
//Used the previous code but,
//Add more things to explain real-life scenario and more about callback hell.


/*
let cart = ["pizza", "coke","sandwich"];

function placeOrder(cart, callback){
    console.log("Taking with Domino's");
    setTimeout(()=>{
        console.log('Order placed Successfully');
        const order = {
            orderId: 221,
            food: cart,
            restaurant: "Dominos",
            location: "kolkata"
        }
        callback(order);
    },2000);
}

function preparingOrder(order, callback){
    console.log("pizza preparation started....")

    setTimeout(()=>{
        console.log("Pizza preparation done!");
        const foodDetails = {
            token: 12,
            restaurant: order.restaurant,
            location: order.location,
        }
        callback(foodDetails);
    },5000);
}

function pickUpOrder(foodDetails, callback){
    console.log("Reaching restaurant fr picking Order!")

    setTimeout(()=>{
        console.log("Order picked up by delivery boy!")
        const dropLocation = foodDetails.location;
        callback(dropLocation)
    },3000);
}

function deliverOrder(){
    console.log("Delivery Boy on the way")

    setTimeout(()=>{
        console.log("Order devilered successfuly!");
    },5000);
}

placeOrder(cart, (order)=>{
    preparingOrder(order, (foodDetails)=>{
        pickUpOrder(foodDetails, (dropLocation)=>{
            deliverOrder(dropLocation);
        });
    });
})

*/



//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

let cart = ["pizza", "coke","sandwich"];

function placeOrder(cart){
    console.log("Taking with Domino's");

    const pr = new Promise(function (resolve,reject){

        setTimeout(()=>{

            const food_available = true;

            if(food_available){
                console.log('Order placed Successfully');
                const order = {
                    orderId: 221,
                    food: cart,
                    restaurant: "Dominos",
                    location: "kolkata"
                }
                resolve(order);
            }else {
                reject("Items out of Stock!")
            }
        },2000);
    })

    return pr;

}

function preparingOrder(order){
    console.log("pizza preparation started....")

    const pr = new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log("Pizza preparation done!");
            const foodDetails = {
                token: 12,
                restaurant: order.restaurant,
                location: order.location,
            }
            resolve(foodDetails);
        },5000);
    })


    return pr;
}

function pickUpOrder(foodDetails, callback){
    console.log("Reaching restaurant fr picking Order!")

    const pr = new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by delivery boy!")
            const dropLocation = foodDetails.location;
            resolve(dropLocation)
        },3000);
    })

    return pr;
}

function deliverOrder(){
    console.log("Delivery Boy on the way")

    setTimeout(()=>{
        console.log("Order devilered successfuly!");
    },5000);
}


placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickUpOrder(foodDetails))
.then(dropLocation=>deliverOrder(dropLocation))
.catch(error=>console.log(error))
//It readibility is good campare to the 'previous callback'.


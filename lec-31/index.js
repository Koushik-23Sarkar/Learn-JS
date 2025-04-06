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

/*

const order = placeOrder(cart);
const foodDetails = preparingOrder(order);
const dropLocation = pickUpOrder(foodDetails);
deliverOrder(dropLocation);


----> If i do that thing, where every function wait till resolve, then it become more easy.
*/

//To do that we need to use async-await.

async function greet() {
    const order = await placeOrder(cart);   //await, wait your execution.
    const foodDetails = await preparingOrder(order);
    const dropLocation = await pickUpOrder(foodDetails);
    deliverOrder(dropLocation);
}



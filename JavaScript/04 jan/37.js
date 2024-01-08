const order = {name:"top",orderId:2};
const price = {
  1: 500,
  2:300,
  3:40000
}

const promise  = createCart(order)
console.log(promise,"promise<><><><><>")
promise.then((orderId)=>{
  return checkOutPage(orderId)
})
.then((price)=>{
  console.log(price,"price<><><<>><")
  return paymentPage(price)
})
.then((price)=>{
    console.log(price,"price   .");

})
.then((price)=>{
    alert("ordered placed");
})
.catch((err)=>{
  console.log(err,"error<><><>")
})
.then(()=>{
  console.log("will it work !??????")
})

function createCart(order){
 
  const promise = new Promise(function(resolve, reject){
    const isValidate = validateCart(order)
    if(isValidate){
      setTimeout(()=>{
        resolve(order.orderId)
      },5000)
    
    }
    else{
      reject("Cart is not valid")
    }
  })
  return promise
}

function validateCart (order){
  console.log(Object.keys(order))
  if(Object.keys(order).length && order.orderId){
    return true 
  }
  else{
    return false
  }
  
}

function checkOutPage(orderId){
  const orderPrice = price[orderId]
  console.log(orderPrice,orderId,"orderPrice<><><.")
  return orderPrice
}

function paymentPage(price) {
    console.log(price,"price");
    return price;
}
// used to handle the asynchronous operation 

// before promises

const cart =[1,2,3,4,5,6,7,8,9,10];
createOrder(cart); // orderId
proceedToPayment(orderId);

// now pass this into call back function 
createOrder (cart,function(orderId){
    proceedToPayment(orderId);
});
// to overcome the inversion of control while using the callback 
// to resolve we using the promises 

const promise = createOrder(cart);

// assume promise is empty  object with data order with undefined value 
// after some time ,  the promise object fill with data with async time 

promise.then(function(orderId){
    proceedToPayment(orderId);
});

// simplfied terms  
// in callback the we passing the callback function 
// but in promises we attaching the callback function   
// it will suely call the callback function and in onces

const GITHUB_API ="https://api.github.com/users/karthickramalagar"
 const user = fetch(GITHUB_API)
 console.log(user)
 // state of promise, pendinng, fullfilled , rejected
 // promise objects are immutable 

 // adding callback function in promise 

 user.then(function (data){
    console.log(data)
 })

 // prmise definition 
 // promise ia an object  representing the eventual completetion 
 // or failure of asynchronous operation

 // to avoid the callback hell by using the pronise chaining 

 // take the e-commerce flow 
 
 // call back hell

 const carts =[1,2,3,4,5];
 createOrder(cart,function(){
    proceedToPayment(orderId,function(paymentInfo){
      showOderSummary(paymentInfo,function (){
        updateWalletBalance();
      })
    })
 })

 // in promise chain
 createOrder(cart)
 .then(function(orderId){
    return proceedToPayment(orderId)
 })
 .then(function(paymentInfo){
   return  showOderSummary(paymentInfo)
 })
 .then(function(paymentInfo){
   return  updateWalletBalance(paymentInfo)
 })
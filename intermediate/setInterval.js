// setInterval is used to repeatedly execute the function with specified interval of time 

const intervalId=setInterval(
    function(){
      console.log("This message will be logged every 2 seconds");
    },2000
);


//setTimeout is used to execute block of code after the specified delay 
// setTimeout(
//     function(){
//         console.log("This message will be logged after 5 seconds");
//     },
//     5000
// );

// the setInterval can be stopped using clearInterval inside the setTimeout function
setTimeout(
    function(){
        clearInterval(intervalId);
        console.log("The interval has been cleared");
    },
    20000
);
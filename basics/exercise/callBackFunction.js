// create a function name(showCallFunc)
//pass "fn " as a parameter
//inside that function , create variables which holdes values of 10
// pass that value to the callback function
//now create call back function & log that value which you pass as parameter to the callback function

function showCallBack(fn){
    var value=1;
    fn(value);
}

showCallBack(function result(value){
    console.log(value);
})

function result(value = 2) {
  console.log(value);
}

showCallBack(result);
// The = 2 only takes effect if nothing is passed (i.e. undefined is passed).
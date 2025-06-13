// The Rest operators allows function to accepts an indefinite number of arguments.
// as an array , provideing a way to represent variadic functions in JavaScript.
//Variadic Function  is one which accepts infinity no of parameters

const elemnts = (x,...userData)=>{
    console.log("x: ", x);
  console.log("userData: ", userData);
  return 0
}

elemnts("John", "Doe", "Smith", "Jane");
// the rest parameters should take in atleast in last palce in parameters passing in function.
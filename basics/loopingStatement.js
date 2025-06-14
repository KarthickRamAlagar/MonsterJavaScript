// var variable = 0;
// for (let i = 0; i <= 5; i++) {
//   variable += i;
//   console.log(variable, i);
// }



let n = 100;
let iteration = 0;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  // Check if i is prime
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    iteration++;
    console.log(`Iteration ${iteration}: Prime number → ${i}`);
  }
}

// factorial 
let result=1;
for(let i=1;i<=5;i++){
    result *=i;
}
console.log(`Factorial of 10 is ${result}`);

let sum=0;
for(let i=0;i<=5;i++){
    if(i%2==0){
        sum+=i;
         console.table(`Sum of even numbers from ${i} to ${sum} is ${sum}`);
    }
   
}

let integer = 11;
let isPrime = true;

if (integer <= 1) {
  console.log("Not prime");
} else {
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Prime");
  } else {
    console.log("Not prime");
  }
}

let digits = 12345678910;
let str = digits.toString();

for (let i = 0; i < str.length; i++) {
  process.stdout.write(str[i]); // Works only in Node.js
}


// while loop
let num=1234567890;
let count=0;
while(num>false){
    num=Math.floor(num/10);
    count++;
}
console.log(`Number of digits in the number is ${count}`);

// nested for loop
for(let i=0;i<=5;i++){
    console.log('---outer loop---',i);
    // nested lopp
    for(let j=1;j<=5;j++){
        
    console.log("---inner loop---",j);
    }
}

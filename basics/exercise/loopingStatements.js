//print the name & number from 0 through 1000

let data = [];

for (let i = 0; i <= 5; i++) {
  data.push({ number: i, name: `RamAlagar${i}` });
}

console.table(data);


//print the name 100 times to the console using the while loop
//iteration will start from 10
let count = 10;
while (count <=100) {
  console.log(`RamAlagar${count}`);
  count++;
}

//print the name 400 times to the console using the do-while loop.
//iteration should start from 20
let counts=20;
do{
    console.log(`RamAlagar${counts}`);
    counts++;
}while(counts <= 400);
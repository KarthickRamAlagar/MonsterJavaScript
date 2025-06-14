// create variable(firstFavNum) and store the value
//  create variable(secondFavNum) and store the value
// Add the two variables together and store the result in a variable called total
//subtract the second variable from the first and store the result in a variable called difference
// multiply the two variables together and store the result in a variable called product
// divide the first variable by the second and store the result in a variable called quotient
// check firstFavNum Mod secondFavNum
//check the power of firstFavNum to the secondFavNum and store the result in a variable called power

let firstFavNum=1;
let secondFavNum=2;
let total = firstFavNum + secondFavNum; 
let difference = firstFavNum - secondFavNum;
let product = firstFavNum * secondFavNum;
let quotient = firstFavNum / secondFavNum;
let mod = firstFavNum % secondFavNum;
let power = firstFavNum ** secondFavNum;
console.table({
  firstFavNum,
  secondFavNum,
  total,
  difference,
  product,
  quotient,
  mod,
  power
});

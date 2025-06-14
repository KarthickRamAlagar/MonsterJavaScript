// ✅ Multidimensional Array in JavaScript (Topic-wise)
// =====================================================

// 🔸 1. Creation Methods
let multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArr[0][1]); // 2

// 🔸 2. Iteration Methods
// -- for-of loop
for (let row of multiArr) {
  for (let val of row) console.log(val);
}

// -- forEach
multiArr.forEach((row) => row.forEach((val) => console.log(val)));

// -- map
const doubled = multiArr.map((row) => row.map((num) => num * 2));
console.log(doubled); // [[2,4,6],[8,10,12],[14,16,18]]

// 🔸 3. Accessor Methods
// -- flat
console.log(multiArr.flat()); // [1,2,3,4,5,6,7,8,9]

// -- find
console.log(multiArr.flat().find((num) => num > 5)); // 6

// -- includes
console.log(multiArr.flat().includes(5)); // true

// -- indexOf & lastIndexOf
console.log(multiArr.flat().indexOf(5)); // 4
console.log(multiArr.flat().lastIndexOf(5)); // 4

// -- findIndex & findLastIndex
console.log(multiArr.flat().findIndex((num) => num > 5)); // 5
console.log(multiArr.flat().findLastIndex((num) => num < 8)); // 7

// -- entries, keys, values
const entries = multiArr[0].entries();
console.log(entries.next().value); // [0, 1]

const keys = multiArr[0].keys();
console.log(keys.next().value); // 0

const values = multiArr[0].values();
console.log(values.next().value); // 1

// 🔸 4. Mutator Methods
// -- fill
const filled = multiArr.map((row) => row.fill(0));
console.log(filled); // [[0,0,0],[0,0,0],[0,0,0]]

// -- copyWithin
const copied = multiArr.map((row) => row.copyWithin(0, 1));
console.log(copied); // [[2,3,3],[5,6,6],[8,9,9]]

// 🔸 5. Utility Methods
// -- flatMap
const flatMapped = multiArr.flatMap((row) => row.map((num) => num * 2));
console.log(flatMapped); // [2,4,6,8,10,12,14,16,18]

// -- reduce
const totalSum = multiArr.reduce(
  (sum, row) => sum + row.reduce((rSum, num) => rSum + num, 0),
  0
);
console.log(totalSum); // 45

// 🔸 6. Conditional Check Methods
// -- some
const someCheck = multiArr.some((row) => row.some((num) => num > 8));
console.log(someCheck); // true

// -- every
const allPositive = multiArr.every((row) => row.every((num) => num > 0));
console.log(allPositive); // true

// -- filter
const filtered = multiArr.map((row) => row.filter((num) => num > 5));
console.log(filtered); // [[],[],[7,8,9]]

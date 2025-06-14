// ✅ MUTATOR METHODS (modify original array)
// push() - Add to end
let a1 = [1, 2];
a1.push(3);
console.log(a1); // [1, 2, 3]

// pop() - Remove from end
let a2 = [1, 2, 3];
a2.pop();
console.log(a2); // [1, 2]

// shift() - Remove from start
let a3 = [1, 2, 3];
a3.shift();
console.log(a3); // [2, 3]

// unshift() - Add to start
let a4 = [2, 3];
a4.unshift(1);
console.log(a4); // [1, 2, 3]

// splice() - Remove/Insert at index array.splice(start, deleteCount, item1, item2, ...)
let a5 = [1, 2, 3, 4]; 
a5.splice(1, 2);
console.log(a5); // [1, 4]

// reverse() - Reverse array
let a6 = [1, 2, 3];
a6.reverse();
console.log(a6); // [3, 2, 1]

// sort() - Lexical sort
let a7 = [40, 100, 1, 5];
a7.sort();
console.log(a7); // [1, 100, 40, 5]

// fill() - Fill all/part with value
let a8 = new Array(3).fill(0);
console.log(a8); // [0, 0, 0]

// copyWithin() - Copy part to another index
//The copyWithin() method copies part of an array to another location within the same array, without changing its length.

let a9 = [1, 2, 3];
a9.copyWithin(0, 1);
console.log(a9); // [2, 3, 3] array.copyWithin(target, start, end)

// ✅ ACCESSOR METHODS (no change to original)

// concat() - Merge arrays
let b1 = [1, 2].concat([3, 4]);
console.log(b1); // [1, 2, 3, 4]

// slice() - Shallow copy from range
/*
The slice() method returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included).
It does not modify the original array
*/
let arr = [10, 20, 30, 40, 50];
let sliced = arr.slice(1, 4);
console.log(sliced); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50] (unchanged)

// join() - Join to string
let b3 = ["a", "b"].join("-");
console.log(b3); // "a-b"

// indexOf() - First index of value
let b4 = [1, 2, 3].indexOf(2);
console.log(b4); // 1

// lastIndexOf() - Last index of value
let b5 = [1, 2, 3, 2].lastIndexOf(2);
console.log(b5); // 3

// includes() - Check if value exists
let b6 = [1, 2, 3].includes(2);
console.log(b6); // true

// toString() - Array to comma string
let b7 = [1, 2].toString();
console.log(b7); // "1,2"

// valueOf() - Returns array itself
let b8 = [1, 2].valueOf();
console.log(b8); // [1, 2]

// at() - Get value at index
let b9 = [10, 20, 30].at(-1);
console.log(b9); // 30

// ✅ ITERATION METHODS

// forEach() - Run callback
//  Runs a function on each element
[1, 2, 3].forEach((x) => console.log(x));

// map() - Transform to new array
// Transforms each element, returns new array
let c1 = [1, 2, 3].map((x) => x * 2);
console.log(c1); // [2, 4, 6]

// filter() - Elements passing condition
// Keeps only elements that pass a condition
let c2 = [1, 2, 3].filter((x) => x > 1);
console.log(c2); // [2, 3]

// reduce() - Reduce to single value
// Combines elements into a single value
let c3 = [1, 2, 3].reduce((a, b) => a + b);
console.log(c3); // 6

// reduceRight() - Reduce right-to-left
// Like reduce, but right to left
let c4 = [1, 2, 3].reduceRight((a, b) => a - b);
console.log(c4); // 0

// some() - At least one satisfies
//  True if any element passes
let c5 = [1, 2, 3].some((x) => x > 2);
console.log(c5); // true

// every() - All satisfy
//True if all elements pass
let c6 = [1, 2, 3].every((x) => x > 0);
console.log(c6); // true

// find() - First match
//Finds first value passing condition
let c7 = [1, 2, 3].find((x) => x > 1);
console.log(c7); // 2

// findIndex() - Index of first match
// Finds index of first matching element
let c8 = [1, 2, 3].findIndex((x) => x > 1);
console.log(c8); // 1

// findLast() - Last match
//  Finds last value matching condition 
let c9 = [1, 2, 3].findLast((x) => x < 3);
console.log(c9); // 2

// findLastIndex() - Index of last match
//  Index of last value matching condition
let c10 = [1, 2, 3].findLastIndex((x) => x < 3);
console.log(c10); // 1




//Structure / Transform Methods

// flat() - Flatten nested arrays
//	Flattens nested arrays by 1 level
let c11 = [[1, 2], [3]].flat();
console.log(c11); // [1, 2, 3]

// flatMap() - Map then flatten
// Maps + flattens (1 level)
let c12 = [1, 2].flatMap((x) => [x, x * 2]);
console.log(c12); // [1, 2, 2, 4]

// entries() - Iterator of [index, value]
// 	Returns [index, value] iterator
let c13 = ["a", "b"].entries();
console.log(c13.next().value); // [0, 'a']

// keys() - Iterator of keys
//  Returns index iterator
let c14 = ["a", "b"].keys();
console.log(c14.next().value); // 0

// values() - Iterator of values
// Returns value iterator
let c15 = ["a", "b"].values();
console.log(c15.next().value); // "a"

// ✅ UTILITY/CREATION METHODS

// Array.of() - Creates array from args
let d1 = Array.of(1, 2, 3);
console.log(d1); // [1, 2, 3]

// Array.from() - From iterable
let d2 = Array.from("abc");
console.log(d2); // ['a', 'b', 'c']

// Array.isArray() - Check if array
console.log(Array.isArray([1, 2])); // true

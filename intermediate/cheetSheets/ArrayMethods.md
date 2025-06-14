# ✅ JavaScript Array Methods Cheatsheet

---

## 🔧 MUTATOR METHODS *(modify the original array)*

### `push()` - Add to end

Adds one or more elements to the end of an array.

```js
let a1 = [1, 2];
a1.push(3);
console.log(a1); // [1, 2, 3]
```

---

### `pop()` - Remove from end

Removes the last element from an array.

```js
let a2 = [1, 2, 3];
a2.pop();
console.log(a2); // [1, 2]
```

---

### `shift()` - Remove from start

Removes the first element from an array.

```js
let a3 = [1, 2, 3];
a3.shift();
console.log(a3); // [2, 3]
```

---

### `unshift()` - Add to start

Adds one or more elements to the beginning of an array.

```js
let a4 = [2, 3];
a4.unshift(1);
console.log(a4); // [1, 2, 3]
```

---

### `splice()` - Remove/Insert at index

Removes or replaces existing elements and/or adds new elements in place.

```js
let a5 = [1, 2, 3, 4];
a5.splice(1, 2);
console.log(a5); // [1, 4]
```

---

### `reverse()` - Reverse array

Reverses the order of the elements in the array.

```js
let a6 = [1, 2, 3];
a6.reverse();
console.log(a6); // [3, 2, 1]
```

---

### `sort()` - Lexical sort (default)

Sorts the elements of an array as strings by default.

```js
let a7 = [40, 100, 1, 5];
a7.sort();
console.log(a7); // [1, 100, 40, 5]
```

---

### `fill()` - Fill all/part with value

Fills all elements from a start index to an end index with a static value.

```js
let a8 = new Array(3).fill(0);
console.log(a8); // [0, 0, 0]
```

---

### `copyWithin()` - Copy part to another index

Copies part of an array to another location in the same array.

```js
let a9 = [1, 2, 3];
a9.copyWithin(0, 1);
console.log(a9); // [2, 3, 3]
```

---

## 📥 ACCESSOR METHODS *(do NOT modify original array)*

### `concat()` - Merge arrays

Merges two or more arrays and returns a new array.

```js
let b1 = [1, 2].concat([3, 4]);
console.log(b1); // [1, 2, 3, 4]
```

---

### `slice()` - Shallow copy from range

Returns a shallow copy of a portion of an array into a new array.

```js
let arr = [10, 20, 30, 40, 50];
let sliced = arr.slice(1, 4);
console.log(sliced); // [20, 30, 40]
```

---

### `join()` - Join to string

Joins all elements of an array into a string.

```js
let b3 = ["a", "b"].join("-");
console.log(b3); // "a-b"
```

---

### `indexOf()` - First index of value

Returns the first index at which a given element can be found.

```js
let b4 = [1, 2, 3].indexOf(2);
console.log(b4); // 1
```

---

### `lastIndexOf()` - Last index of value

Returns the last index at which a given element can be found.

```js
let b5 = [1, 2, 3, 2].lastIndexOf(2);
console.log(b5); // 3
```

---

### `includes()` - Check if value exists

Determines if an array includes a certain value.

```js
let b6 = [1, 2, 3].includes(2);
console.log(b6); // true
```

---

### `toString()` - Array to comma string

Returns a string representing the elements of the array.

```js
let b7 = [1, 2].toString();
console.log(b7); // "1,2"
```

---

### `valueOf()` - Returns array itself

Returns the primitive value of the array (same array).

```js
let b8 = [1, 2].valueOf();
console.log(b8); // [1, 2]
```

---

### `at()` - Get value at index (supports negative index)

Returns the element at the given index. Supports negative indices.

```js
let b9 = [10, 20, 30].at(-1);
console.log(b9); // 30
```

---

## 🔁 ITERATION METHODS

### `forEach()` - Run callback

Runs a function for each array element.

```js
[1, 2, 3].forEach((x) => console.log(x));
```

---

### `map()` - Transform to new array

Creates a new array with the results of calling a function on every element.

```js
let c1 = [1, 2, 3].map((x) => x * 2);
console.log(c1); // [2, 4, 6]
```

---

### `filter()` - Elements passing condition

Creates a new array with elements that pass the test.

```js
let c2 = [1, 2, 3].filter((x) => x > 1);
console.log(c2); // [2, 3]
```

---

### `reduce()` - Reduce to single value

Executes a reducer function and returns a single output value.

```js
let c3 = [1, 2, 3].reduce((a, b) => a + b);
console.log(c3); // 6
```

---

### `reduceRight()` - Reduce right-to-left

Same as reduce, but from right to left.

```js
let c4 = [1, 2, 3].reduceRight((a, b) => a - b);
console.log(c4); // 0
```

---

### `some()` - At least one satisfies

Checks if at least one element satisfies the condition.

```js
let c5 = [1, 2, 3].some((x) => x > 2);
console.log(c5); // true
```

---

### `every()` - All satisfy

Checks if all elements satisfy the condition.

```js
let c6 = [1, 2, 3].every((x) => x > 0);
console.log(c6); // true
```

---

### `find()` - First match

Returns the first element that satisfies the condition.

```js
let c7 = [1, 2, 3].find((x) => x > 1);
console.log(c7); // 2
```

---

### `findIndex()` - Index of first match

Returns the index of the first element that satisfies the condition.

```js
let c8 = [1, 2, 3].findIndex((x) => x > 1);
console.log(c8); // 1
```

---

### `findLast()` - Last match

Returns the last element that satisfies the condition.

```js
let c9 = [1, 2, 3].findLast((x) => x < 3);
console.log(c9); // 2
```

---

### `findLastIndex()` - Index of last match

Returns the index of the last element that satisfies the condition.

```js
let c10 = [1, 2, 3].findLastIndex((x) => x < 3);
console.log(c10); // 1
```

---

## 🧱 STRUCTURE / TRANSFORM METHODS

### `flat()` - Flatten nested arrays

Creates a new array with sub-array elements concatenated into it.

```js
let c11 = [[1, 2], [3]].flat();
console.log(c11); // [1, 2, 3]
```

---

### `flatMap()` - Map then flatten

Maps each element and flattens the result into a new array.

```js
let c12 = [1, 2].flatMap((x) => [x, x * 2]);
console.log(c12); // [1, 2, 2, 4]
```

---

### `entries()` - Iterator of \[index, value]

Returns a new Array Iterator object that contains key/value pairs.

```js
let c13 = ["a", "b"].entries();
console.log(c13.next().value); // [0, 'a']
```

---

### `keys()` - Iterator of keys

Returns a new Array Iterator that contains the keys.

```js
let c14 = ["a", "b"].keys();
console.log(c14.next().value); // 0
```

---

### `values()` - Iterator of values

Returns a new Array Iterator that contains the values.

```js
let c15 = ["a", "b"].values();
console.log(c15.next().value); // "a"
```

---

## 🧰 UTILITY / CREATION METHODS

### `Array.of()` - Creates array from args

Creates a new Array instance with a variable number of arguments.

```js
let d1 = Array.of(1, 2, 3);
console.log(d1); // [1, 2, 3]
```

---

### `Array.from()` - From iterable

Creates a new array instance from an array-like or iterable object.

```js
let d2 = Array.from("abc");
console.log(d2); // ['a', 'b', 'c']
```

---

### `Array.isArray()` - Check if array

Checks whether the passed value is an array.

```js
console.log(Array.isArray([1, 2])); // true
```

---

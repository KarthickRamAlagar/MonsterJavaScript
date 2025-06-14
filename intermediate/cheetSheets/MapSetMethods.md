# JavaScript Map Methods

A `Map` is a built-in JavaScript data structure that lets you store key-value pairs. Here are some common methods with simple examples:

---

## 1. `set(key, value)`

Adds a new key-value pair to the map.

```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map); // Map(2) { 'a' => 1, 'b' => 2 }
```

---

## 2. `get(key)`

Retrieves the value for a given key.

```javascript
const map = new Map();
map.set('a', 10);
console.log(map.get('a')); // 10
```

---

## 3. `delete(key)`

Removes a key and its value from the map.

```javascript
const map = new Map();
map.set('b', 2);
map.delete('b');
console.log(map.has('b')); // false
```

---

## 4. `has(key)`

Checks if a key exists in the map.

```javascript
const map = new Map();
map.set('c', 3);
console.log(map.has('c')); // true
```

---

## 5. `size`

Returns the number of key-value pairs in the map.

```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.delete('b');
console.log(map.size); // 1
```

---

## 6. `clear()`

Removes all key-value pairs from the map.

```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.clear();
console.log(map.size); // 0
```

---

## 7. Iterating over a Map

You can loop through keys and values using `for...of`.

```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);

for (let [key, value] of map) {
  console.log(key, value);
}
// Output:
// a 1
// b 2
```

---

# JavaScript `Set` and Its Methods

A **Set** is a built-in JavaScript object that lets you store unique values of any type, whether primitive values or object references.

---

## Creating a Set

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will not be added
console.log(mySet); // Set(2) { 1, 2 }
```

---

## Common Set Methods

### 1. `add(value)`

Adds a new value to the set.

```javascript
const set = new Set();
set.add('apple');
set.add('banana');
console.log(set); // Set(2) { 'apple', 'banana' }
```

---

### 2. `has(value)`

Checks if a value exists in the set.

```javascript
const set = new Set(['apple', 'banana']);
console.log(set.has('apple')); // true
console.log(set.has('grape')); // false
```

---

### 3. `delete(value)`

Removes a value from the set.

```javascript
const set = new Set(['apple', 'banana']);
set.delete('banana');
console.log(set); // Set(1) { 'apple' }
```

---

### 4. `size`

Returns the number of unique values in the set.

```javascript
const set = new Set([1, 2, 3]);
console.log(set.size); // 3
```

---

### 5. `clear()`

Removes all values from the set.

```javascript
const set = new Set([1, 2, 3]);
set.clear();
console.log(set.size); // 0
```

---

### 6. Iterating Over a Set

You can use `for...of` to loop through set values.

```javascript
const set = new Set(['a', 'b', 'c']);
for (let value of set) {
  console.log(value);
}
// Output:
// a
// b
// c
```

---
````
# ✅ JavaScript String Methods Cheatsheet

---

## 🟢 Basic Info & Conversion

### `length` - Returns string length

```js
let str = 'Hi';
console.log(str.length); // 2
```

### `charAt(index)` - Character at position

```js
let str = 'Hi';
console.log(str.charAt(1)); // 'i'
```

### `charCodeAt(index)` - UTF-16 code

```js
let str = 'A';
console.log(str.charCodeAt(0)); // 65
```

### `toUpperCase()` - Uppercase string

```js
let str = 'hi';
console.log(str.toUpperCase()); // 'HI'
```

### `toLowerCase()` - Lowercase string

```js
let str = 'HI';
console.log(str.toLowerCase()); // 'hi'
```

### `trim()` - Remove whitespace both ends

```js
let str = ' hi ';
console.log(str.trim()); // 'hi'
```

### `trimStart()` - Remove whitespace from start

```js
let str = ' hi';
console.log(str.trimStart()); // 'hi'
```

### `trimEnd()` - Remove whitespace from end

```js
let str = 'hi ';
console.log(str.trimEnd()); // 'hi'
```

### `toString()` - Converts to string

```js
let num = 123;
console.log(num.toString()); // '123'
```

---

## 🟠 Search & Check

### `includes(value)` - Substring exists?

```js
let str = 'hello';
console.log(str.includes('ell')); // true
```

### `startsWith(value)` - Starts with value?

```js
let str = 'hi';
console.log(str.startsWith('h')); // true
```

### `endsWith(value)` - Ends with value?

```js
let str = 'hi';
console.log(str.endsWith('i')); // true
```

### `indexOf(value)` - First index of value

```js
let str = 'hello';
console.log(str.indexOf('l')); // 2
```

### `lastIndexOf(value)` - Last index of value

```js
let str = 'hello';
console.log(str.lastIndexOf('l')); // 3
```

---

## 🔵 Extract & Slice

### `slice(start, end?)` - Extract substring

```js
let str = 'hello';
console.log(str.slice(1, 3)); // 'el'
```

### `substring(start, end)` - Similar to slice

```js
let str = 'hello';
console.log(str.substring(1, 4)); // 'ell'
```

### `substr(start, length)` - (Deprecated)

```js
let str = 'hello';
console.log(str.substr(1, 2)); // 'el'
```

---

## 🟣 Modify & Replace

### `replace(old, new)` - Replace first match

```js
let str = 'aabb';
console.log(str.replace('a', 'x')); // 'xabb'
```

### `replaceAll(old, new)` - Replace all matches

```js
let str = 'aabb';
console.log(str.replaceAll('a', 'x')); // 'xxbb'
```

### `repeat(n)` - Repeat string

```js
let str = 'ha';
console.log(str.repeat(3)); // 'hahaha'
```

### `padStart(len, str)` - Pad from start

```js
let str = '5';
console.log(str.padStart(3, '0')); // '005'
```

### `padEnd(len, str)` - Pad from end

```js
let str = '5';
console.log(str.padEnd(3, '0')); // '500'
```

---

## 🟤 Split & Match

### `split(separator)` - Split to array

```js
let str = 'a,b,c';
console.log(str.split(',')); // ['a', 'b', 'c']
```

### `match(regex)` - Match regex

```js
let str = 'abc';
console.log(str.match(/[a-z]/g)); // ['a', 'b', 'c']
```

### `matchAll(regex)` - All matches (iterator)

```js
let str = 'test';
console.log([...str.matchAll(/t/g)]); // [{...}, {...}]
```

### `search(regex)` - Search with regex

```js
let str = 'abc';
console.log(str.search(/b/)); // 1
```

### `join(separator)` - Join characters

```js
let word = 'JAVASCRIPT';
console.log(word.split('').join('-')); // 'J-A-V-A-S-C-R-I-P-T'
```

---

## 🟥 Other Useful Methods

### `localeCompare(str)` - Locale comparison

```js
let a = 'a';
let b = 'b';
console.log(a.localeCompare(b)); // -1
```

### `normalize()` - Unicode normalization

```js
let str = '\u0041\u030A';
console.log(str.normalize()); // Å
```

### `valueOf()` - Primitive value

```js
let str = new String('hi');
console.log(str.valueOf()); // 'hi'
```

### `constructor` - Constructor function

```js
let str = 'hello';
console.log(str.constructor); // [Function: String]
```

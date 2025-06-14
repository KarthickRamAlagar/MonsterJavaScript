# ✅ JavaScript Number Methods Cheatsheet

---

## 🟢 Number Basics & Type Check

### ➤ `typeof`

**Syntax**: `typeof value`
**Example**:

```js
typeof 42; // 'number'
```

---

### ➤ `NaN`

**Description**: Result of an invalid number operation.
**Example**:

```js
"abc" / 2; // NaN
```

---

### ➤ `Infinity`

**Description**: Result of number beyond the maximum limit.
**Example**:

```js
10 / 0; // Infinity
```

---

### ➤ `-Infinity`

**Description**: Result of number smaller than the minimum limit.
**Example**:

```js
-1 / 0; // -Infinity
```

---

## 🟠 Format Numbers

### ➤ `toFixed(n)`

**Syntax**: `num.toFixed(digits)`
**Example**:

```js
(3.14159).toFixed(2); // '3.14'
```

---

### ➤ `toPrecision(n)`

**Syntax**: `num.toPrecision(digits)`
**Example**:

```js
(3.14159).toPrecision(4); // '3.142'
```

---

### ➤ `toExponential(n)`

**Syntax**: `num.toExponential(digits)`
**Example**:

```js
(123456).toExponential(2); // '1.23e+5'
```

---

### ➤ `toString(base)`

**Syntax**: `num.toString(base)`
**Example**:

```js
(10).toString(2); // '1010'
(255).toString(16); // 'ff'
```

---

### ➤ `valueOf()`

**Syntax**: `num.valueOf()`
**Example**:

```js
(42).valueOf(); // 42
```

---

## 🔵 Number Checks

### ➤ `Number.isFinite(x)`

**Description**: Checks if a value is a finite number.
**Example**:

```js
Number.isFinite(100); // true
Number.isFinite(Infinity); // false
```

---

### ➤ `Number.isInteger(x)`

**Description**: Checks if a value is an integer.
**Example**:

```js
Number.isInteger(5); // true
Number.isInteger(5.5); // false
```

---

### ➤ `Number.isNaN(x)`

**Description**: Checks if a value is NaN.
**Example**:

```js
Number.isNaN(NaN); // true
Number.isNaN("abc"); // false
```

---

### ➤ `Number.isSafeInteger(x)`

**Description**: Checks if value is within safe integer range.
**Example**:

```js
Number.isSafeInteger(9007199254740991); // true
Number.isSafeInteger(2**53); // false
```

---

## 🟣 Parse Strings to Numbers

### ➤ `Number.parseInt(str)`

**Description**: Converts string to integer.
**Example**:

```js
Number.parseInt("42px"); // 42
```

---

### ➤ `Number.parseFloat(str)`

**Description**: Converts string to floating-point number.
**Example**:

```js
Number.parseFloat("3.14em"); // 3.14
```

---

## 🟤 Number Constants

### ➤ `Number.EPSILON`

**Description**: Smallest difference between 2 numbers.
**Example**:

```js
Number.EPSILON; // 2.220446049250313e-16
```

---

### ➤ `Number.MAX_VALUE`

**Description**: Largest number JS can represent.
**Example**:

```js
Number.MAX_VALUE; // 1.7976931348623157e+308
```

---

### ➤ `Number.MIN_VALUE`

**Description**: Smallest positive number (> 0).
**Example**:

```js
Number.MIN_VALUE; // 5e-324
```

---

### ➤ `Number.MAX_SAFE_INTEGER`

**Description**: Maximum safe integer value.
**Example**:

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

---

### ➤ `Number.MIN_SAFE_INTEGER`

**Description**: Minimum safe integer value.
**Example**:

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
```

---

### ➤ `Number.POSITIVE_INFINITY`

**Description**: Represents +Infinity.
**Example**:

```js
Number.POSITIVE_INFINITY; // Infinity
```

---

### ➤ `Number.NEGATIVE_INFINITY`

**Description**: Represents -Infinity.
**Example**:

```js
Number.NEGATIVE_INFINITY; // -Infinity
```

---

### ➤ `Number.NaN`

**Description**: Represents Not-a-Number.
**Example**:

```js
Number.NaN; // NaN
```

---

Let me know if you want similar cheatsheets for other JS data types like `Boolean`, `Object`, or `Array`!

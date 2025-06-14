# ✅ JavaScript Object Cheatsheet

---

## 🔹 Object Creation Methods

### 1. Object Literal

```js
let obj = { name: 'John', age: 30 };
```

---

### 2. Object Constructor

```js
let obj1 = new Object({
  name: 'Doe',
  age: 20
});
```

---

### 3. Object.create(proto)

```js
let obj2 = Object.create(obj);
obj2.city = 'New York';
```

---

### 4. Object.assign(target, source)

```js
let obj3 = Object.assign({}, obj, { country: 'USA' });
```

---

## 🔹 Accessing & Modifying Object Properties

### Accessing Values

```js
let person = {
  name: "Karthick",
  age: 25,
  isStudent: true
};
console.log(person.name);     // Dot notation
console.log(person["age"]);   // Bracket notation
```

---

### Adding/Updating Properties

```js
person.city = "Chennai";   // Add
person.age = 26;           // Update
```

---

### Deleting Properties

```js
delete person.isStudent; // Remove property
```

---

### Checking if Key Exists

```js
console.log("name" in person); // true
```

---

### Looping Through Object

```js
for (let key in person) {
  console.log(key, person[key]);
}
```

---

## 🔹 Nested Objects

```js
let user = {
  name: "Ram",
  address: {
    city: "Mumbai",
    zip: 400001
  }
};
console.log(user.address.city); // Mumbai
```

---

## 🔹 Object with Function

```js
let student = {
  name: "Arun",
  greet: function () {
    return "Hello, " + this.name;
  }
};
console.log(student.greet());
```

---

## 🔹 Object Methods

### Object.keys(obj)

Returns an array of the object's own enumerable property names.

```js
console.log(Object.keys(user)); // ['name', 'address']
```

---

### Object.values(obj)

Returns an array of the object's own enumerable property values.

```js
console.log(Object.values(user)); // ['Ram', { city: 'Mumbai', zip: 400001 }]
```

---

### Object.entries(obj)

Returns an array of key-value pairs.

```js
console.log(Object.entries(user));
```

---

### Object.hasOwn(obj, key)

Checks if object has own property (not from prototype). *(ES2022+)*

```js
console.log(Object.hasOwn(user, "name")); // true
```

---

### Object.getOwnPropertyNames(obj)

Returns all property names, including non-enumerable.

```js
console.log(Object.getOwnPropertyNames(user)); // ['name', 'address']
```

---

### Object.getOwnPropertyDescriptor(obj, key)

Returns detailed descriptor of property.

```js
console.log(Object.getOwnPropertyDescriptor(user, "name"));
```

---

### Object.assign(target, source)

Copies properties to target (merge/clone).

```js
const original = { a: 1 };
const copy = Object.assign({}, original); // clone
const merged = Object.assign(original, { b: 2 }); // merge
```

---

### Object.defineProperty(obj, key, descriptor)

Defines or modifies single property.

```js
Object.defineProperty(user, "gender", {
  value: "male",
  writable: true,
  enumerable: true,
});
```

---

### Object.defineProperties(obj, descriptors)

Defines multiple properties.

```js
Object.defineProperties(user, {
  country: { value: "India", enumerable: true },
  isActive: { value: true, enumerable: true },
});
```

---

### Object.freeze(obj)

Makes object immutable.

```js
Object.freeze(user);
user.name = "Krishna"; // won't change
```

---

### Object.seal(obj)

Prevents add/delete, allows modify.

```js
Object.seal(user);
```

---

### Object.preventExtensions(obj)

Prevents adding new properties.

```js
Object.preventExtensions(user);
```

---

### Object.create(proto)

Creates object with given prototype.

```js
const base = { greet: () => "Hi" };
const obj = Object.create(base);
```

---

### Object.getPrototypeOf(obj)

Gets prototype of object.

```js
console.log(Object.getPrototypeOf(obj));
```

---

### Object.setPrototypeOf(obj, proto)

Sets prototype of object.

```js
Object.setPrototypeOf(obj, { sayHi: () => "Hi" });
```

---

### Object.is(a, b)

Strict comparison, handles `NaN` correctly.

```js
console.log(Object.is(NaN, NaN)); // true
```

---

### {}.toString()

Returns object as string.

```js
console.log({}.toString()); // [object Object]
```

---

## 🔸 BONUS: Instance Methods

### obj.hasOwnProperty(key)

```js
user.hasOwnProperty("address"); // true
```

---

### obj.toString()

```js
console.log(user.toString());
```

---

### obj.valueOf()

```js
console.log(user.valueOf());
```

---

### Function Inside Object

```js
let FunctionObject = {
  name: "RamAlagar",
  greet: function() {
    return `hello ,This is ${this.name} here `;
  }
};
console.log(FunctionObject.greet());
```

---

Let me know if you want a cheatsheet for Arrays, Strings, or Loops too!

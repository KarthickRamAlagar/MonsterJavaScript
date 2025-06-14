// ✅ JavaScript Object Methods Explained
// ======================================

// 🔹 1. Object.keys(obj)
// ➤ Returns an array of the object's own enumerable property names (keys).
const user = { name: "Ram", age: 25 };
console.log(Object.keys(user)); // ['name', 'age']

// 🔹 2. Object.values(obj)
// ➤ Returns an array of the object's own enumerable property values.
console.log(Object.values(user)); // ['Ram', 25]

// 🔹 3. Object.entries(obj)
// ➤ Returns an array of key-value pairs.
console.log(Object.entries(user)); // [['name', 'Ram'], ['age', 25]]

// 🔹 4. Object.hasOwn(obj, prop) (ES2022+)
// ➤ Checks if the object has a specific key (not from prototype).
console.log(Object.hasOwn(user, "name")); // true

// 🔹 5. Object.getOwnPropertyNames(obj)
// ➤ Returns all property names, including non-enumerable ones.
console.log(Object.getOwnPropertyNames(user)); // ['name', 'age']

// 🔹 6. Object.getOwnPropertyDescriptor(obj, prop)
// ➤ Returns property descriptor (value, writable, enumerable, configurable)
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/* Example output:
{
  value: 'Ram',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 🔹 7. Object.assign(target, source)
// ➤ Copies properties from source to target.
const address = { city: "Chennai" };
const merged = Object.assign({}, user, address);
console.log(merged); // { name: 'Ram', age: 25, city: 'Chennai' }

// 🔹 8. Object.defineProperty(obj, key, descriptor)
// ➤ Defines a new property or modifies an existing one.
Object.defineProperty(user, "gender", {
  value: "male",
  writable: true,
  enumerable: true,
});
console.log(user); // { name: 'Ram', age: 25, gender: 'male' }

// 🔹 9. Object.defineProperties(obj, descriptors)
// ➤ Defines multiple properties at once.
Object.defineProperties(user, {
  country: { value: "India", enumerable: true },
  isActive: { value: true, enumerable: true },
});
console.log(user);

// 🔹 10. Object.freeze(obj)
// ➤ Prevents any changes to the object.
Object.freeze(user);
user.age = 30; // No effect
console.log(user.age); // 25

// 🔹 11. Object.seal(obj)
// ➤ Allows modification but not addition/removal.
const sealed = { name: "Sita" };
Object.seal(sealed);
sealed.name = "Gita";
sealed.age = 22; // Won't be added
console.log(sealed); // { name: 'Gita' }

// 🔹 12. Object.preventExtensions(obj)
// ➤ Prevents new properties from being added.
const noExtend = { hobby: "reading" };
Object.preventExtensions(noExtend);
noExtend.newProp = "no"; // Won't be added
console.log(noExtend); // { hobby: 'reading' }

// 🔹 13. Object.create(proto)
// ➤ Creates a new object with the specified prototype.
const proto = { greet: () => "Hello" };
const obj1 = Object.create(proto);
console.log(obj1.greet()); // Hello

// 🔹 14. Object.getPrototypeOf(obj)
// ➤ Returns the prototype of the object.
console.log(Object.getPrototypeOf(obj1)); // { greet: f }

// 🔹 15. Object.setPrototypeOf(obj, proto)
// ➤ Sets the prototype of an object.
const newProto = { sayHi: () => "Hi!" };
Object.setPrototypeOf(obj1, newProto);
console.log(obj1.sayHi()); // Hi!

// 🔹 16. Object.is(a, b)
// ➤ Determines whether two values are the same value.
console.log(Object.is(25, 25)); // true
console.log(Object.is(NaN, NaN)); // true

// 🔹 17. Object.toString()
// ➤ Returns string representation of the object.
console.log({}.toString()); // [object Object]

// 🔸 BONUS: Instance Methods
// ==========================

// 🔹 obj.hasOwnProperty(prop)
console.log(user.hasOwnProperty("age")); // true

// 🔹 obj.toString()
console.log(user.toString()); // [object Object]

// 🔹 obj.valueOf()
console.log(user.valueOf()); // original object itself

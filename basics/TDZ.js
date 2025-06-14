/*What is TDZ (Temporal Dead Zone)?

**TDZ** stands for **Temporal Dead Zone**, and it refers to the **time between**:

1. When a variable is **hoisted** to the top of its block scope, and
2. When the variable is **actually declared (initialized)** in your code.

During this time, **you cannot access the variable** — doing so will throw a `ReferenceError`.

This applies **only to `let` and `const`**.

---

### 📌 Why does it happen?

Even though `let` and `const` are **hoisted**, they are **not automatically initialized to `undefined`** like `var`.

So until the engine reaches the line where you actually declare it, the variable is in the **TDZ** — a kind of "limbo" where it exists, but cannot be used.

---

### ⚠️ Example: TDZ in action

```js

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;
*/


// ✅ Valid version (after initialization)
let a = 5;
console.log(a); // ✅ 5


//Real-World Example (Block Scope TDZ)


{
  // TDZ starts here
  // console.log(price); ❌ ReferenceError
  const price = 100; // TDZ ends here
  console.log(price); // ✅ 100
}

/* Summary

| Feature              | `var`                 | `let` / `const`               |
| -------------------- | --------------------- | ----------------------------- |
| Hoisted              | ✅ Yes                 | ✅ Yes                         |
| Initialized on hoist | ✅ `undefined`         | ❌ Not initialized             |
| Access before init   | ✅ Returns `undefined` | ❌ Throws ReferenceError (TDZ) |

*/


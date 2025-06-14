/* 
Type coercion is the process by which JavaScript automatically converts one data type to another when performing operations on mismatched types.

It happens:

Implicitly (done by JS behind the scenes)

Explicitly (you do it manually using functions like Number(), String())

| Type         | Example         | Result            |
| ------------ | --------------- | ----------------- |
| **Implicit** | `"5" + 2`       | `"52"` (string)   |
|              | `5 + true`      | `6` (number)      |
|              | `null + 1`      | `1` (number)      |
|              | `undefined + 1` | `NaN`             |
| **Explicit** | `Number("42")`  | `42` (number)     |
|              | `String(100)`   | `"100"` (string)  |
|              | `Boolean("")`   | `false` (boolean) |


| Expression          | Result             | Why?                                |
| ------------------- | ------------------ | ----------------------------------- |
| `[] + {}`           | "\[object Object]" | Array becomes `""`, object → string |
| `{} + []`           | 0                  | JS treats `{}` as a block           |
| `null == undefined` | true               | Loose equality allows coercion      |
| `0 == "0"`          | true               | `"0"` coerced to number             |
| `0 === "0"`         | false              | Strict equality, no coercion        |

*/
console.log("5" + 1);        // "51" (number → string)
console.log("5" - 1);        // 4    (string → number)
console.log(true + 1);       // 2    (true → 1)
console.log(false + "abc");  // "falseabc" (boolean → string)
console.log(null + 1);       // 1    (null → 0)
console.log(undefined + 1);  // NaN  (undefined → NaN)

console.log(Number("42"));    // 42
console.log(String(123));     // "123"
console.log(Boolean(0));      // false
console.log(Boolean("hi"));   // true


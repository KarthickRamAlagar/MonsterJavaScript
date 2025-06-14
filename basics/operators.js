/*✅ **1. Arithmetic Operators**

| Operator | Meaning        | Example  | Output |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `5 + 2`  | `7`    |
| `-`      | Subtraction    | `5 - 2`  | `3`    |
| `*`      | Multiplication | `5 * 2`  | `10`   |
| `/`      | Division       | `10 / 2` | `5`    |
| `%`      | Modulus        | `10 % 3` | `1`    |
| `**`     | Exponent       | `2 ** 3` | `8`    |



### ✅ **2. Assignment Operators**

| Operator | Meaning             | Example  | Equivalent To |
| -------- | ------------------- | -------- | ------------- |
| `=`      | Assignment          | `x = 10` |               |
| `+=`     | Add and assign      | `x += 5` | `x = x + 5`   |
| `-=`     | Subtract and assign | `x -= 2` | `x = x - 2`   |
| `*=`     | Multiply and assign | `x *= 3` | `x = x * 3`   |
| `/=`     | Divide and assign   | `x /= 2` | `x = x / 2`   |



### ✅ **3. Comparison Operators**

| Operator | Meaning               | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal (loose)         | `5 == '5'`  | `true`  |
| `===`    | Equal (strict)        | `5 === '5'` | `false` |
| `!=`     | Not equal (loose)     | `5 != '5'`  | `false` |
| `!==`    | Not equal (strict)    | `5 !== '5'` | `true`  |
| `>`      | Greater than          | `7 > 5`     | `true`  |
| `<`      | Less than             | `7 < 5`     | `false` |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `4 <= 5`    | `true`  |



### ✅ **4. Logical Operators**

| Operator | Meaning     | Example         | Result     |        |   |         |        |
| -------- | ----------- | --------------- | ---------- | ------ | - | ------- | ------ |
| `&&`     | Logical AND | `true && false` | `false`    |        |   |         |        |
| ||`      |             | \`              | Logical OR | \`true |   | false\` | `true` |
| `!`      | Logical NOT | `!true`         | `false`    |        |   |         |        |



### ✅ **5. Unary & Increment/Decrement**

| Operator | Example        | Result         |
| -------- | -------------- | -------------- |
| `++`     | `x++` or `++x` | Increases by 1 |
| `--`     | `x--` or `--x` | Decreases by 1 |
| `typeof` | `typeof "abc"` | `"string"`     |


## 🧠 2. **Operator Precedence** (Higher runs first)

Precedence defines **execution order** when multiple operators are used together.

---

### 🔢 **Top Precedence (High → Low)**

| Precedence | Operators                 | Example               | Explanation                       |        |   |         |            |
| ---------- | ------------------------- | --------------------- | --------------------------------- | ------ | - | ------- | ---------- |
| 1          | `()`, function call       | `(3 + 2) * 5`         | Grouped first                     |        |   |         |            |
| 2          | `++`, `--`, `typeof`, `!` | `!false` → `true`     | Unary operators                   |        |   |         |            |
| 3          | `**` (right-to-left)      | `2 ** 3 ** 2` → `512` | `3 ** 2 = 9`, then `2 ** 9 = 512` |        |   |         |            |
| 4          | `*`, `/`, `%`             | `6 * 2 / 3` → `4`     | Left to right                     |        |   |         |            |
| 5          | `+`, `-`                  | `5 + 3 - 2` → `6`     |                                   |        |   |         |            |
| 6          | `<`, `>`, `<=`, `>=`      | `5 > 3` → `true`      | Comparison                        |        |   |         |            |
| 7          | `==`, `===`, `!=`, `!==`  | `5 === '5'` → `false` | Equality                          |        |   |         |            |
| 8          | `&&`                      | `true && false`       | Logical AND                       |        |   |         |            |
| 9          | \`                        |                       | \`                                | \`true |   | false\` | Logical OR |
| 10         | `=`, `+=`, `-=`           | `x = 5 + 2` → `7`     | Assignment                        |        |   |         |            |

*/



let result = 5 + 3 * 2; 
// result = 5 + 6 → 11   (Multiplication has higher precedence than +)

let answer = (5 + 3) * 2;
// answer = 8 * 2 → 16   (Parentheses first)


/*🔁 Prefix vs Postfix — What Does It Mean?

These apply to `++` and `--` operators when you want to increase or decrease a value by 1.

✅ Prefix (`++x` / `--x`)

* **Increments/Decrements first**, **then returns** the updated value.
*/

let x = 5;
let y = ++x; // x becomes 6, y gets 6



/*✅ Postfix (`x++` / `x--`)

Returns the original value first**, **then increments/decrements**.
*/
let x1 = 5;
let y1 = x1++; // y gets 5, then x becomes 6






let a = 10;
console.log(++a); // 11 → prefix: a becomes 11 before logging

let b = 10;
console.log(b++); // 10 → postfix: logs 10, then b becomes 11
console.log(b);   // 11



# 📘 JavaScript Promise APIs – Explained with Success & Failure Cases

---

## 🔗 Promise.all()

> Waits for **all promises** to resolve.  
> If **any one fails**, the whole thing fails.

### ✅ Success Case:
```js
Promise.all([P1, P2, P3])
// All resolve after 3s, 1s, 2s
// Result → [val1, val2, val3]
```

### ❌ Failure Case:
```js
Promise.all([P1, P2, P3])
// P2 rejects after 1s
// Immediately throws an error with P2's rejection
```

📝 **Note:**  
Even if other promises are still running, once **one fails**, `Promise.all` stops and returns the error.

---

## 🟡 Promise.allSettled()

> Waits for **all promises** to finish (resolve or reject).  
> Returns status for each — no early exit.

### ✅ Success Case:
```js
Promise.allSettled([P1, P2, P3])
// All resolve → Result:
// [
//   { status: "fulfilled", value: val1 },
//   { status: "fulfilled", value: val2 },
//   { status: "fulfilled", value: val3 }
// ]
```

### ❌ Failure Case:
```js
Promise.allSettled([P1, P2, P3])
// P2 fails → Result:
// [
//   { status: "fulfilled", value: val1 },
//   { status: "rejected", reason: error2 },
//   { status: "fulfilled", value: val3 }
// ]
```

📝 **Use this when:** You want **results from all**, regardless of success or failure.

---

## ⚡ Promise.race()

> Returns the **first promise** that settles (either resolves or rejects).

### ✅ Success Case:
```js
Promise.race([P1, P2, P3])
// P2 resolves first → Result: val2
```

### ❌ Failure Case:
```js
Promise.race([P1, P2, P3])
// P2 rejects first → Error from P2 is thrown
```

📝 **Use this when:** You only care about **who finishes first**, success or fail.

---

## 🟢 Promise.any()

> Returns the **first resolved** promise. Ignores rejections.

### ✅ Success Case:
```js
Promise.any([P1, P2, P3])
// P2 resolves first → Result: val2
```

### ❌ Failure Case:
```js
Promise.any([P1, P2, P3])
// All fail → throws AggregateError:
// AggregateError: All promises were rejected
```

📝 **Use this when:** You only care about the **first successful** response.

---

## ✅ Summary Table

| Method                 | Waits For     | Returns                          | Fails When                              |
|------------------------|---------------|-----------------------------------|------------------------------------------|
| `Promise.all()`        | All           | Array of resolved values          | Any one fails                            |
| `Promise.allSettled()` | All           | Array of {status, value/reason}   | Never fails                              |
| `Promise.race()`       | First settled | First settled value (resolve/reject) | First one rejects                    |
| `Promise.any()`        | First success | First fulfilled value             | All promises fail (AggregateError)       |

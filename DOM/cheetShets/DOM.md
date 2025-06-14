# 📄 DOCUMENT OBJECT MODEL (DOM)

### When a page is loaded, the browser creates a **Document Object Model** of the page.

---

## 🟢 Console Methods: Pros & Properties

### 🌳 Visualize the DOM Structure

<p>
<strong>console.log(document)</strong> prints the DOM element in a way that lets you visually explore its structure (like an HTML tree) in the browser console. For <code>document</code>, it shows the rendered HTML.
</p>

```javascript
console.log(document)
```

---

### 🛠️ Explore All Properties & Methods

<p>
<strong>console.dir(document)</strong> prints the JavaScript object representation, showing all properties and methods of the <code>document</code> object (like a plain object with keys and values).
</p>

```javascript
console.dir(document)
```

---

## ℹ️ Which One Should You Use?

- If you want to see the **HTML structure**:
  ```javascript
  console.log(document)
  ```
  <span style="color:green"><strong>Reason:</strong> This prints the DOM element as an HTML tree, making it easy to visually explore the page structure.</span>

- If `console.log` does **not** show what you need, use:
  ```javascript
  console.dir(document)
  ```
  <span style="color:blue"><strong>Reason:</strong> This prints the object representation, showing all properties and methods of <code>document</code> as a JavaScript object.</span>

---

> ⚠️ **Note:**  
> Node.js runs JavaScript outside the browser, so it does **not** have access to browser-specific objects like `document`, `window`, or `alert`.  
> Use these commands in the **browser console** for DOM exploration!

---
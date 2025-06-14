# 📚 DOM Selectors in JavaScript
Learn how to select and access elements in the DOM using different selector methods.

---

## 1. `getElementsByTagName`

**Definition:**  
Selects all elements with the specified tag name and returns an HTMLCollection.

**Syntax:**
```javascript
document.getElementsByTagName("tagname")
```

**Example:**
```javascript
console.log(document.getElementsByTagName("h1"));
```
---

## 2. `getElementById`

**Definition:**  
Selects the first element with the specified ID.

**Syntax:**
```javascript
document.getElementById("id")
```

**Example:**
```javascript
console.log(document.getElementById("main").innerText);
```
---

## 3. `getElementsByClassName`

**Definition:**  
Selects all elements with the specified class name and returns an HTMLCollection.

**Syntax:**
```javascript
document.getElementsByClassName("classname")
```

**Example:**
```javascript
console.log(document.getElementsByClassName("cls"));
```
---

## 4. `querySelector`

**Definition:**  
Returns the first element that matches a specified CSS selector.

**Syntax:**
```javascript
document.querySelector("selector")
```

**Examples:**
```javascript
console.log(document.querySelector("h1"));      // By tag
console.log(document.querySelector(".cls"));    // By class
console.log(document.querySelector("#id-1"));   // By ID
```
*Returns the first match only.*

---

## 5. `querySelectorAll`

**Definition:**  
Returns all elements that match a specified CSS selector as a NodeList.

**Syntax:**
```javascript
document.querySelectorAll("selector")
```

**Example:**
```javascript
console.log(document.querySelectorAll(".cls")); // All elements with class "cls"
```
*Returns all matches as a NodeList.*

---

## 6. Storing Selected Elements in Variables

**Definition:**  
You can store the result of a selector in a variable for later use.

**Example:**
```javascript
const li = document.querySelectorAll("li");
console.log(li);
```
---
# 📄 Accessing the Text in DOM Elements

| Property      | Description                                         | Formats Text | Includes Nested Tags | Example Return                |
|---------------|-----------------------------------------------------|:------------:|:-------------------:|-------------------------------|
| `innerText`   | Returns the **visible** text (ignores hidden text). Formats the text as rendered (e.g., respects line breaks). |   ✅ Yes    |         ❌ No        | `"Hello<br>World"` → `Hello`<br>`World` |
| `textContent` | Returns **all** text content, including hidden text. Does **not** format the text. |   ❌ No     |         ❌ No        | `"Hello<br>World"` → `HelloWorld`      |
| `innerHTML`   | Returns the HTML markup (text + nested tags).       |   ❌ No     |         ✅ Yes       | `"Hello<br>World"` → `Hello<br>World`  |

---

**Notes:**
- **`innerText`**: Returns only the visible, formatted text (ignores hidden or script/style text).
- **`textContent`**: Returns all text, unformatted, including hidden text.
- **`innerHTML`**: Returns the HTML string, including tags.

---
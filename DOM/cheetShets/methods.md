

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
# 📚 DOM ClassList Methods

---
Learn how to work with classes on DOM elements using the `classList` property and its methods.

---

## 1. `classList`

**Definition:**  
The `classList` property returns a live DOMTokenList collection of the class attributes of the element.

**Syntax:**
```javascript
element.classList
```

**Example:**
```javascript
const h1 = document.querySelector("h1");
console.log(h1.classList);
```
---

## 2. `classList.add()`

**Definition:**  
Adds the specified class value to the element.

**Syntax:**
```javascript
element.classList.add("className")
```

**Example:**
```javascript
h1.classList.add("styles");
```
---

## 3. `classList.remove()`

**Definition:**  
Removes the specified class value from the element.

**Syntax:**
```javascript
element.classList.remove("className")
```

**Example:**
```javascript
h1.classList.remove("styles");
```
---

## 4. `classList.toggle()`

**Definition:**  
Toggles the existence of a class value; adds it if not present, removes it if present.

**Syntax:**
```javascript
element.classList.toggle("className")
```

**Example:**
```javascript
h1.classList.toggle("apple");
```
---

## Full Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM classList Example</title>
</head>
<body>
    <h1 class="apple">Hello World</h1>
    <script>
        // classList
        const h1 = document.querySelector("h1");
        console.log(h1.classList);
        // Adding classList
        h1.classList.add("styles");
        // Remove the classList
        h1.classList.remove("styles");
        // Toggle
        h1.classList.toggle("apple");
    </script>
</body>
</html>
```
# 🧩 DOM Traversal Methods: Parent, Children, and Siblings

---

## 1. Getting the Parent Element

**Method:**  
- `.parentElement`

**Example:**
```javascript
const child = document.querySelector("li");
const parent = child.parentElement;
console.log(parent); // The <ul> element
```
---

## 2. Getting All Children Elements

**Method:**  
- `.children` (returns an HTMLCollection of child elements)

**Example:**
```javascript
const parent = document.querySelector("ul");
const children = parent.children;
console.log(children); // HTMLCollection of <li> elements

// To loop through children:
Array.from(children).forEach((child, index) => {
    console.log(`Child ${index}:`, child);
});
```
---

## 3. Getting Sibling Elements

**Methods:**  
- `.nextElementSibling` (next sibling element)
- `.previousElementSibling` (previous sibling element)

**Example:**
```javascript
const firstLi = document.querySelector("li");

// Next sibling
const nextSibling = firstLi.nextElementSibling;
console.log(nextSibling);

// Previous sibling (if not the first child)
const prevSibling = firstLi.previousElementSibling;
console.log(prevSibling);

// Loop through all next siblings
let sibling = firstLi.nextElementSibling;
let index = 0;
while (sibling) {
    console.log(`Sibling ${index}:`, sibling);
    sibling = sibling.nextElementSibling;
    index++;
}
```
---

**Summary Table**

| Purpose         | Property/Method           | Description                                 |
|-----------------|--------------------------|---------------------------------------------|
| Get parent      | `.parentElement`         | Returns the parent element                  |
| Get children    | `.children`              | Returns all child elements (HTMLCollection) |
| Next sibling    | `.nextElementSibling`    | Returns the next sibling element            |
| Previous sibling| `.previousElementSibling`| Returns the previous sibling element        |

---
# 🏗️ DOM Element Creation & Manipulation Methods

---

## 1. `createElement()`

**Definition:**  
Creates a new element node.

**Syntax:**
```javascript
document.createElement('tagName')
```

**Example:**
```javascript
const h1 = document.createElement('h1');
h1.textContent = 'hello World';
console.log(h1); // <h1>hello World</h1>
```
---

## 2. `appendChild()`

**Definition:**  
Appends a node as the last child of a parent node.

**Syntax:**
```javascript
parent.appendChild(child)
```

**Example:**
```javascript
document.body.appendChild(h1);
```
---

## 3. `append()`

**Definition:**  
Appends one or more nodes or strings as children of a parent node.

**Syntax:**
```javascript
parent.append(node1, node2, ...);
```

**Example:**
```javascript
const section = document.querySelector('section');
const i11 = document.createElement('i');
const H4 = document.createElement('h4');
i11.innerText = "i'm italics";
H4.textContent = 'karthickRamAlagar';
section.append(i11, H4);
```
---

## 4. `prepend()`

**Definition:**  
Inserts one or more nodes or strings as the first children of a parent node.

**Syntax:**
```javascript
parent.prepend(node1, node2, ...);
```

**Example:**
```javascript
const sections = document.querySelector('section');
const i1 = document.createElement('i');
const g4 = document.createElement('h4');
i1.innerText = "i'm italics";
g4.textContent = 'karthickRamAlagar';
sections.prepend(i1, g4);
```
---

## 5. `insertBefore()`

**Definition:**  
Inserts a node before a reference node as a child of a specified parent node.

**Syntax:**
```javascript
parent.insertBefore(newNode, referenceNode);
```

**Example:**
```javascript
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = "i'm li tag";
ul.appendChild(newLi); // Add to end first
const firstLi = document.querySelector('li');
ul.insertBefore(newLi, firstLi); // Move to first position
```
---

## 6. `insertAdjacentElement()`

**Definition:**  
Inserts a node at a specified position relative to the element.

**Syntax:**
```javascript
element.insertAdjacentElement(position, node);
```
- Positions: `'beforebegin'`, `'afterbegin'`, `'beforeend'`, `'afterend'`

**Example:**
```javascript
const firstP = document.querySelector('p');
const i = document.createElement('i');
i.innerText = "i'm italics";
firstP.insertAdjacentElement('beforebegin', i);
```
---

## 7. `removeChild()`

**Definition:**  
Removes a child node from the parent node.

**Syntax:**
```javascript
parent.removeChild(child);
```

**Example:**
```javascript
const newList = document.querySelector('.new-list');
const third = document.querySelector('.third');
newList.removeChild(third);
```
---

## 8. `remove()`

**Definition:**  
Removes the element from the DOM.

**Syntax:**
```javascript
element.remove();
```

**Example:**
```javascript
newList.remove();
```
---
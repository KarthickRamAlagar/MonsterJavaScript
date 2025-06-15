# 🚦 JavaScript Events: Most Important First (with Examples & Explanations)

---

## 1. Click Event (`click`)

**Explanation:**  
Fires when the user clicks on an element (like a button or link).

**Example:**
```html
<button id="btn">Click Me</button>
<script>
document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});
</script>
```
---

## 2. Submit Event (`submit`)

**Explanation:**  
Fires when a form is submitted.

**Example:**
```html
<form id="myForm">
  <input type="text" required>
  <button type="submit">Submit</button>
</form>
<script>
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted!');
});
</script>
```
---

## 3. Input Event (`input`)

**Explanation:**  
Fires whenever the value of an input or textarea changes (as you type).

**Example:**
```html
<input id="myInput" type="text">
<script>
document.getElementById('myInput').addEventListener('input', function(e) {
  console.log('Current value:', e.target.value);
});
</script>
```
---

## 4. Change Event (`change`)

**Explanation:**  
Fires when the value of an input, select, or textarea changes and loses focus.

**Example:**
```html
<select id="mySelect">
  <option value="a">A</option>
  <option value="b">B</option>
</select>
<script>
document.getElementById('mySelect').addEventListener('change', function(e) {
  alert('Selected: ' + e.target.value);
});
</script>
```
---

## 5. Keydown Event (`keydown`)

**Explanation:**  
Fires when a key is pressed down.

**Example:**
```html
<input id="keyInput" type="text">
<script>
document.getElementById('keyInput').addEventListener('keydown', function(e) {
  console.log('Key pressed:', e.key);
});
</script>
```
---

## 6. Load Event (`load`)

**Explanation:**  
Fires when the whole page (including images and resources) is fully loaded.

**Example:**
```html
<script>
window.addEventListener('load', function() {
  console.log('Page fully loaded!');
});
</script>
```
---

## 7. DOMContentLoaded Event (`DOMContentLoaded`)

**Explanation:**  
Fires when the HTML is fully loaded and parsed, before images and stylesheets are loaded.

**Example:**
```html
<script>
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready!');
});
</script>
```
---

## 8. Resize Event (`resize`)

**Explanation:**  
Fires when the window is resized.

**Example:**
```html
<script>
window.addEventListener('resize', function() {
  console.log('Window resized!');
});
</script>
```
---

## 9. Scroll Event (`scroll`)

**Explanation:**  
Fires when the user scrolls the page or an element.

**Example:**
```html
<div style="height:2000px"></div>
<script>
window.addEventListener('scroll', function() {
  console.log('Page is scrolling!');
});
</script>
```
---

## 10. Mouseover Event (`mouseover`)

**Explanation:**  
Fires when the mouse pointer enters an element.

**Example:**
```html
<div id="hoverDiv" style="width:100px;height:100px;background:lightgray;">Hover me</div>
<script>
document.getElementById('hoverDiv').addEventListener('mouseover', function() {
  this.style.background = 'yellow';
});
</script>
```
---

## 11. Dblclick Event (`dblclick`)

**Explanation:**  
Fires when the user double-clicks an element.

**Example:**
```html
<button id="dblBtn">Double Click Me</button>
<script>
document.getElementById('dblBtn').addEventListener('dblclick', function() {
  alert('Button double-clicked!');
});
</script>
```
---

## 12. Focus Event (`focus`)

**Explanation:**  
Fires when an element (like an input) receives focus.

**Example:**
```html
<input id="focusInput" type="text">
<script>
document.getElementById('focusInput').addEventListener('focus', function() {
  this.style.background = 'lightyellow';
});
</script>
```
---

## 13. Blur Event (`blur`)

**Explanation:**  
Fires when an element (like an input) loses focus.

**Example:**
```html
<input id="blurInput" type="text">
<script>
document.getElementById('blurInput').addEventListener('blur', function() {
  this.style.background = '';
});
</script>
```
---

## 14. Mouseout Event (`mouseout`)

**Explanation:**  
Fires when the mouse pointer leaves an element.

**Example:**
```html
<div id="outDiv" style="width:100px;height:100px;background:lightgray;">Move out</div>
<script>
document.getElementById('outDiv').addEventListener('mouseout', function() {
  this.style.background = 'lightgray';
});
</script>
```
---

## 15. Keyup Event (`keyup`)

**Explanation:**  
Fires when a key is released.

**Example:**
```html
<input id="keyupInput" type="text">
<script>
document.getElementById('keyupInput').addEventListener('keyup', function(e) {
  console.log('Key released:', e.key);
});
</script>
```
---

## 16. Touch Events (`touchstart`, `touchmove`, `touchend`)

**Explanation:**  
Fires when a finger touches, moves on, or leaves a touch screen element (for mobile).

**Example:**
```html
<div id="touchDiv" style="width:100px;height:100px;background:lightblue;">Touch me</div>
<script>
document.getElementById('touchDiv').addEventListener('touchstart', function() {
  this.style.background = 'orange';
});
document.getElementById('touchDiv').addEventListener('touchend', function() {
  this.style.background = 'lightblue';
});
</script>
```
---

## 17. Clipboard Events (`copy`, `cut`, `paste`)

**Explanation:**  
Fires when the user copies, cuts, or pastes content.

**Example:**
```html
<input id="clipInput" type="text">
<script>
document.getElementById('clipInput').addEventListener('copy', function() {
  alert('Copied!');
});
document.getElementById('clipInput').addEventListener('paste', function() {
  alert('Pasted!');
});
</script>
```
---

## 18. Drag and Drop Events (`dragstart`, `dragover`, `drop`)

**Explanation:**  
Fires during drag-and-drop operations.

**Example:**
```html
<div id="drag" draggable="true" style="width:50px;height:50px;background:red;"></div>
<div id="drop" style="width:100px;height:100px;background:lightgray;margin-top:10px;"></div>
<script>
document.getElementById('drag').addEventListener('dragstart', function(e) {
  e.dataTransfer.setData('text', 'dragged');
});
document.getElementById('drop').addEventListener('dragover', function(e) {
  e.preventDefault();
});
document.getElementById('drop').addEventListener('drop', function(e) {
  e.preventDefault();
  this.style.background = 'green';
});
</script>
```
---

# 📋 Common JavaScript Events: Quick Reference Table

| Event Name         | Typical Element(s)      | When It Fires                        | Example Usage                        |
|--------------------|------------------------|--------------------------------------|--------------------------------------|
| `click`            | Button, link, any      | User clicks the element              | Button clicks, toggles               |
| `dblclick`         | Button, div, any       | User double-clicks the element       | Special actions, editing             |
| `submit`           | Form                   | Form is submitted                    | Form validation, AJAX submit         |
| `input`            | Input, textarea        | User types or changes input          | Live search, validation              |
| `change`           | Input, select, textarea| Value changes and loses focus        | Dropdowns, checkboxes                |
| `focus`            | Input, textarea        | Element receives focus               | Highlighting, tooltips               |
| `blur`             | Input, textarea        | Element loses focus                  | Validation, formatting               |
| `keydown`          | Input, textarea, doc   | Key is pressed down                  | Shortcuts, navigation                |
| `keyup`            | Input, textarea, doc   | Key is released                      | Search, validation                   |
| `keypress`         | Input, textarea, doc   | Key is pressed (deprecated)          | (Legacy)                             |
| `mouseover`        | Any                    | Mouse enters element                 | Tooltips, menus                      |
| `mouseout`         | Any                    | Mouse leaves element                 | Hide tooltips, menus                 |
| `mouseenter`       | Any                    | Mouse enters element (no bubbling)   | Menus, highlights                    |
| `mouseleave`       | Any                    | Mouse leaves element (no bubbling)   | Menus, highlights                    |
| `mousedown`        | Any                    | Mouse button is pressed              | Drag, custom controls                |
| `mouseup`          | Any                    | Mouse button is released             | Drag, custom controls                |
| `load`             | Window, img, script    | Page or resource finishes loading    | Initialization, image handling       |
| `DOMContentLoaded` | Document               | DOM is fully loaded                  | Safe DOM manipulation                |
| `resize`           | Window                 | Window is resized                    | Responsive layouts                   |
| `scroll`           | Window, div            | Element is scrolled                  | Infinite scroll, sticky nav          |
| `touchstart`       | Mobile elements        | Finger touches screen                | Mobile gestures                      |
| `touchmove`        | Mobile elements        | Finger moves on screen               | Swiping                              |
| `touchend`         | Mobile elements        | Finger leaves screen                 | Swiping                              |
| `copy`             | Input, textarea, doc   | User copies content                  | Custom clipboard                     |
| `cut`              | Input, textarea, doc   | User cuts content                    | Custom clipboard                     |
| `paste`            | Input, textarea, doc   | User pastes content                  | Custom clipboard                     |
| `dragstart`        | Draggable elements     | Dragging starts                      | Drag and drop                        |
| `dragover`         | Drop targets           | Dragged item is over target          | Drag and drop                        |
| `drop`             | Drop targets           | Item is dropped                      | Drag and drop                        |

---
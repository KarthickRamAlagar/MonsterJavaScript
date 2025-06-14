//Dates and Time

// Creation 
let now =new Date();
console.log('today  is :', now);

// other ways to create 
let d1 = new Date("2025-06-12");            // From string
let d2 = new Date(2025, 5, 12);             // Year, month(0-based), day
let d3 = new Date(2025, 5, 12, 14, 30, 0);  // + time (hr, min, sec)
let d4 = new Date(0);                       // Epoch time (Jan 1, 1970)

//Most Commonly Used Date Methods
// Get Components (Getters)

console.log('the year' , now.getFullYear()); // Get full year (4 digits)
console.log('the month', now.getMonth());    // Get month (0-11)
console.log('the date', now.getDate());     // Get day of the month (1-31)
console.log('the day', now.getDay());      // Get day of the week (0-6, 0=Sun)
console.log('the hours', now.getHours());   // Get hours (0-23)
console.log('the minutes', now.getMinutes()); // Get minutes (0-59)
console.log('the seconds', now.getSeconds()); // Get seconds (0-59)
console.log('the milliseconds', now.getMilliseconds()); // Get milliseconds (0-999)

// Get Time
console.log('the time', now.getTime()); // Get time in milliseconds since epoch
console.log('the ISO string', now.toISOString()); // Get ISO string
console.log('the UTC string', now.toUTCString()); // Get UTC string

// Get Locale String
console.log('the locale string', now.toLocaleString()); // Get locale string
console.log('the locale date string', now.toLocaleDateString()); // Get locale date string
console.log('the locale time string', now.toLocaleTimeString()); // Get locale time string


// Get UTC Components
console.log('the UTC year', now.getUTCFullYear()); // Get UTC full year
console.log('the UTC month', now.getUTCMonth()); // Get UTC month (0-11)
console.log('the UTC date', now.getUTCDate()); // Get UTC day of the month (1-31)
console.log('the UTC day', now.getUTCDay()); // Get UTC day of the week (0-6, 0=Sun)
console.log('the UTC hours', now.getUTCHours()); // Get UTC hours (0-23)
console.log('the UTC minutes', now.getUTCMinutes()); // Get UTC minutes (0-59)
console.log('the UTC seconds', now.getUTCSeconds()); // Get UTC seconds (0-59)
console.log('the UTC milliseconds', now.getUTCMilliseconds()); // Get UTC milliseconds (0-999)


// Set Components (Setters)
console.log('set the year', now.setFullYear(2024)); // Set full year (4 digits)
console.log('set the month', now.setMonth(11)); // Set month (0-11)
console.log('set the date', now.setDate(25)); // Set day of the month (1-31)
console.log('set the hours', now.setHours(10)); // Set hours (0-23)
console.log('set the minutes', now.setMinutes(30)); // Set minutes (0-59)
console.log('set the seconds', now.setSeconds(15)); // Set seconds (0-59)
console.log('set the milliseconds', now.setMilliseconds(500)); // Set milliseconds (0-999)


// Set Time
console.log('set the time', now.setTime(1700000000000)); // Set time in milliseconds since epoch
console.log('set the ISO string', now.toISOString()); // Set ISO string
console.log('set the UTC string', now.toUTCString()); // Set UTC string

// Set Locale String
// Note: Locale strings cannot be set directly, they are derived from the date object.
// Set UTC Components
console.log('set the UTC year', now.setUTCFullYear(2024)); // Set UTC full year
console.log('set the UTC month', now.setUTCMonth(11)); // Set UTC month (0-11)
console.log('set the UTC date', now.setUTCDate(25)); // Set UTC day of the month (1-31)
console.log('set the UTC day', now.setUTCDay(3)); // Set UTC day of the week (0-6, 0=Sun)
console.log('set the UTC hours', now.setUTCHours(10)); // Set UTC hours (0-23)
console.log('set the UTC minutes', now.setUTCMinutes(30)); // Set UTC minutes (0-59)
console.log('set the UTC seconds', now.setUTCSeconds(15)); // Set UTC seconds (0-59)
console.log('set the UTC milliseconds', now.setUTCMilliseconds(500)); // Set UTC milliseconds (0-999)

//Formatting Dates (Common Usage)
//toDateString()
let date = new Date();
console.log(date.toDateString()); // "Thu Jun 12 2025"

//toTimeString()
console.log(date.toTimeString()); // "14:30:20 GMT+0530 (India Standard Time)"

//toISOString()
console.log(date.toISOString()); // "2025-06-12T09:00:00.000Z"

//toLocaleDateString()
console.log(date.toLocaleDateString()); // "12/6/2025" (India)

//toLocaleTimeString()
console.log(date.toLocaleTimeString()); // "2:30:20 PM"

//Get Today's Date in YYYY-MM-DD format
let today = new Date();
let formatted = today.toISOString().split("T")[0];
console.log(formatted); // "2025-06-12"


/*
Absolutely! Let's break this line by line in **simple, layman terms**:

---

### ✅ Code:

```js
let today = new Date();
let formatted = today.toISOString().split("T")[0];
console.log(formatted); // "2025-06-12"
```

---

### 🔹 Step-by-step Explanation:
#### 1. `let today = new Date();`
* Creates a new **Date object** with the **current date and time**.
* Example result:
  today = new Date(); // → Thu Jun 12 2025 14:45:10 GMT+0530 (India Standard Time)
#### 2. `today.toISOString()`
* Converts the full date/time into a **standard ISO format** string.
* ISO format looks like this:
  "2025-06-12T09:15:10.123Z"
* This format is commonly used in APIs, databases, etc.
#### 3. `.split("T")`
* This splits the ISO string wherever the **letter `T`** appears.
* Example:
  "2025-06-12T09:15:10.123Z".split("T");
  // → ["2025-06-12", "09:15:10.123Z"]
#### 4. `[0]`
* Grabs the **first part** of the split array, which is just the date.
  ["2025-06-12", "09:15:10.123Z"][0]
  // → "2025-06-12"
#   ### 5. Final Result:
console.log(formatted); // "2025-06-12"
*/
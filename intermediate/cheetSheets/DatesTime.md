# 📅 JavaScript Date & Time Methods Cheatsheet

---

## 1. Creating Dates

```bash
let now = new Date();
console.log('Today is:', now);
```

Create different kinds of date objects.

```bash
let d1 = new Date("2025-06-12"); // From string
let d2 = new Date(2025, 5, 12); // Year, month (0-based), day
let d3 = new Date(2025, 5, 12, 14, 30, 0); // Add time
let d4 = new Date(0); // Epoch time (Jan 1, 1970)
```

---

## 2. Getting Date Components

Extract specific parts from a Date object.

```bash
let now = new Date();
console.log(now.getFullYear());       // 2025
console.log(now.getMonth());          // 0-11
console.log(now.getDate());           // 1-31
console.log(now.getDay());            // 0=Sun
console.log(now.getHours());          // 0-23
console.log(now.getMinutes());        // 0-59
console.log(now.getSeconds());        // 0-59
console.log(now.getMilliseconds());   // 0-999
```

---

## 3. Getting Time Information

```bash
console.log(now.getTime());        // ms since 1970-01-01
console.log(now.toISOString());    // ISO format string
console.log(now.toUTCString());    // UTC format string
```

---

## 4. Getting Locale Info

```bash
console.log(now.toLocaleString());       // Full locale string
console.log(now.toLocaleDateString());   // Locale date
console.log(now.toLocaleTimeString());   // Locale time
```

---

## 5. Getting UTC Components

```bash
console.log(now.getUTCFullYear());       // 2025
console.log(now.getUTCMonth());          // 0-11
console.log(now.getUTCDate());           // 1-31
console.log(now.getUTCDay());            // 0-6
console.log(now.getUTCHours());          // 0-23
console.log(now.getUTCMinutes());        // 0-59
console.log(now.getUTCSeconds());        // 0-59
console.log(now.getUTCMilliseconds());   // 0-999
```

---

## 6. Setting Date Components

Update values in a Date object.

```bash
now.setFullYear(2024);
now.setMonth(11);        // December
now.setDate(25);
now.setHours(10);
now.setMinutes(30);
now.setSeconds(15);
now.setMilliseconds(500);
```

---

## 7. Setting Time

```bash
now.setTime(1700000000000); // Sets to epoch ms value
console.log(now.toISOString());
console.log(now.toUTCString());
```

---

## 8. Setting UTC Components

```bash
now.setUTCFullYear(2024);
now.setUTCMonth(11);
now.setUTCDate(25);
now.setUTCHours(10);
now.setUTCMinutes(30);
now.setUTCSeconds(15);
now.setUTCMilliseconds(500);
```

---

## 9. Formatting Dates

Convert Date to readable strings.

```bash
let date = new Date();
console.log(date.toDateString());       // 'Thu Jun 12 2025'
console.log(date.toTimeString());       // '14:30:20 GMT+0530'
console.log(date.toISOString());        // '2025-06-12T09:00:00.000Z'
console.log(date.toLocaleDateString()); // '12/6/2025'
console.log(date.toLocaleTimeString()); // '2:30:20 PM'
```

---

## 10. Format Date YYYY-MM-DD

```bash
let today = new Date();
let formatted = today.toISOString().split("T")[0];
console.log(formatted); // '2025-06-12'
```

---

// JSON - JavaScript Onbject Notation
/* JSON Rules Recap (Layman Version):
Keys and strings must be in double quotes.
No trailing commas after the last property.
Valid types: string, number, boolean, object, array, null.
JSON is a data format, not code — it's used for sending/storing structured data.
*/

// Example JSON Object

const person = {
  name: "RamAlagar",
  age: 20,
  skills: ["JavaScript", "Python", "C++"],
  education: {
    degree: "Bachelor of Science",
    major: "Computer Science",
    university: "XYZ University",
  },
  experience: [
    {
      company: "Tech Solutions",
      role: "Software Engineer",
      duration: "2 years",
    },
    {
      company: "Web Innovations",
      role: "Frontend Developer",
      duration: "1 year",
    },
  ],
};


//Methods in JSON
//stringify -> converts a JavaScript object value into a JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);

//parse -> converts a JSON string into a JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
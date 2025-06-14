//Refactor the below code
setTimeout(function () {
  console.log("hello");
  setTimeout(function () {
    console.log("hey");
    setTimeout(function () {
      console.log("Namaste");
      setTimeout(function () {
        console.log("hi");
        setTimeout(function () {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

// Refactored using arrow functions and promises
setTimeout(() => {
  console.log("hello");
  setTimeout(() => {
    console.log("hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("hi");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

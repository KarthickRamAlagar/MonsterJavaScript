// two ways to store the data in the browser itself
// Session Storage
// Local Storage

// session storage starts when the user gets into site and ends when the user close the tab and the data will lost
// better than cookies(only store 4k bytes of data) while in session storage(5mb of datas are stored)
//  in the session storage , there is no api call

// local storage Starts when the user in the site and not deleted even though the user close the tabs or shutdown the machine and revisit the site
// the datas will be there
// the memory of cookies is depends on
// 1. what type device using
// 2. what type of browser using

// the storage APIS  , they foloow the same origin policy due  to security resson
//same origin meand
//  1. protocol
//  2 host or domain
//  3. Port

// developer console -> Application tab -> storage -> Local Storage

// local storage store in window object ("key","value") pair 

window.localStorage.setItem("Heelo","Worls");
localStorage.getItem("hello")  // wants to pass key as an argument

localStorage.removeItem("hello") // wants to pass key as an argument

localStorage.clear() // clear all the local storage items


// setting object inside the local storage 

const user = {
    name :"RamAlagar"
};

localStorage.setItem("user-copy",JSON.stringify(user));
JSON.parse(localStorage.getItem("user-copy"))


// another way creating an own functions like below

function setLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
const user1 = {
    name :"RamAlagar"
};
setLocalStorage(user1);
// To retrieve:
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);

/*
JSON.stringify converts a JavaScript object or value into a JSON string.
JSON.parse converts a JSON string back into a JavaScript object.
*/
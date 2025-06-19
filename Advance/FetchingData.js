// we fetch the dat by using the fetch  function , which was  given by the browser to us

// how fetch works internally
// The fetch() is a promise Object
// after it gets data from the api , it will give response body
// to  convert that response body into readable form
// we will use .json()  -> which is the promise object again
// after that .json() is resolved
// it will give the  data in readble form

// example
const API = 'https://api.github.com/users/KarthickRamAlagar'
async function getApiResponse () {
  try {
    const Data = await fetch(API)
    const result = await Data.json()
    console.log(result.name)
  } catch (err) {
    console.log(err)
  }
}

getApiResponse()

// for error handling in the async/await
// there is no .catch()
// instead of use try {} , catch {} block

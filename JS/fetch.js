// The Fetch API = interface for requests and responses
// type: global, async
// Base: Promises, + CORS, + extensions
// returns: a promise(!!) that resolves with a Response object.
// older methods: XMLHttpRequest

// Base case
async function fetchData() {
  const url = "https://some-example-url.com"
  fetch(url)
    .then(response => {
      // handle the response
    })
    .catch(error => {
      // handle the error
    })
}

// await case
async function logusers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}

logusers()

// local documents
async function logLocalDoc() {
  fetch('/README.txt')
    .then(response => response.text())
    .then(data => console.log(data))
}

// local documents
async function fetchText() {
  let response = await fetch('/README.txt')
  let data = await response.text()
  console.log(data)
}

// local documents (not there)
async function fetchTextNone() {
  let response = await fetch('/i-do-not-exist.txt')
  console.log(response.status) // 400
}




// Error Handling
async function getusers() {
  let url = 'https://jsonplaceholder.typicode.com/users'
  try {
    let res = await fetch(url)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

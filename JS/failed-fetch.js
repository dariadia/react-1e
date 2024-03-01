async function logUsers() {
    const response = fetch("https://jsonplaceholder.typicode.com/users") // response === undefined 
    const users = await response.json() // returns TypeError
    console.log(users)
}

// server error
async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    try {
      let res = await fetch(url)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  

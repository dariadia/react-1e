async function logUsers() {
    const response = fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users)
}
// returns TypeError


async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    try {
      let res = await fetch(url)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  

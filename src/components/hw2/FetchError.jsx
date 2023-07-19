import { useEffect } from 'react'
import { useState } from 'react'

// // как из fetch получить данные? 
// // после нужно отсортировать массив объектов (data) по полю email (в алфавитном порядке)
// // после чего вывести в консоль

// function getUsers() {
//     let result
  
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//       result = response
//     });
  
//     return result
//   }
  
//   console.log(getUsers()); // undefined
  
  

const FetchError = () => {
    const [result, setResult] = useState([])

    function getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setResult(data))
      }

    useEffect(()=>{
        getUsers()
    },[])
      
    if (result){
        result.sort(
            (e1, e2) => (e1.email > e2.email) ? 1 : -1
            )
            
        console.log('FetchError -- sortedResult: ', result)
    } 

}

export default FetchError


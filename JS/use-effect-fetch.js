import React, { useEffect, useState } from "react"

export const UsersBox = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>
        {user.username}
      </li>)}
    </ul>
  );
}

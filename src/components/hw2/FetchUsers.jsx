import React, { useEffect, useState } from 'react'

// Получить юзеров - https://api.github.com/users
// Изменить через JS, так, что:
// для каждого юзера делается второй запрос к "repos_url", который содержится в ответе
// Пример ответа массив из объектов вида


// "login": "mojombo",
// "id": 1,
// "node_id": "MDQ6VXNlcjE=",
// "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
// "gravatar_id": "",
// "url": "https://api.github.com/users/mojombo",
// "html_url": "https://github.com/mojombo",
// "followers_url": "https://api.github.com/users/mojombo/followers",
// "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
// "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
// "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
// "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
// "organizations_url": "https://api.github.com/users/mojombo/orgs",
// "repos_url": "https://api.github.com/users/mojombo/repos",
// "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
// "received_events_url": "https://api.github.com/users/mojombo/received_events",
// "type": "User",
// "site_admin": false
// },


// вывести результат в консоль, где:
// логин юзера: repositoriesName.join(", ")


const FetchUsers = () => {
    const [result, setResult] = useState([])

    function getUsers() {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => setResult(data))
      }

    useEffect(()=>{
        getUsers()
    },[])
      
    if (result){
                  
        console.log('FetchUsers -- result: ')

        result.map(user => console.log('Login: ', user.login, 'Repository: ', user.repos_url))
    } 

}

export default FetchUsers

// как из fetch получить данные? 
// после нужно отсортировать массив объектов (data) по полю email (в алфавитном порядке)
// после чего вывести в консоль

function getUsers() {
  let result

  fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    result = response
  });

  return result
}

console.log(getUsers()); // undefined


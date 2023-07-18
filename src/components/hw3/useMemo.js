// В приложении есть кнопка, она переключает тему
// Первый элемент списка (искусвенно) рассчитывается очень долго
// его можно ввести в поле input
// отобразить лист TODO так, чтобы рассчет первого элемента не замедлял рендер приложения

const TODOS = [
    {id: 1, desc: 'buy groceries'},
    {id: 2, desc: 'cook dinner'},
    {id: 3, desc: 'do Irish homework'},
    {id: 4, desc: 'call grandma'},
    {id: 5, desc: 'visit neighbour'},
    {id: 6, desc: 'complain to the police about the neighbour'},
    {id: 7, desc: 'write some code'},
    {id: 8, desc: 'clean your room'},
]

function slowFunction(todo) {
    for (let i = 0; i <= 1000000000; i++) { }
    return todo
}

export const Memoed = () => {
    const [firstTodo, setFirstTodo] = useState('groceries')
    const [dark, setDark] = useState(false)
    const firstListTodo = slowFunction(firstTodo)
    const themeStyles = {
        backgroundColor: dark ? 'yellow' : 'green', color: dark ? 'black' : 'white'
    }
    return (
        <>
            <input value={firstTodo} onChange={e => setFirstTodo(e.target.value)} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <ul style={themeStyles}>
                <li>{firstListTodo}</li>
                {TODOS.map(todo => <li>something</li>)}
            </ul>
        </>
    )
}

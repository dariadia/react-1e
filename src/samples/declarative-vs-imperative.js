// императивный
function rescheduleTodos (incoming) {
    let todos = []
    for (let i = 0; i < incoming.length; i++){
      const oldDate = new Date(incoming[i].time);
      const newDate = oldDate.setDate(oldDate.getDate() + 2);
      todos.push(newDate)
    }
    return todos
}

// декларативный
function rescheduleTodos (incoming) {
    return incoming.map((item) => {
        const oldDate = new Date(item.time)
        return oldDate.setDate(oldDate.getDate() + 2);
    })
}
// rescheduleTodos([{time: Date.now(), name: "event 1"}, {time: "2023-09-01", name: "event 2"}])

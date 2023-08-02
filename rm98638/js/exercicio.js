const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')
const tasks = []
const removeItself = (task) => {
    tasks.splice(
        tasks.findIndex((obj) => obj.id == task.id),
        1
    )
    console.log(task)
    list.removeChild(task)
    populateList(tasks, list)
}
const populateList = (tasksArray, tasksElement) => {
    list.innerHTML = ''
    tasksArray.forEach((task) => {
        const taskElement = document.createElement('li')
        taskElement.id = task.id
        taskElement.innerText = task.value
        taskElement.addEventListener('dblclick', (e) => removeItself(e.target))
        tasksElement.appendChild(taskElement)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = { id: Date.now(), value: task }
    tasks.push(task)
    populateList(tasks, list)
})

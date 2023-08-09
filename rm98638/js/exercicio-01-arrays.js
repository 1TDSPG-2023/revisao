const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')
const tasks = []
const removeItself = (task) => {
    tasks.splice(
        tasks.findIndex((obj) => obj.id == task.id),
        1
    )
    list.removeChild(task)
    populateList(tasks, list)
}
const populateList = (tasksArray, tasksElement) => {
    list.innerHTML = ''
    tasksArray.forEach((task) => {
        const taskElement = document.createElement('li')
        taskElement.id = task.id
        const deleteButton = document.createElement('button')
        taskElement.innerText = task.value
        deleteButton.innerText = 'X'
        deleteButton.addEventListener('click', (e) => removeItself(taskElement))
        taskElement.addEventListener('dblclick', (e) =>
            removeItself(taskElement)
        )
        taskElement.appendChild(deleteButton)
        tasksElement.appendChild(taskElement)
    })
    console.log(tasksArray)
}
const pushNewTask = (taskValue) => {
    const task = { id: Date.now(), value: taskValue }
    tasks.push(task)
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    pushNewTask(input.value)
    populateList(tasks, list)
})

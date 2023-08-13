const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')
const radioButtons = document.querySelectorAll('input[type=radio]')
let formHtml = ''
let tasks = []
let priorityTasks = []
let listaNormal = false

// cspell:ignore duracao, importancia, descricao, concluida
/*
Tasks Keys:
    autor
    departamento 
    descricao
    duracao (opcional)
    importancia 
    tarefa 
    concluida
    valor (opcional)
*/

const createTask = taskData => {
    const task = document.createElement('li')
    const taskString = `Autor: ${taskData.autor} - Tarefa: ${
        taskData.tarefa
    } - Importância Nível ${taskData.importancia} - Departamento: ${
        taskData.departamento
    } - Descrição: ${taskData.descricao}
    ${taskData.duracao ? ` - ${taskData.duracao} Dias` : ''}${
        taskData.valor ? ` - ${taskData.valor}R$` : ''
    }`
    task.textContent = taskString
    task.addEventListener('dblclick', () => {
        task.classList.toggle('concluida')
    })
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    const removeEvent = () => {
        tasks = tasks.filter(task => task !== taskData)
        populateList(tasks)
    }
    removeButton.addEventListener('click', removeEvent)
    task.appendChild(removeButton)
    return task
}
const createPriorityTask = taskData => {
    const task = document.createElement('li')
    const taskString = `${taskData.importancia} - ${taskData.descricao}`
    task.textContent = taskString
    task.addEventListener('dblclick', () => {
        task.classList.toggle('concluida')
    })
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    const removeEvent = () => {
        priorityTasks = priorityTasks.filter(task => task !== taskData)
        populateList(priorityTasks)
    }
    removeButton.addEventListener('click', removeEvent)
    task.appendChild(removeButton)
    return task
}
const populateList = tasks => {
    list.innerHTML = ''
    tasks.forEach(task => {
        list.appendChild(
            listaNormal ? createTask(task) : createPriorityTask(task)
        )
    })
}
const changeForm = () => {
    const fieldset = form[0]
    if (listaNormal) {
        fieldset.children[0].textContent = 'Lista Normal'
        ;[...fieldset.children].forEach(child => {
            child.classList.remove('hidden')
        })
    } else {
        fieldset.children[0].textContent = 'Lista de Prioridades'
        ;[...fieldset.children].forEach(child => {
            if (!(child.dataset.priority === '')) {
                child.classList.add('hidden')
            }
        })
    }
}
form.addEventListener('submit', e => {
    e.preventDefault()
    for (const child of [...form[0].children]) {
        if (child.tagName == 'INPUT' || child.tagName == 'TEXTAREA') {
            if (!child.classList.contains('hidden')) {
                if (!child.checkValidity()) {
                    child.reportValidity()
                    return
                }
            }
        }
    }

    const formData = new FormData(e.target)
    const task = {}
    for (const key of formData.keys()) {
        let keyName = key.replace('txt', '').toLowerCase()
        if (keyName === 'lista') {
            listaNormal = formData.get(key) === 'normal'
            continue
        }
        task[keyName] = formData.get(key)
    }
    task['concluida'] = false
    if (listaNormal) {
        tasks.push(task)
        populateList(tasks)
    } else {
        priorityTasks.push(task)
        priorityTasks.sort((a, b) => {
            return a.importancia - b.importancia
        })
        populateList(priorityTasks)
    }
    form.reset()
})
for (const radioButton of radioButtons) {
    radioButton.addEventListener('click', () => {
        listaNormal = radioButton.value === 'normal'
        if (listaNormal) {
            populateList(tasks)
        } else {
            populateList(priorityTasks)
        }
        changeForm()
    })
}

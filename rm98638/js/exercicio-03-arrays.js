const form = document.querySelector('form')
const input = document.querySelector('input')
const table = document.querySelector('tbody')
const radioButtons = document.querySelectorAll('input[type=radio]')
let tasks = []
let priorityTasks = []
let listaNormal = radioButtons[0].checked

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
const createAddButton = (propertyName, task, td) => {
    const valueButton = document.createElement('button')
    valueButton.textContent = `Adicionar ${propertyName}`
    const dialog = document.createElement('dialog')
    const dialogForm = document.createElement('form')
    const dialogInput = document.createElement('input')
    dialogInput.type = 'number'
    dialogInput.min = 0
    const dialogButton = document.createElement('button')
    dialogButton.textContent = 'Adicionar'
    dialogButton.type = 'submit'
    const dialogTitle = document.createElement('h2')
    dialogTitle.textContent = `Adicionar ${propertyName}`
    dialog.appendChild(dialogTitle)
    dialogForm.appendChild(dialogInput)
    dialogForm.appendChild(dialogButton)
    dialog.appendChild(dialogForm)
    valueButton.addEventListener('click', () => {
        dialog.showModal()
    })
    td.appendChild(dialog)
    dialogForm.addEventListener('submit', e => {
        e.preventDefault()
        task[propertyName] = dialogInput.value
        dialog.close()
        td.removeChild(dialog)
        populateTable(tasks)
    })
    return valueButton
}
const createTask = taskData => {
    const task = document.createElement('tr')
    task.appendChild(document.createElement('td')).textContent =
        taskData.importancia
    task.appendChild(document.createElement('td')).textContent = taskData.tarefa
    task.appendChild(document.createElement('td')).textContent =
        taskData.descricao
    task.appendChild(document.createElement('td')).textContent = taskData.autor
    task.appendChild(document.createElement('td')).textContent =
        taskData.departamento

    const taskCellValue = document.createElement('td')
    const taskCellDuration = document.createElement('td')

    if (taskData.valor) {
        taskCellValue.textContent = taskData.valor + ' R$'
    } else {
        const valueButton = createAddButton('valor', taskData, task)
        taskCellValue.appendChild(valueButton)
    }
    if (taskData.duracao) {
        taskCellDuration.textContent = taskData.duracao + ' dias'
    } else {
        const durationButton = createAddButton('duracao', taskData, task)
        taskCellDuration.appendChild(durationButton)
    }
    task.appendChild(taskCellValue)
    task.appendChild(taskCellDuration)
    task.addEventListener('dblclick', () => {
        taskData.concluida = !taskData.concluida
        populateTable(tasks)
    })
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    const removeEvent = () => {
        tasks = tasks.filter(task => task !== taskData)
        populateTable(tasks)
    }
    removeButton.addEventListener('click', removeEvent)
    removeButton.classList.add('remove-button')
    const concludeButton = document.createElement('button')
    concludeButton.textContent = 'Concluir'
    concludeButton.addEventListener('click', () => {
        taskData.concluida = true
        populateTable(tasks)
    })
    const concludeButtonCell = document.createElement('td')
    concludeButtonCell.appendChild(
        taskData.concluida ? removeButton : concludeButton
    )
    task.appendChild(concludeButtonCell)
    task.classList.toggle('concluida', taskData.concluida)
    return task
}
const createPriorityTask = taskData => {
    const task = document.createElement('tr')
    // const taskString = `${taskData.importancia} - ${taskData.descricao}`
    // task.textContent = taskString
    task.appendChild(document.createElement('td')).textContent =
        taskData.importancia
    task.appendChild(document.createElement('td')).textContent =
        taskData.descricao

    task.addEventListener('dblclick', () => {
        taskData.concluida = !taskData.concluida
        populateTable(priorityTasks)
    })
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    removeButton.classList.add('remove-button')
    const removeEvent = () => {
        priorityTasks = priorityTasks.filter(task => task !== taskData)
        populateTable(priorityTasks)
    }
    removeButton.addEventListener('click', removeEvent)
    const concludeButton = document.createElement('button')
    concludeButton.textContent = 'Concluir'
    concludeButton.addEventListener('click', () => {
        taskData.concluida = true
        populateTable(priorityTasks)
    })
    const concludeButtonCell = document.createElement('td')
    concludeButtonCell.appendChild(
        taskData.concluida ? removeButton : concludeButton
    )
    task.appendChild(concludeButtonCell)
    task.classList.toggle('concluida', taskData.concluida)
    return task
}
const populateTable = tasks => {
    table.innerHTML = ''
    tasks.forEach(task => {
        table.appendChild(
            listaNormal ? createTask(task) : createPriorityTask(task)
        )
    })
}
const changeForm = () => {
    const fieldset = form[0]
    const theadLine = document.querySelector('thead').children[0]
    const hasPriority = dataset => dataset.priority === ''
    if (listaNormal) {
        fieldset.children[0].textContent = 'Lista Normal'
        ;[...fieldset.children].forEach(child => {
            child.classList.remove('hidden')
        })
        ;[...theadLine.children].forEach(child => {
            child.classList.remove('hidden')
        })
    } else {
        fieldset.children[0].textContent = 'Lista de Prioridades'
        ;[...fieldset.children].forEach(child => {
            if (!hasPriority(child.dataset)) {
                child.classList.add('hidden')
            }
        })
        ;[...theadLine.children].forEach(child => {
            if (!hasPriority(child.dataset)) {
                child.classList.add('hidden')
            }
        })
    }
}
changeForm() // Quando a página carrega, a função é chamada para atualizar o formulário caso necessário
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
        populateTable(tasks)
    } else {
        priorityTasks.push(task)
        priorityTasks.sort((a, b) => {
            return a.importancia - b.importancia
        })
        populateTable(priorityTasks)
    }
    form.reset()
})
for (const radioButton of radioButtons) {
    radioButton.addEventListener('click', () => {
        listaNormal = radioButton.value === 'normal'
        if (listaNormal) {
            populateTable(tasks)
        } else {
            populateTable(priorityTasks)
        }
        changeForm()
    })
}

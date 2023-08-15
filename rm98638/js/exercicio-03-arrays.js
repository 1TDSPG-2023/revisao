const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')
const radioButtons = document.querySelectorAll('input[type=radio]')
let formHtml = ''
let tasks = []
let priorityTasks = []
let listaNormal = true

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
const createAddButton = (propertyName, task) => {
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
    document.body.appendChild(dialog)
    dialogForm.addEventListener('submit', e => {
        e.preventDefault()
        task[propertyName] = dialogInput.value
        dialog.close()
        populateList(tasks)
        document.body.removeChild(dialog)
    })
    return [valueButton, dialog]
}
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
    const taskStringUsingTable = `
    <table>
        <tr>
            <td>Autor:</td>
            <td>${taskData.autor}</td>
        </tr>
        <tr>
            <td>Tarefa:</td>
            <td>${taskData.tarefa}</td>
        </tr>
        <tr>
            <td>Importância:</td>
            <td>Nível ${taskData.importancia}</td>
        </tr>
        <tr>
            <td>Departamento:</td>
            <td>${taskData.departamento}</td>
        </tr>
        <tr>
            <td>Descrição:</td>
            <td>${taskData.descricao}</td>
        </tr>
        ${
            taskData.duracao
                ? `
        <tr>
            <td>Duração:</td>
            <td>${taskData.duracao} Dias</td>
        </tr>`
                : ''
        }
        ${
            taskData.valor
                ? `
        <tr>
            <td>Valor:</td>
            <td>${taskData.valor}R$</td>
        </tr>`
                : ''
        }
    </table>
    `
    task.innerHTML = taskStringUsingTable
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
    removeButton.classList.add('remove-button')
    task.appendChild(removeButton)

    if (!taskData.valor) {
        const [valueButton, dialog] = createAddButton('valor', taskData)
        removeButton.addEventListener('click', () => {
            if (document.body.contains(dialog))
                document.body.removeChild(dialog)
        })
        task.appendChild(valueButton)
    }
    if (!taskData.duracao) {
        const [durationButton, dialog] = createAddButton('duracao', taskData)
        removeButton.addEventListener('click', () => {
            if (document.body.contains(dialog))
                document.body.removeChild(dialog)
        })
        task.appendChild(durationButton)
    }
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

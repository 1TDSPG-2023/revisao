let listaVazia = [];

function adicionarTarefa() {
    let tarefaInput = document.getElementById('tarefaInput');
    let tarefa = tarefaInput.value.trim();

    if (tarefa !== '') {
        listaVazia.push(tarefa);
        tarefaInput.value = '';
        atualizarListaTarefas();
    }
}

function atualizarListaTarefas() {
    let listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = ''; // Limpar a lista antes de preenchê-la novamente

    for (let i = 0; i < listaVazia.length; i++) {
        let tarefa = listaVazia[i];
        let itemLista = document.createElement('li');
        itemLista.textContent = tarefa;
        listaTarefas.appendChild(itemLista);
    }
}
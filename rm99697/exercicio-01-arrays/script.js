let listaVazia = [];

function adicionarTarefa() {
    let tarefaInput = document.getElementById('tarefaInput');

    if (tarefaInput.value !== '') {
        listaVazia.push(tarefaInput.value);
        tarefaInput.value = '';
        atualizarListaTarefas();
    }
}

function removerTarefa(index) {
    listaVazia.splice(index, 1);
    atualizarListaTarefas();
}

function atualizarListaTarefas() {
    let listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = ''; // Limpar a lista antes de preenchê-la novamente

    for (let i = 0; i < listaVazia.length; i++) {
        let tarefa = listaVazia[i];
        let itemLista = document.createElement('li');
        itemLista.textContent = tarefa;

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Apagar';
        botaoRemover.addEventListener('click', function() {
            removerTarefa(i);
        });

        itemLista.appendChild(botaoRemover);
        listaTarefas.appendChild(itemLista);
    }
}
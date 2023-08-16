let listaTarefas = [];

function adicionarTarefa() {
    let descricaoInput = document.getElementById('descricaoInput');
    let autorInput = document.getElementById('autorInput');
    let departamentoInput = document.getElementById('departamentoInput');
    let importanciaInput = document.getElementById('importanciaInput');
    let valorInput = document.getElementById('valorInput');
    let duracaoInput = document.getElementById('duracaoInput');


    if (descricaoInput.value == '' || autorInput.value == ''|| departamentoInput.value == '' || importanciaInput.value == '') {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    let novaTarefa = {
        descricao: descricaoInput.value,
        autor: autorInput.value,
        departamento: departamentoInput.value,
        importancia: parseInt(importanciaInput.value),
        valor: valorInput.value ? parseFloat(valorInput.value) : null,
        duracao: duracaoInput.value ? duracaoInput.value : null,
    };

    listaTarefas.push(novaTarefa);

    descricaoInput.value = '';
    autorInput.value = '';
    departamentoInput.value = '';
    importanciaInput.value = '';
    valorInput.value = '';
    duracaoInput.value = '';

    atualizarTabelaTarefas();
}

function removerTarefa(index) {
    listaTarefas.splice(index, 1);
    atualizarTabelaTarefas();
}

function ordenarPorImportancia() {
    atualizarTabelaTarefas(true);
}

function atualizarTabelaTarefas(ordenar = false) {
    let corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = '';

    if (ordenar) {
        listaTarefas.sort((a, b) => b.importancia - a.importancia);
    }

    for (let i = 0; i < listaTarefas.length; i++) {
        let tarefa = listaTarefas[i];
        let linha = document.createElement('tr');

        linha.innerHTML = ` 
            <td>${tarefa.descricao}</td>
            <td>${tarefa.autor}</td>
            <td>${tarefa.departamento}</td>
            <td>${tarefa.importancia}</td>
            <td>${tarefa.valor !== null ? tarefa.valor : ''}</td>
            <td>${tarefa.duracao !== null ? tarefa.duracao : ''}</td>
            <td><button onclick="removerTarefa(${i})">Remover</button></td>
        `;
        // aqui, cada propriedade está sendo inserida em uma TD

        corpoTabela.appendChild(linha);
    }
}

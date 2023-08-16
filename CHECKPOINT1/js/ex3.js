
let listaTarefa = [];

const descricaoInput = document.querySelector('#descricao');
const autorInput = document.querySelector('#autor');
const departamentoInput = document.querySelector('#departamento');
const importanciaInput = document.querySelector('#importancia');
const valorInput = document.querySelector('#valor');
const duracaoInput = document.querySelector('#duracao');
const adicionarButton = document.querySelector('#adicionar');
const tabelaBody = document.querySelector('tbody');

adicionarButton.addEventListener('click', function(){
    const tarefa = {
        descricao: descricaoInput.value,
        autor: autorInput.value,
        departamento: departamentoInput.value,
        importancia: parseInt(importanciaInput.value),
        valor: valorInput.value !== '' ? parseFloat(valorInput.value) : null,
        duracao: duracaoInput.value !== '' ? parseInt(duracaoInput.value) : null
    };

    listaTarefa.push(tarefa);
    ordenarPorImportancia(); 
    updateTable();
    clearInputs();
    console.log(listaTarefa)
});

function updateTable() {
    tabelaBody.innerHTML = '';
    listaTarefa.forEach((tarefa, i) => {
        tabelaBody.innerHTML += `
            <tr>
                <td>${tarefa.descricao}</td>
                <td>${tarefa.autor}</td>
                <td>${tarefa.departamento}</td>
                <td>${tarefa.importancia}</td>
                <td>${tarefa.valor !== null ? tarefa.valor : '-'}</td>
                <td>${tarefa.duracao !== null ? tarefa.duracao : '-'}</td>
                <td><button onclick="apagar(${i})">Excluir</button></td>
            </tr>`;
    });
}


function apagar(i){
    listaTarefa.splice(i, 1);
    ordenarPorImportancia(); 
    updateTable();
    console.log(listaTarefa)
}

function clearInputs() {
    descricaoInput.value = '';
    autorInput.value = '';
    departamentoInput.value = '';
    importanciaInput.value = '';
    valorInput.value = '';
    duracaoInput.value = '';
}

// Função para ordenar a lista por ordem de importância
function ordenarPorImportancia() {
    listaTarefa.sort((a, b) => b.importancia - a.importancia);
}

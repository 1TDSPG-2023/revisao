/* EXERCICIO 3
Agora que já sabemos manipular objetos, vamos melhorar a nossa lista de tarefas. Nossa nova 
lista será uma tabela e deve ser feita utilizando objetos com os seguintes atributos:
 - Descrição,
 - Autor,
 - Departamento,
 - Importância.
Nossa lista de tarefas deverá ter os seguintes controles:
 - Inclusão de nova tarefa;
 - Exclusão da tarefa concluída;
 - Opção para adicionar o campo valor nos objetos das tarefas que serão pagas à parte.
 - Opção para adicionar o campo duração nos objetos das tarefas que serão realizadas à parte.
 - Opção para criação de uma lista das tarefas por ordem de importância contendo apenas a
descrição. */

// Obtendo Id's e adcionado-as a variaveis
let btnAddTarefa = document.getElementById('btnAdcionarTarefa');
let formTarefas = document.getElementById('formularioTarefas');
let listaTarefas = document.getElementById('listaTarefas');

// Obtendo os Id's dos inputs e adcionando-os a variaveis
let novaTarefaDesc = document.getElementById('idDescricao');
let novaTarefaAutor = document.getElementById('idAutor');
let novaTarefaDep = document.getElementById('idDepartamento');
let novaTarefaValor = document.getElementById('idValor');
let novaTarefaDuracao = document.getElementById('idDuracao');

// Criação da variavel que armazena-ra tarefas
const tarefas = [];

function adcionarTarefa() {
    // Obtendo o input do usuario
    let descricao = novaTarefaDesc.value;
    let autor = novaTarefaAutor.value;
    let departamento = novaTarefaDep.value;
    let valor = novaTarefaValor.value;
    let duracao = novaTarefaDuracao.value;

    console.log(`Nova Tarefa Adcionada!
    Decrição: ${descricao} | 
    Autor: ${autor} | 
    Departamento: ${departamento} | 
    Valor: R$${valor} | 
    Duração: ${duracao}`);

    const novaTarefa = {
        novaTarefaDesc,
        novaTarefaAutor,
        novaTarefaDep,
        novaTarefaValor,
        novaTarefaDuracao
    }

    // Adcionando tarefa inserida na lista de tarefas
    tarefas.push(novaTarefa.value);

    // Atualizando a lista de tarefas
    // atualizarListaTarefas();
}

function removerTarefa(index) {
    // Removendo o indice da lista de tarefas
    tarefas.splice(index, 1);

    // Atualizando a lista de tarefas
    atualizarListaTarefas();
}

function atualizarListaTarefas() {
    // Resetando o input do usuario
    tarefaInput.value = '';
    console.log(tarefas);
    
    // Excluir itens da lista de tarefas visual
    listaTarefas.innerHTML = '';

    // Para cada tarefa em lista de tarefas, adcionar ela como um item html visual da lista
    for (let i = 0; i < tarefas.length; i++) {
        // Obtendo a tarefa atual a ser adcionada
        const tarefa = tarefas[i];

        // Criando o armazenamento para o item (list item)
        const item = document.createElement('li');

        // Adcionando as informações da tarefa atual para o item
        item.innerHTML = `Tarefa: ${tarefa}
            <button id="btn-remover" onclick="removerTarefa(${i})"><strong>x</strong></button>`;

        // Readcionando o item a lista de tarefas
        listaTarefas.appendChild(item);
    }
}

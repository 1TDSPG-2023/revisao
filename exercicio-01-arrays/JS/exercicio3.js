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
const btnAddTarefa = document.getElementById('btnAdcionarTarefa');
const formTarefas = document.getElementById('formularioTarefas');
const listaTarefas = document.getElementById('listaTarefas');

// Obtendo os Id's dos inputs e adcionando-os a variaveis
let tarefaDesc = document.getElementById('idDescricao');
let tarefaAutor = document.getElementById('idAutor');
let tarefaDep = document.getElementById('idDepartamento');
let tarefaImp = document.getElementById('idImportancia');
let tarefaValor = document.getElementById('idValor');
let tarefaDuracao = document.getElementById('idDuracao');

const ordemDeImportancia = [
    "alta",
    "media",
    "baixa"
];

// Criação da variavel que armazena-ra tarefas
const tarefas = [];

function adcionarTarefa() {
    // Obtendo os inputs do usuario
    const descricao = tarefaDesc.value;
    const autor = tarefaAutor.value;
    const departamento = tarefaDep.value;
    const importancia = tarefaImp.value.toLowerCase();
    const isImportanciaValida = ordemDeImportancia.includes(importancia);

    console.log(`Importância Válida: ${isImportanciaValida}`);

    if (descricao && autor && departamento && isImportanciaValida) {
        const novaTarefa = {
            descricao,
            autor,
            departamento,
            importancia
        };

        if (tarefaValor.value) {
            novaTarefa.valor = tarefaValor.value;
        } else {
            novaTarefa.valor = 'N/a';
        }
        
        if (tarefaDuracao.value) {
            novaTarefa.duracao = tarefaDuracao.value;
        } else {
            novaTarefa.duracao = 'N/a';
        }

        /*
        console.log(`NOVA TAREFA ADCIONADA:
        Descrição: ${descricao} | 
        Autor: ${autor} | 
        Departamento: ${departamento} | 
        Valor: R$${tarefaValor.value} | 
        Duração: ${tarefaDuracao.value}`);
        */
        
        // Adcionando tarefa inserida na lista de tarefas
        tarefas.push(novaTarefa);

        // Atualizando a lista de tarefas
        atualizarListaTarefas();
    }
}

function removerTarefa(index) {
    // Removendo o indice da lista de tarefas
    tarefas.splice(index, 1);

    // Atualizando a lista de tarefas
    atualizarListaTarefas();
}

function atualizarListaTarefas() {
    listaTarefas.innerHTML = '';
    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];
        const item = document.createElement('li');
        item.innerHTML = `
        <div class="tarefa">
            <div class="tarefaTopo">
                ${tarefa.descricao}
                <img class="btnRemover" src="../imgs/removeIcon.svg" onclick="removerTarefa(${i})">
            </div>
            <div class="tarefaInferior">
                ${tarefa.autor} - ${tarefa.departamento} 
            </div>
            <div class="tarefaDireita">
                Valor: R$${tarefa.valor} - Duração: ${tarefa.duracao} meses
            </div>
        </div>
        `;
        listaTarefas.appendChild(item);
    }
}

function filtrarTarefas() {
    const tarefasOrdenadas = tarefas.slice().sort((a, b) => {
        const indexA = ordemDeImportancia.indexOf(a.importancia);
        const indexB = ordemDeImportancia.indexOf(b.importancia);
        return indexA - indexB;
    });
    
    const descricaoTarefasOrdenadas = tarefasOrdenadas.map(tarefa => `Descrição: ${tarefa.descricao} | Importância: ${tarefa.importancia}`);
    
    listaTarefas.innerHTML = '';
    for (let i = 0; i < descricaoTarefasOrdenadas.length; i++) {
        const item = document.createElement('li');
        item.textContent = `${descricaoTarefasOrdenadas[i]}`;
        listaTarefas.appendChild(item);
    }
};

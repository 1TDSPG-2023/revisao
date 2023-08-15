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

const ordemDeImportancia = {
    'alta': 3,
    'media': 2,
    'baixa': 1
};

// Criação da variavel que armazena-ra tarefas
const tarefas = [];

function adcionarTarefa() {
    // Obtendo os inputs do usuario
    const descricao = tarefaDesc.value;
    const autor = tarefaAutor.value;
    const departamento = tarefaDep.value;
    const importancia = tarefaImp.value.toLowerCase();

    const isImportanciaValida = importancia in ordemDeImportancia;

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
        } if (tarefaDuracao.value) {
            novaTarefa.duracao = tarefaDuracao.value;
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
            Descrição: ${tarefa.descricao} | Autor: ${tarefa.autor} | Departamento: ${tarefa.departamento} | Importância: ${tarefa.importancia}
            ${tarefa.valor ? '| Valor: ' + tarefa.valor : ''} ${tarefa.duracao ? '| Duração: ' + tarefa.duracao : ''}
            <button id="btn-remover" onclick="removerTarefa(${i})"><strong>x</strong></button>
        `;
        listaTarefas.appendChild(item);
    }
}

function filtrarTarefas() {
    // Botão filtrar, filtrara as tarefas na ordem de mais importante a menos importante (3-1)
    // Será exibido somente os detalhes da descrição e importância
    // Será mudado somente visualmente, não afetando o array original do código
    // Após pressionar o botão filtrar pela segunda vez, a ordem será invertida
    // Será exibido as tarefas na ordem de menos importante para mais importante (1-3)
    // Após pressionar o botão filtrar pela terceira vez, a ordem voltará para o original
    // A quarta vez fará a mesma que a primeira, e assim por diante para a seguintes

    for(i=0;i<tarefas.length;i++){
        let valorImportancia = ordemDeImportancia[tarefas[i]['importancia']];
        console.log(valorImportancia);
    }
};

    // let tarefasOrdas = tarefas.slice().sort((a, b) => {
    //     const indexA = ordemDeImportancia.indexOf(a.importancia);
    //     const indexB = ordemDeImportancia.indexOf(b.importancia);
    //     return indexA - indexB;
    // });
    
    // const descricaoTarefasOrdenadas = tarefasOrdenadas.map(tarefa => tarefa.descricao);
    
    // listaTarefas.innerHTML = '';
    // for (let i = 0; i < descricaoTarefasOrdenadas.length; i++) {
    //     const item = document.createElement('li');
    //     item.textContent = descricaoTarefasOrdenadas[i];
    //     listaTarefas.appendChild(item);
    // }

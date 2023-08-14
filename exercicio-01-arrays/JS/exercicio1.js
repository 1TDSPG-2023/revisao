/* EXERCICIO 1
Para exercitarmos nosso conhecimento vamos trabalhar com uma página de tarefas
pessoais.
- Crie um projeto HTML/CSS/JS de nome exercicio-01-arrays
- Crie uma página HTML de nome index e adicione os seguintes elementos:
- Título da página com identificação do aluno.
- Formulário com um input e um botão para adicionar novas tarefas.
- Uma lista não ordenada para receber as tarefas inseridas no array, através do
formulário(esta lista deve ser preenchida dinamicamente por um loop for).
- É obrigatório a utilização dos métodos de manipulação de array necessários para
incluir novas tarefas e excluir as tarefas desejadas. Ex: PUSH, POP, SHIFT, UNSHIFT e
SPLICE. 
*/

/* ANOTAÇÕES:
array.push(item, ... , itemN); = Adcionar itens ao final de uma array
array.unshift(item, ... , itemN); = Adcionar itens ao começo de uma array

array.pop(); = Remover o ultimo item de uma array
array.shift(); = Remover o primeiro item de uma array

array.splice(index, deleteCount, item1, ..., itemN); = Adcionar/Atualizar itens no index de uma array 
*/

// Obtendo Id's e adcionado-as a variaveis
btnAddTarefa = document.getElementById('btnAdcionarTarefa');
formTarefas = document.getElementById('formularioTarefas');
listaTarefas = document.getElementById('listaTarefas');

// Criação da variavel que armazena tarefas
const tarefas = [];

function adcionarTarefa() {
    // Obtendo o input do usuario
    tarefaInput = document.getElementById('tarefaInput');
    console.log(`Tarefa: ${tarefaInput.value}`);

    // Adcionando tarefa inserida na lista de tarefas
    tarefas.push(tarefaInput.value);

    // Atualizando a lista de tarefas
    atualizarListaTarefas();
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
        item.innerHTML = `
            Tarefa: ${tarefa}
            <button id="btn-remover" onclick="removerTarefa(${i})"><strong>x</strong></button>
        `;

        // Readcionando o item a lista de tarefas
        listaTarefas.appendChild(item);
    }
}

/* EXERCICIO 1
Para exercitarmos nosso conhecimento vamos trabalhar com uma página de tarefas
pessoais.
- Crie um projeto HTML/CSS/JS de nome exercicio-01-arrays (CONCLUÍDO)
- Crie uma página HTML de nome index e adicione os seguintes elementos: 
- Título da página com identificação do aluno. (CONCLUÍDO)
- Formulário com um input e um botão para adicionar novas tarefas. (CONCLUÍDO)
- Uma lista não ordenada para receber as tarefas inseridas no array, através do
formulário(esta lista deve ser preenchida dinamicamente por um loop for). (CONCLUÍDO)
- É obrigatório a utilização dos métodos de manipulação de array necessários para
incluir novas tarefas e excluir as tarefas desejadas. Ex: PUSH, POP, SHIFT, UNSHIFT e
SPLICE. (CONCLUÍDO)
*/

/* ANOTAÇÕES:
array.push(item, ... , itemN); = Adcionar itens ao final de uma array
array.unshift(item, ... , itemN); = Adcionar itens ao começo de uma array

array.pop(); = Remover o ultimo item de uma array
array.shift(); = Remover o primeiro item de uma array

array.splice(index, deleteCount, item1, ..., itemN); = Adcionar/Atualizar itens no index de uma array 
*/

// Obtendo Id's e adcionado-as a variaveis
let btnAddTarefa = document.getElementById('btnAdcionarTarefa');
let formTarefas = document.getElementById('formularioTarefas');
let listaTarefas = document.getElementById('listaTarefas');
let tarefaInput = document.getElementById('idTarefaInput');

// Criação da variavel que armazena-ra tarefas
const tarefas = [];

function adcionarTarefa() {
    // Obtendo o input do usuario
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
        item.innerHTML = `<div class="tarefa">
        Tarefa: ${tarefa}
        <img class="btnRemover" src="../imgs/removeIcon.svg" onclick="removerTarefa(${i})"
        </div>`;

        // Readcionando o item a lista de tarefas
        listaTarefas.appendChild(item);
    }
}

/* EXERCICIO 2
1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua
um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
de 2000. (CONCLUÍDO)
2 – Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
método filter(), contendo somente os salários superiores a 2500. (CONCLUÍDO)
3 – Utilizando o array de resultado do exercício anterior, usando o método reduce(),
some os valores. (CONCLUÍDO)
*/

// Função para facilitar a exibição de salários no console
function mostrarListaNoConsole(lista) {
    for(elemento in lista) {
        console.log(`R$${lista[elemento]}`);
    }
}

// Criando uma variavel que contem uma lista de salários
let salarios = [1473, 4886, 1491, 1699, 3192, 1323, 1456, 3187, 2437, 3489];
console.log(`Salários:`);
mostrarListaNoConsole(salarios);

// Atribuindo aumentos para cada salario
let salariosComAumento = salarios.map((salario)=>{
    // Se o atual salario for menor ou igual a 2000, o aumento será de 15%, caso contrário, o aumento será de 10%
    if(salario <= 2000){
        return salario + (salario*15)/100;
    } else {
        return salario + (salario*10)/100;
    }
});
console.log(`Salários após aumento de 15% ou 10%:`);
mostrarListaNoConsole(salariosComAumento);

// Filtrando somente salarios acima de 2500, e adcionando-os em uma lista
let maioresSalariosComAumento = salariosComAumento.filter((salario) => {
    return salario > 2500;
})
console.log(`Salários acima de 2500 após o aumento:`);
mostrarListaNoConsole(maioresSalariosComAumento);

// Somando todos os salarios acima de 2500
let somaTotalSalarios = maioresSalariosComAumento.reduce((acumulado, atual) => acumulado + atual);
console.log(`Soma de Todos os Salários: ${somaTotalSalarios}`);

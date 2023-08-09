let Tarefas = ['Tarefa1'];
let listaImpressa = document.getElementById("listTarefas");
const inputTarefa = document.getElementById("inputTarefas");
const botaoAddTarefa = document.getElementById("bntAddTarefas");
const formularioTarefas = document.getElementById("formularioTarefa");

function adicionarTarefa(){
    Tarefas.push(inputTarefa.value);
    atualizarLista();
    inputTarefa.value = '';
    console.log(Tarefas)
}

function mostrarLista(){
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = `${inputTarefa.value}`;
    console.log(novaTarefa.textContent);
    listaDeTarefas.appendChild(novaTarefa);
}

function atualizarLista(){
    listaImpressa.innerHTML = '';
    listaDeTarefas.forEach((adicionaTarefa,index) => {
        const novaTarefa = document.createElement("li")
        novaTarefa.textContent=`${adicionaTarefa}`;
        listaImpressa.appendChild(novaTarefa);

        const botaoDeletar = document.createElement("button");
        botaoDeletar.textContent = 'Excluir';
        botaoDeletar.addEventListener('click',function(){
            deletarTarefa(index);
        });
    });
    novaTarefa.appendChild(botaoDeletar);
}

function deletarTarefa(index){
    Tarefas.splice(index,1);
    atualizarLista();
}

console.log(Tarefas);

let listaTarefas = [];
let listaImpressa = document.getElementById("listaDeTarefas");
const descricaoDaTarefa = document.getElementById("inputDescricaoTarefa");
const autorDaTarefa = document.getElementById("inputAutorTarefa");
const departamentoDaTarefa = document.getElementById("inputDepartamentoTarefa");
const importanciaDaTarefa = document.getElementById("inputImportanciaTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");
const formularioTarefas = document.getElementById("formularioTarefas");

const pessoa1 = {
    nome: "Adrian",
    idade: 22
}
const pessoa2 = {
    nome: "Gabi",
    idade: 20
}

botaoAdicionar.addEventListener("click",adicionarTarefa);

function adicionarTarefa() {
    if (descricaoDaTarefa.value != "") {
        let tarefa = {
            descricao: `${descricaoDaTarefa.value}`,
            autor: `${autorDaTarefa.value}`,
            departamento: `${departamentoDaTarefa.value}`,
            importancia: `${importanciaDaTarefa.value}`
        }
        console.log(tarefa);
        listaTarefas.push(tarefa);
        console.log(listaTarefas);
        // atualizarLista();
        // entradaDeTarefa.value = "";
        // entradaDeTarefa.focus();
    } else {
        alert("Por favor, insira uma tarefa para ser adicionada")
    }
}


// formularioTarefas.addEventListener("submit", prevenirComportamentoPadrao);
// botaoAdicionar.addEventListener("click",adicionarTarefa);

// function prevenirComportamentoPadrao(evt) {
//     evt.preventDefault();
// }

//-Descrição,-Autor,-Departamento,-Importância.

// function imprimirTarefa() {
//     var novaTarefa = document.createElement("li");
//     novaTarefa.textContent = `${entradaDeTarefa.value}`;
//     console.log(novaTarefa.textContent);
//     listaImpressa.appendChild(novaTarefa);
// }




// function atualizarLista() {
//     listaImpressa.innerHTML = "";
//     listaTarefas.forEach((tarefa, i) => {
//         let novaTarefa = document.createElement("li");
//         novaTarefa.textContent = `${tarefa}`;
//         listaImpressa.appendChild(novaTarefa);

//         let botaoExcluir = document.createElement("button");
//         botaoExcluir.textContent = "Excluir";
//         botaoExcluir.addEventListener("click", function() {
//             listaTarefas.splice(i, 1);
//             atualizarLista();
//         });
//         novaTarefa.appendChild(botaoExcluir);
//     })
//     console.log(listaTarefas);
// }
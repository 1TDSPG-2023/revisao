let listaTarefas = [];
let listaImpressa = document.getElementById("listaDeTarefas");
let corpoListaImpressa = document.getElementById("corpoListaDeTarefas");
const descricaoDaTarefa = document.getElementById("inputDescricaoTarefa");
const autorDaTarefa = document.getElementById("inputAutorTarefa");
const departamentoDaTarefa = document.getElementById("inputDepartamentoTarefa");
const importanciaDaTarefa = document.getElementById("inputImportanciaTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");
const formularioTarefas = document.getElementById("formularioTarefas");

botaoAdicionar.addEventListener("click",adicionarTarefa);

function adicionarTarefa() {
    // Adicionar tarefa à lista do backend    
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

    // Adicionar tarefa à lista impressa na tela
        let valoresAAdicionar = [`${tarefa.descricao}`,`${tarefa.autor}`,`${tarefa.departamento}`,`${tarefa.importancia}`];

        let novaTarefa = document.createElement("tr");
        corpoListaImpressa.appendChild(novaTarefa);

        valoresAAdicionar.forEach(valor => {
            let novaCelula = document.createElement("td");
            novaCelula.textContent = valor;
            novaTarefa.appendChild(novaCelula);
        });

    // Limpar conteúdo dos campos
        const campos = [descricaoDaTarefa, autorDaTarefa, departamentoDaTarefa, importanciaDaTarefa]
        for (let campo of campos) {
            campo.value = "";
        }
        

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


function atualizarLista() {
    
    // listaImpressa.innerHTML = "";
    // listaTarefas.forEach((tarefa, i) => {
    //     let novaTarefa = document.createElement("li");
    //     novaTarefa.textContent = `${tarefa}`;
    //     listaImpressa.appendChild(novaTarefa);

    //     let botaoExcluir = document.createElement("button");
    //     botaoExcluir.textContent = "Excluir";
    //     botaoExcluir.addEventListener("click", function() {
    //         listaTarefas.splice(i, 1);
    //         atualizarLista();
    //     });
    //     novaTarefa.appendChild(botaoExcluir);
    // })
    console.log(listaTarefas);
}
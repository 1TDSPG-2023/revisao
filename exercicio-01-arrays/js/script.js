let listaTarefas = []
let listaImpressaTarefas = document.getElementById("lista-tarefas")
let nomeTarefa = document.getElementById("nome-tarefa")
let botaoAdicionar = document.getElementById("btn-adicionar")

botaoAdicionar.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {
    listaTarefas.push(nomeTarefa)
    imprimirTarefa()
}

function imprimirTarefa() {
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = nomeTarefa.value
    listaImpressaTarefas.appendChild(novaTarefa)
}


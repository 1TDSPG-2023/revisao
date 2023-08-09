const listaTarefas = [];
const botaoAdicionar = document.getElementById("btnadicionartarefas");

function adicionarTarefa() {
    const nomeTarefaInput = document.getElementById("nometarefas");
    const nomeTarefa = nomeTarefaInput.value;
    if (nomeTarefa.trim() !== '') {
        listaTarefas.push(nomeTarefa);
        atualizarLista();
    }
}

function atualizarLista() {
    const ul = document.getElementById("listatarefas");
    ul.innerHTML = ''; 
    for (let i = 0; i < listaTarefas.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaTarefas[i];

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "X";

        li.appendChild(botaoExcluir);
        ul.appendChild(li);

        botaoExcluir.addEventListener("click", () => {
            listaTarefas.splice(i, 1);
            atualizarLista();
        });
    }

    document.getElementById("nometarefas").value = '';
    document.getElementById("nometarefas").focus();
}

botaoAdicionar.addEventListener("click", adicionarTarefa);
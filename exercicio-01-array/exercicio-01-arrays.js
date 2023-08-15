const tarefas = [];

function adicionarTarefa() {
    const novaTarefa = document.getElementById("tarefaInput").value;
    tarefas.push(novaTarefa);
    atualizarListaTarefas();
    document.getElementById("tarefaInput").value = "";
}

function atualizarListaTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];
    const item = document.createElement("li");
    item.textContent = tarefa;

    const removerBotao = document.createElement("button");
    removerBotao.textContent = "X";
    removerBotao.classList.add("X");
    removerBotao.addEventListener("click", () => removerTarefa(i));

    item.appendChild(removerBotao);
    listaTarefas.appendChild(item);
  }

<<<<<<< HEAD
  const removerPrimeiroBotao = document.createElement("button");
  removerPrimeiroBotao.textContent = "Remover Primeira";
  removerPrimeiroBotao.addEventListener("click", () => removerPrimeiroTarefa());

  const removerUltimoBotao = document.createElement("button");
  removerUltimoBotao.textContent = "Remover Última";
  removerUltimoBotao.addEventListener("click", () => removerUltimoTarefa());

  listaTarefas.prepend(removerPrimeiroBotao);
  
=======
>>>>>>> 4599548d47a01d94a6d67494a3d9c256684aa6d7
}
function removerTarefa(index) {
  tarefas.splice(index, 1);
  atualizarListaTarefas();
<<<<<<< HEAD
}

=======
  console.log(tarefas);
}
>>>>>>> 4599548d47a01d94a6d67494a3d9c256684aa6d7

function verificarTecla(event) {
    if (event.key === "Enter") {
      adicionarTarefa();
      event.preventDefault();
    }
  }
  
  document.getElementById("tarefaInput").addEventListener("keydown", verificarTecla);

  console.log(tarefas);
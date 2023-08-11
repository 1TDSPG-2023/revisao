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
    removerBotao.textContent = "Remover";
    removerBotao.classList.add("remover");
    removerBotao.addEventListener("click", () => removerTarefa(i));

    item.appendChild(removerBotao);
    listaTarefas.appendChild(item);
  }

  const removerPrimeiroBotao = document.createElement("button");
  removerPrimeiroBotao.textContent = "Remover Primeira";
  removerPrimeiroBotao.addEventListener("click", () => removerPrimeiroTarefa());

  const removerUltimoBotao = document.createElement("button");
  removerUltimoBotao.textContent = "Remover Última";
  removerUltimoBotao.addEventListener("click", () => removerUltimoTarefa());

  listaTarefas.prepend(removerPrimeiroBotao);
  listaTarefas.appendChild(removerUltimoBotao);
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  atualizarListaTarefas();
}

function removerPrimeiroTarefa() {
  tarefas.shift();
  atualizarListaTarefas();
}

function removerUltimoTarefa() {
  tarefas.pop();
  atualizarListaTarefas();
}

function verificarTecla(event) {
  if (event.key === "Enter") {
    adicionarTarefa();
    event.preventDefault();
  }
}

document.getElementById("tarefaInput").addEventListener("keydown", verificarTecla);


let cursos = [
  {nome: "HTML", duracao: 40},
  {nome: "CSS", duracao: 50},
  {nome: "JavaScript", duracao: 60},
  {nome: "React", duracao: 70},
  {nome: "Node", duracao: 80}
];


// let cursosNomes = cursos.map((curso,indice,lista) => {
//   console.log(`O elemento curso de ${curso.nome} está na posição ${indice} de uma lista com tamanho ${lista.length}`);
//   return curso.nome;
// });

// console.log("\n");

// console.log(cursosNomes);

// // =========================================================================

// let cursosComDuracaoMaiorQue50 = cursos.filter((curso) => curso.duracao > 50);

// console.log(cursosComDuracaoMaiorQue50);

// console.log("\n");

// // =========================================================================

// let totalHoras = cursos.reduce((total, curso) => total + curso.duracao, 0);

// console.log(totalHoras);

// console.log("\n");

// // =========================================================================

// let totalHorasMaiorQue50 = cursos.filter((curso) => curso.duracao > 50).reduce((total, curso) => total + curso.duracao, 0);

// console.log(totalHorasMaiorQue50);

// console.log("\n");

// // =========================================================================

// let todosTemQueSerMaiorQue50 = cursos.every((curso) => curso.duracao >= 50);

// console.log(todosTemQueSerMaiorQue50);

// console.log("\n");

// // =========================================================================

// let algumTemQueSerMaiorQue50 = cursos.some((curso) => curso.duracao >= 50);

// console.log(algumTemQueSerMaiorQue50);

// console.log("\n");

// // =========================================================================

// let cursoComDuracaoMaiorQue50 = cursos.find((curso) => curso.duracao > 50);

// console.log(cursoComDuracaoMaiorQue50);

// console.log("\n");

// // =========================================================================

let cursosBuscados = cursos.filter((curso) => curso.nome.includes("CSS"));

console.log(cursosBuscados);

console.log("\n");
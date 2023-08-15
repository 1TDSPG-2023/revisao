// Definindo a classe para representar as tarefas
class Tarefa {
  constructor(descricao, autor, departamento, importancia) {
    this.descricao = descricao;
    this.autor = autor;
    this.departamento = departamento;
    this.importancia = importancia;
    this.valor = null;
    this.duracao = null;
    this.concluida = false;
  }
}

// Criando a lista de tarefas
let listaDeTarefas = [];

// Obtendo referências aos elementos HTML
const tarefaForm = document.getElementById("tarefa-form");
const tarefaDescInput = document.getElementById("tarefa-desc");
const tarefaAutorInput = document.getElementById("tarefa-autor");
const tarefaDepInput = document.getElementById("tarefa-dep");
const tarefaImportInput = document.getElementById("tarefa-import");
const tarefaLista = document.getElementById("tarefa-lista");

// Event listener para o formulário de adicionar tarefa
tarefaForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const descricao = tarefaDescInput.value;
  const autor = tarefaAutorInput.value;
  const departamento = tarefaDepInput.value;
  const importancia = parseInt(tarefaImportInput.value);

  if (descricao.trim() !== "" && autor.trim() !== "" && departamento.trim() !== "" && !isNaN(importancia)) {
    adicionarTarefa(descricao, autor, departamento, importancia);
    atualizarLista();
    atualizarListaPorImportancia();
    tarefaDescInput.value = "";
    tarefaAutorInput.value = "";
    tarefaDepInput.value = "";
    tarefaImportInput.value = "";
  }
});

// Função para adicionar tarefa à lista
function adicionarTarefa(descricao, autor, departamento, importancia) {
  const novaTarefa = new Tarefa(descricao, autor, departamento, importancia);
  listaDeTarefas.push(novaTarefa);
}

// Função para atualizar a lista de tarefas no HTML
function atualizarLista() {
  const tbody = tarefaLista;
  tbody.innerHTML = "";

  listaDeTarefas.forEach((tarefa, indice) => {
    if (!tarefa.concluida) {
      const tarefaRow = document.createElement("tr");
      tarefaRow.innerHTML = `
        <td>${tarefa.descricao}</td>
        <td>${tarefa.autor}</td>
        <td>${tarefa.departamento}</td>
        <td>${tarefa.importancia}</td>
        <td>
          <button class="btn-valor">Valor</button>
          <button class="btn-duracao">Duração</button>
          <button class="btn-concluir">Concluir</button>
        </td>
        <td>${tarefa.valor !== null ? tarefa.valor : "-"}</td>
        <td>${tarefa.duracao !== null ? tarefa.duracao : "-"}</td>
      `;

      // Event listeners para os botões
      tarefaRow.querySelector(".btn-valor").addEventListener("click", () => {
        const novoValor = prompt("Informe o valor:");
        if (novoValor !== null) {
          adicionarValor(indice, novoValor);
        }
      });

      tarefaRow.querySelector(".btn-duracao").addEventListener("click", () => {
        const novaDuracao = prompt("Informe a duração:");
        if (novaDuracao !== null) {
          adicionarDuracao(indice, novaDuracao);
        }
      });

      tarefaRow.querySelector(".btn-concluir").addEventListener("click", () => {
        concluirTarefa(indice);
      });

      tbody.appendChild(tarefaRow);
    }
  });
}

// Função para adicionar valor a uma tarefa
function adicionarValor(indice, valor) {
  listaDeTarefas[indice].valor = valor;
  atualizarLista();
}

// Função para adicionar duração a uma tarefa
function adicionarDuracao(indice, duracao) {
  listaDeTarefas[indice].duracao = duracao;
  atualizarLista();
}

// Função para concluir uma tarefa
function concluirTarefa(indice) {
  listaDeTarefas[indice].concluida = true;
  atualizarLista();
}

// Função para atualizar a lista HTML das tarefas por ordem de importância
function atualizarListaPorImportancia() {
  const listaImportancia = document.getElementById("tarefas-importancia");
  listaImportancia.innerHTML = "";

  listaDeTarefas
    .filter(tarefa => !tarefa.concluida)
    .sort((a, b) => b.importancia - a.importancia)
    .forEach(tarefa => {
      const li = document.createElement("li");
      li.textContent = tarefa.descricao;
      listaImportancia.appendChild(li);
    });
}

// Event listener para ordenar por importância
const ordenarBtn = document.getElementById("ordenar-importancia");
ordenarBtn.addEventListener("click", ordenarPorImportancia);

// Atualizar a lista inicialmente
atualizarLista();
atualizarListaPorImportancia();

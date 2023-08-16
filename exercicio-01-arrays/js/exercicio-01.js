listaTarefas = [];
class Tarefa {
    constructor(nomeTarefa,descricao, autor, departamento, importancia) {
        this.nomeTarefa = nomeTarefa
        this.descricao = descricao;
        this.autor = autor;
        this.departamento = departamento;
        this.importancia = importancia;
    }
}

// Obtendo referências aos elementos do formulário
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");

const inputDeTarefa = document.getElementById("inputTarefa");
const inputDescricaoTarefa = document.getElementById("textareaTarefa");
const inputAutorTarefa = document.getElementById("inputAutorTarefa");
const inputDepartamento = document.getElementById("inputDepartamento");
const inputImportancia = document.getElementById("inputImportancia");
const listaImpressa = document.getElementById("listaDeTarefas");

// Adicionando um evento ao botão "Adicionar"
botaoAdicionar.addEventListener("click",adicionarTarefa);

function adicionarTarefa() {
    // Lendo os valores dos campos do formulário
    let nomeTarefa = inputDeTarefa.value;
    let descricao = inputDescricaoTarefa.value;
    let autor = inputAutorTarefa.value;
    let departamento = inputDepartamento.value;
    let importancia = inputImportancia.value;

    //Cria um objeto tarefa com os valores passados
    let tarefa = new Tarefa(nomeTarefa,descricao,autor,departamento,importancia);
    // Adicionar a nova tarefa na listaTarefas
    listaTarefas.push(tarefa);

    console.log(listaTarefas);
    
    //chama function para limpar os campos
    limparInputs();
    //chama função para atualizar a lista
    atualizarLista();
}

function limparInputs(){
    inputDeTarefa.value = "";
    inputDescricaoTarefa.value = "";
    inputAutorTarefa.value = "";
    inputDepartamento.value = "";
    inputImportancia.value = "";
};

// function imprimirTarefa() { 
//     var novaTarefa = document.createElement("li");
//     novaTarefa.textContent = `${inputDeTarefa.value}`;
//     console.log(novaTarefa.textContent);
//     listaImpressa.appendChild(novaTarefa);
// }

function atualizarLista() {
    listaImpressa.innerHTML = "";

    listaTarefas.forEach((tarefaAdicionada, index) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = `Nome da Tarefa: ${tarefaAdicionada.nomeTarefa}\n` +
                                 `Descrição: ${tarefaAdicionada.descricao}\n` +
                                 `Autor: ${tarefaAdicionada.autor}\n` +
                                 `Departamento: ${tarefaAdicionada.departamento}\n` +
                                 `Importância: ${tarefaAdicionada.importancia}`;

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", function() {
            listaTarefas.splice(index, 1);
            atualizarLista();
        });

        novaTarefa.appendChild(botaoExcluir); // Adicione o botão "Excluir" à tarefa
        listaImpressa.appendChild(novaTarefa); // Adicione a tarefa à lista
    });
}








let listaTarefas = {
    constructor(descricao, autor, departamento, importancia) {
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

// Adicionando um evento ao botão "Adicionar"
botaoAdicionar.addEventListener("click",adicionarTarefa);

// function imprimirTarefa() { 
//     var novaTarefa = document.createElement("li");
//     novaTarefa.textContent = `${inputDeTarefa.value}`;
//     console.log(novaTarefa.textContent);
//     listaImpressa.appendChild(novaTarefa);
// }


function adicionarTarefa() {
    // Lendo os valores dos campos do formulário
    let nomeTarefa = inputDeTarefa.value;
    let descricao = inputDescricaoTarefa.value;
    let autor = inputAutorTarefa.value;
    let departamento = inputDepartamento.value;
    let importancia = inputImportancia.value;

    //Cria um objeto tarefa com os valores passados
    let tarefa = new tarefa(nomeTarefa,descricao,autor,departamento,importancia);
    listaTarefas.push(tarefa);
    console.log(listaTarefas)
}

// function atualizarLista() {
//     let listaImpressa = document.getElementById("listaDeTarefas");
//     listaImpressa.innerHTML = "";
//     listaTarefas.forEach((tarefaAdicionada, index) => {
//         let novaTarefa = document.createElement("li");
//         novaTarefa.textContent = `${tarefaAdicionada}`;
//         listaImpressa.appendChild(novaTarefa);

//         let botaoExcluir = document.createElement("button");
//         botaoExcluir.textContent = "Excluir";
//         botaoExcluir.addEventListener("click", function() {
//             listaTarefas.splice(index, 1);
//             atualizarLista();
//         });
//         novaTarefa.appendChild(botaoExcluir);
//     })
// }

// let listaSalarios = [
//     {funcionario:"Funcionario1", salario:2978},
//     {funcionario:"João", salario:1602},
//     {funcionario:"Funcionario3", salario:1780},
//     {funcionario:"Maria", salario:2110},
//     {funcionario:"Funcionario5", salario:3452},
//     {funcionario:"Luis", salario:2000},
//     {funcionario:"Funcionario7", salario:1452},
//     {funcionario:"José", salario:2098},
//     {funcionario:"Funcionario9", salario:1960},
//     {funcionario:"Jaci", salario:1998}
// ];

// const botaoReajuste = document.getElementById("reajustar");
// botaoReajuste.addEventListener("click", ()=>{
//     //UTILIZANDO O METODO MAP
//     console.log("LISTA SEM ALTERAÇÃO")
//     console.log(listaSalarios)
//     const salariosAjustado = listaSalarios.map((novoSalario) =>{
//         return novoSalario.salario;
//     })
//     console.log("LISTA ALTERADA")
//     console.log(salariosAjustado);

//     //UTILIZANDO O METODO FILTER
//     const salariosMaiorQue2500 = salariosAjustado.filter((salario) => {
//         return salario > 2500
//     });
//     console.log("SALARIOS MAIOR QUE 2500");
//     console.log(salariosMaiorQue2500);

//     //UTILIZANDO O METODO REDUCE
//     const somaSalarios = salariosAjustado.reduce((acumulador, salario) => {
//         return acumulador + salario;
//     },0)
//     console.log("SOMA DOS SALARIOS")
//     console.log(somaSalarios);
// });







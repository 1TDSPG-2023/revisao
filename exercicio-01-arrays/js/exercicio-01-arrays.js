let listaTarefas = [];
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");
const inputDeTarefa = document.getElementById("inputTarefa");
const descricaoTarefa = document.getElementById("textareaTarefa");
const autorTarefa = document.getElementById("inputAutorTarefa");
const departamento = document.getElementById("inputDepartamento");
const importancia = document.getElementById("inputImportancia");


botaoAdicionar.addEventListener("click",adicionarTarefa);

function imprimirTarefa() { 
    var novaTarefa = document.createElement("li");
    novaTarefa.textContent = `${inputDeTarefa.value}`;
    console.log(novaTarefa.textContent);
    listaImpressa.appendChild(novaTarefa);
}

function adicionarTarefa() {
    listaTarefas.push(inputDeTarefa.value);
    atualizarLista();
    inputDeTarefa.value = "";
    inputDeTarefa.focus();
    console.log(listaTarefas);
}

function atualizarLista() {
    let listaImpressa = document.getElementById("listaDeTarefas");
    listaImpressa.innerHTML = "";
    listaTarefas.forEach((tarefaAdicionada, index) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = `${tarefaAdicionada}`;
        listaImpressa.appendChild(novaTarefa);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", function() {
            listaTarefas.splice(index, 1);
            atualizarLista();
        });
        novaTarefa.appendChild(botaoExcluir);
    })
}

let listaSalarios = [
    {funcionario:"Funcionario1", salario:2978},
    {funcionario:"João", salario:1602},
    {funcionario:"Funcionario3", salario:1780},
    {funcionario:"Maria", salario:2110},
    {funcionario:"Funcionario5", salario:3452},
    {funcionario:"Luis", salario:2000},
    {funcionario:"Funcionario7", salario:1452},
    {funcionario:"José", salario:2098},
    {funcionario:"Funcionario9", salario:1960},
    {funcionario:"Jaci", salario:1998}
];

const botaoReajuste = document.getElementById("reajustar");
botaoReajuste.addEventListener("click", ()=>{
    //UTILIZANDO O METODO MAP
    console.log("LISTA SEM ALTERAÇÃO")
    console.log(listaSalarios)
    const salariosAjustado = listaSalarios.map((novoSalario) =>{
        return novoSalario.salario;
    })
    console.log("LISTA ALTERADA")
    console.log(salariosAjustado);

    //UTILIZANDO O METODO FILTER
    const salariosMaiorQue2500 = salariosAjustado.filter((salario) => {
        return salario > 2500
    });
    console.log("SALARIOS MAIOR QUE 2500");
    console.log(salariosMaiorQue2500);

    //UTILIZANDO O METODO REDUCE
    const somaSalarios = salariosAjustado.reduce((acumulador, salario) => {
        return acumulador + salario;
    },0)
    console.log("SOMA DOS SALARIOS")
    console.log(somaSalarios);
});







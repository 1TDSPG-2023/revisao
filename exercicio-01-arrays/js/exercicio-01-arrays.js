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







// let nomesfuncionarios = listaSalarios.map((nome)=>{return nome.funcionario});
// console.log(nomesfuncionarios);

// console.log(listaSalarios);



/******************************************************************/
//EXEMPLOS E EXPLICAÇÕES DA AULA


// //Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     {nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

// //Imprimindo o array de objetos no console com o método map:
// //SINTAXE: parametro, indice, o array 
// let cursosNomes = cursos.map((curso,indice,lista) => {
//     console.log(`O elemento ${curso.nome} está na posição ${indice} de uma lista de tamanho  ${lista.length}.`);
//     return curso.nome;
// });
// //Quebrando linha no console:
// console.log("\n");

// let cursosNomes1 = cursos.map((curso,indice) => {
//     console.log(`O elemento ${curso.nome} está na posição ${indice}.`);
//     return curso;
// }).filter((curso) => curso.duracao <= 30);

// //Quebrando linha no console:
// console.log("\n");

// //Imprimindo o array de nomes de cursos
// console.log("**Imprimindo o array de nomes de cursos");
// console.log(cursosNomes)

// //Imprimindo o array de nomes de cursos menores ou iguais a 30 no console:
// console.log("\n");
// console.log("**Imprimindo o array de nomes de cursos menores ou iguais a 30");
// console.log(cursosNomes1);


// let cursosComDuracaoMaiorQue50 = cursos.filter((curso) => curso.duracao <= 50);
// //Imprimindo o array de cursos com duração maior que 50 horas:
// console.log("**Imprimindo o array de cursos com duração maior que 50 horas:");
// console.log(cursosComDuracaoMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");

// //Quero saber a quantidade total de horas de todos os cursos:
// let totalHoras = cursos.reduce((total,curso) => total + curso.duracao,0);
// //Imprimindo o total de horas:
// console.log("**Imprimindo a quantidade total de horas de todos os cursos");
// console.log(totalHoras);
// //Quebrando linha no console:
// console.log("\n");

// //Quero saber a quantidade total de horas de todos os cursos com duração maior que 50 horas:
// let totalHorasMaiorQue50 = cursos.filter((curso) => curso.duracao > 50).reduce((total,curso) => total + curso.duracao,0);
// //Imprimindo o total de horas:
// console.log(totalHorasMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");


// //Verificando se existe algum curso com duração menor que 30 horas:
// let todosTemQueSerMaiorOuIgualQue30 = cursos.every((curso) => curso.duracao >= 30);
// //Imprimindo o resultado:
// console.log(todosTemQueSerMaiorOuIgualQue30);
// //Quebrando linha no console:
// console.log("\n");

// //Verificando se existe algum curso com duração maior que 30 horas:
// let algumTemQueSerMaiorQue30 = cursos.some((curso) => curso.duracao > 30);
// //Imprimindo o resultado:
// console.log(algumTemQueSerMaiorQue30);
// //Quebrando linha no console:
// console.log("\n");

// //Buscando ocorrências de cursos com duração maior que 50 horas com find:
// let cursoComDuracaoMaiorQue50 = cursos.find((curso) => curso.duracao > 50);
// //Imprimindo o resultado:
// console.log(cursoComDuracaoMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");

// //Buscando ocorrências de cursos com includes utilizando o filter:
// let cursosBuscados = cursos.filter((curso) => curso.nome.includes("c"));
// //Imprimindo o resultado:
// console.log(cursosBuscados);
// //Quebrando linha no console:
// console.log("\n");

// //Criando um objeto Pessoa:
// let pessoa = {
//     nome: "João",
//     idade: 25,
//     genero: "M",
//     altura: 1.75,
//     peso: 80,
//     andar: function(){
//         console.log("Andando...");
//     },
//     getNome: function(){
//         return this.nome;
//     },
//     setNome: function(novoNome){
//         this.nome = novoNome;
//     }
// };

// //Criando um novo object pessoa
// let pessoa1 = {
//     nome: 'Jaci',
//     idade: 24,
//     genero:'F',
//     altura: 1.61,
//     peso:50,
//     andar: function(){
//         console.log("andando...")
//     },
//     getNome: function(){
//         return this.nome;
//     },
//     setNome: function(novoNome){
//         return this.nome = novoNome
//     }
// }

// console.log(pessoa1.setNome("João"));

// //criando um novo objeto pessoa com spread operator
// let pessoa2 = {...pessoa, nome:"Mario", idade:30, genero:"M"}
// console.log(pessoa2)

// //Imprimindo o objeto:
// console.log(pessoa);
// //Quebrando linha no console:
// console.log("\n"); 

// //Criando um novo objeto Pessoa com Rest Operator:
// // const{nome, altura, peso, ...resto} = pessoa1;
// //Imprimindo o objeto:
// // console.log(nome, altura, peso, resto);

// //Exemplo de desestruturação de objeto:
//  const{nome, idade, genero, altura, peso} = pessoa;
// //Imprimindo o objeto:
// console.log("* Imprimindo o objeto de desestruturação de objeto*");
// console.log(nome, idade, genero, altura, peso);
// //Quebrando linha no console:
// console.log("\n");



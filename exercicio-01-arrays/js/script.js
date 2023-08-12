let listaTarefas = [];
const inputDeTarefa = document.getElementById("inputTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");

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


let cursos = [
    { nome: "Curso de JavaScript", duracao: 40},
    {nome: "Curso de HTML", duracao: 20},
    {nome: "Curso de CSS", duracao: 30},
    {nome: "Curso de React", duracao: 50},
    {nome: "Curso de Node", duracao: 60},
    {nome: "Curso de Python", duracao: 70}
];

let cursosComDuracaoMaiorQue50 = cursos.filter((curso) => curso.duracao <= 50);
console.log(cursosComDuracaoMaiorQue50);

let totalHorasMaiorQue50 = cursos.filter((curso) => curso.duracao).reduce((total,curso) => total + curso.duracao);
console.log(totalHorasMaiorQue50);

//Criando objet pessoa
let pessoa1 = {
    nome: 'Jaci',
    idade: 24,
    genero:'F',
    altura: 1.61,
    peso:50,
    andar: function(){
        console.log("andando...")
    },
    getNome: function(){
        return this.nome;
    },
    setNome: function(novoNome){
        return this.nome = novoNome
    }
}

console.log(pessoa.setNome("João"))


//criando um novo objeto pessoa com spread operator
let pessoa2 = {...pessoa, nome:"Mario", idade:30,genero:"M"}
console.log(pessoa2)

// //Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     { nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

// //Imprimindo o array de objetos no console com o método map:
// let cursosNomes = cursos.map((curso,indice,lista) => {

//     console.log(`O elemento ${curso.nome} está na posição ${indice} de uma lista de tamanho  ${lista.length}.`);
//     return curso.nome;
// });
// //Quebrando linha no console:
// console.log("\n");

// let cursosNomes = cursos.map((curso,indice,lista) => {

//     console.log(`O elemento ${curso.nome} está na posição ${indice} de uma lista de tamanho  ${lista.length}.`);
//     return curso;
// }).filter((curso) => curso.duracao <= 50);

//Quebrando linha no console:
// console.log("\n");

//Imprimindo o array de nomes de cursos menores ou iguais a 50 no console:
// console.log(cursosNomes);

// //Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     { nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

// let cursosComDuracaoMaiorQue50 = cursos.filter((curso) => curso.duracao <= 50);
// //Imprimindo o array de cursos com duração maior que 50 horas:
// console.log(cursosComDuracaoMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");

//Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     { nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

//Quero saber a quantidade total de horas de todos os cursos:
// let totalHoras = cursos.reduce((total,curso) => total + curso.duracao,0);
// //Imprimindo o total de horas:
// console.log(totalHoras);
// //Quebrando linha no console:
// console.log("\n");

// //Quero saber a quantidade total de horas de todos os cursos com duração maior que 50 horas:
// let totalHorasMaiorQue50 = cursos.filter((curso) => curso.duracao > 50).reduce((total,curso) => total + curso.duracao,0);
// //Imprimindo o total de horas:
// console.log(totalHorasMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");


// //Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     { nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

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


// //Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     { nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

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


//Criando um objeto Pessoa:
let pessoa = {
    nome: "João",
    idade: 25,
    genero: "M",
    altura: 1.75,
    peso: 80,
    andar: function(){
        console.log("Andando...");
    },
    getNome: function(){
        return this.nome;
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    }
};

//Imprimindo o objeto:
console.log(pessoa);
//Quebrando linha no console:
console.log("\n");  

// //Criando um novo objeto Pessoa com Spread Operator:
// let pessoa2 = {...pessoa,nome: "Maria", idade: 30, genero: "F"};
// //Imprimindo o objeto:
// console.log(pessoa2);
// //Quebrando linha no console:
// console.log("\n");

//Criando um novo objeto Pessoa com Rest Operator:
// const{nome, altura, peso, ...resto} = pessoa;
// //Imprimindo o objeto:
// console.log(nome, altura, peso, resto);

//Exemplo de desestruturação de objeto:
 const{nome, idade, genero, altura, peso} = pessoa;
//Imprimindo o objeto:
console.log(nome, idade, genero, altura, peso);
//Quebrando linha no console:
console.log("\n");
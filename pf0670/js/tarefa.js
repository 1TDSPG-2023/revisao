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
let cursos = [
    { nome: "Curso de JavaScript", duracao: 40},
    {nome: "Curso de HTML", duracao: 20},
    {nome: "Curso de CSS", duracao: 30},
    {nome: "Curso de React", duracao: 50},
    {nome: "Curso de Node", duracao: 60},
    {nome: "Curso de Python", duracao: 70}
];






//Criar a lista de Tarefas array
let listaTarefasArray = [];

const botaoAddtarefa = document.getElementById("btnAddTarefa");

botaoAddtarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    const inputTarefa = document.getElementById("idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.getElementById("lista-tarefas");

    let li = document.createElement("li");

    li.textContent = inputTarefa.value;

    listaTarefasUL.appendChild(li);
    
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{

        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        console.log(conteudoDoLi);

        let index = listaTarefasArray.indexOf(conteudoDoLi[0]);

        listaTarefasArray.splice(index,1);

        evt.target.parentNode.remove();

        console.log(listaTarefasArray);

    })

    inputTarefa.value = "";
    console.log(listaTarefasArray);
});



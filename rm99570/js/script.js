// console.log("Olá Mundo!")

// // Declarar arrays
// let alunos = ["João","Carlos","Maria"];

// // Imprimindo um índice do array
// console.log(alunos[0]);

// // Utilizando um forEach para imprimir o array
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// // Criando um array de array de alunos e suas notas
// let grupos = [["Laura","Letícia"], ["Pedro","Gustavo"]];
// // Imprimindo o primeiro indice do array
// let alunos = grupos[0]
// console.log(grupos[0][0]);
// console.log(grupos[0]);

// Declarar array de alunos
// let alunos = ["João","Carlos","Maria"];
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// // Adicionando um novo aluno ao final do array com push();
// console.log("\n");
// alunos.push('Ana');
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))


// // Utilizando o sort() para ordenar em ordem alfabética
// alunos.sort();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// //Utilizando o reverse() para reverter a ordem que se apresenta
// alunos.reverse();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// console.log("\n");
// // Utilizando o pop() para remover o último elemento do array
// alunos.pop();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// //Adicionando elementos ao inicio do array com unshift()
// alunos.unshift();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// console.log("\n");
// // Removendo elementos do inicio do aray com shift()
// alunos.shift();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// console.log("\n");
// // Alterando elementos no meio do array com splice(posicao-inicial, posicao-final, novos valores)
// alunos.splice(1,1,"Adrian");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// console.log("\n");
// // Removendo elementos no meio do array com splice(posicao-inicial, posicao-final, novos valores)
// alunos.splice(1,1);
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// Este é um array de objetos de cursos onde ele vai popular uma lista ul com cursos e suas durações.
// Vamos criar novos elementos com o createElement e adicionar ao html com o appendChild
// Precisamos saber quem é o pai do elemento que vamos adicionar, no caso é a ul. Porém não temos uma ul ainda. Mas temos o elemento pai que é a div com id cursos.
// Então vamos criar a ul e adicionar a div com id cursos.

const cursos = [
    {"nome" : "HTML-5", "duracao" : "3 meses"},
    {"nome" : "CSS-3", "duracao" : "4 meses"},
    {"nome" : "Javascript", "duracao" : "5 meses"},
    {"nome" : "React", "duracao" : "5 meses"}
]

// Criando a ul
const ul = document.createElement("ul");

// Adicionando a ul a div com id box-cursos
const boxCursos = document.getElementById("box-cursos");

boxCursos.appendChild(ul);

// Criando os elementos li e adicionando a ul
let indiceClassCurso = 0
cursos.forEach(curso=>{
    indiceClassCurso++;
    const li = document.createElement("li");
    li.id = `Curso-${indiceClassCurso}`;
    li.textContent = `${curso.nome} - ${curso.duracao}`;
    ul.appendChild(li);
})

function cadastrar(nomeCurso, duracaoCurso){
    const novoCurso = {"nome":nomeCurso,"duracao":duracaoCurso};
    cursos.push(novoCurso);
    const li = document.createElement("li");
    li.id = `curso-${cursos.length}`;
    li.textContent = `${nomeCurso} - ${duracaoCurso}`;
    ul.appendChild(li);
}
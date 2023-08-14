// // console.log("ola mundo")

// // declarar arrays
// let alunos = ["João", "Carlos", "Maria"];

// // imprimindo um indice do array
// console.log(alunos[0])

// // Utilizando um foreah para imprimir o array
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// Criando um array de array de alunos 
// let grupos = [["Laura", "Leticia"], ["pedro", "Gustavo"]]
// //imprimindo o primeiro indice de array
// let alunos = grupos[0]
// console.log(grupos[0][0])
// console.log(alunos[0])

// let alunos = ["João", "Carlos", "Maria"];
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// //Adicionando um nome aluno ao final do array com push
// console.log("\n")
// alunos.push('Ana')
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n-sort")
// //Utilizando o método sort para organizar o array em ordem alfabética
// alunos.sort()
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n-reverse")
// //Utilizando o método reverse
// alunos.reverse()
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n-pop")
// //Utilizando o pop para remover o ultimo item do array
// alunos.pop()
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n")
// //utilizando elementos ao inicio do aarray com unshift
// alunos.unshift("Jorge")
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n")
// //utilizando elementos ao inicio do aarray com shift
// alunos.shift("Jorge")
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n")
// //alterando elementos do array com splice
// alunos.splice(1,1,"Adrian")
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// console.log("\n")
// //removendo elementos no meio do array com splice
// alunos.splice(1,1);
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))


//Este é um array de objetos de cursos onde ele vai popular uma lista UL com os cursos e suas durações.
//Vamos criar novos elementos com creatElemento e adicionar no html com o appendChild
//Precisamos saber quem é o pai do elmeneto que vamos criar, no caso é a ul. Porém não temos uma uma ul ainda. Mas temos o elemento pai que é a div com id cursos.
//Então vamos criar a ul e adicionar a div com id cursos.

const cursos = [
    {'nome' : 'HTML-5', 'duracao' : '3 meses'},
    {'nome' : 'CSS-3', 'duracao' : '4 meses'},
    {'nome' : 'Javascript', 'duracao' : '5 meses'},
    {'nome' : 'React', 'duracao' : '5 meses'}
]

//Criando a ul
const ul = document.createElement("ul");

//Adicionando a ul a div com id box-cursos
const boxCursos = document.getElementById("box-cursos");

boxCursos.appendChild(ul);

//Criando os elementos li e adicionando a ul
let indiceClassCurso = 0;
cursos.forEach(curso =>{
    indiceClassCurso++;
    const li = document.createElement("li");
    li.id = `curso-${indiceClassCurso}`;
    li.textContent = `${curso.nome} - ${curso.duracao}`;
    ul.appendChild(li);
});

function cadastrar(nomeCurso,duracaoCurso){
   
    //Recebendo os valores que o usuário digitou
    const novoCurso = {"nome":nomeCurso,"duracao":duracaoCurso};
    //Adicionando o novo curso ao array de cursos
    cursos.push(novoCurso);
    //Adicionando o novo curso a lista de cursos
    const li = document.createElement("li");
    //Adicionando o id ao li
    li.id = `curso-${cursos.length}`;
    //Adicionando o texto ao li
    li.textContent = `${nomeCurso} - ${duracaoCurso}`;
    //Adicionando o li a ul
    ul.appendChild(li);
}

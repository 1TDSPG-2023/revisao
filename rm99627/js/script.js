// // // console.log("Olá Mundo!")

// // //declarando arrays
// // let alunos = ["João","Carlos","Maria"]

// // //imprindo oum indice do array
// // console.log(alunos[0])

// // //utilizando um forEach para imprimir o array
// // alunos.forEach(aluno=>(
// //     console.log(`O nome é ${aluno}`)
// // ))

// // //criando um array de array de alunos
// // //e suas notas
// // let grupos = [["Laura","Leticia"],["Pedro","Gustavo"]]

// // //imprindo o primeiro indice do array
// // let alunos = grupos
// // console.log(grupos[0][0])
// // console.log(alunos[0])

// //declarando um novo aluno ai=o final do array com push();
// let alunos = ["João","Carlos","Maria"]
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

// //Adicionando um novo aluno ao final do array com push();
// console.log("\n");
// alunos.push('Ana');
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Utilizando o método sort para organizar o array em ordem alfabética.
// alunos.sort()
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Utilizando o reverse para reverter a ordem que se apresenta
// alunos.reverse();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Utilizando o pop() para remover o último elemento do array.
// alunos.pop();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Adicionando elementos ao inicio do array com unshift()
// alunos.unshift("Jorge");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Removendo elementos do inicio do array com shift()
// alunos.shift();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Alterando elementos no meio do array com splice(posicao-inicial, posicao-final,novos-valores)
// alunos.splice(1,1,"Adrian");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Removendo elementos no meio do array com splice(posicao-inicial, posicao-final,não passamos valores nesse caso)
// alunos.splice(1,1);
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

const cursos = [
    {"nome" : "HTML-5", "duracao":"3 meses"},
    {"nome" : "CSS-3", "duracao":"4 meses"},
    {"nome" : "Javascript", "duracao":"5 meses"},
    {"nome" : "React", "duracao":"5 meses"}
]

console.log(cursos);

//imprinmindo cada um dos objetos e apenas cada uma das propriedades
const nomeCursos = cursos.map( curso =>(
    console.log(`${curso.nome} - ${curso["duracao"]}`)
))

// //Imprimindo cada um dos objetos e apenas uma das propriedades.
// const nomeCursos = cursos.map( (curso,key) =>(
//     console.log(`${key+1} - ${curso.nome} - ${curso["duracao"]}` )
// ));
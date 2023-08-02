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

const cursos = [
    {'nome' : 'HTML-5', 'duracao' : '3 meses'},
    {'nome' : 'CSS-3', 'duracao' : '4 meses'},
    {'nome' : 'Javascript', 'duracao' : '5 meses'},
    {'nome' : 'React', 'duracao' : '5 meses'}
]

console.log(cursos);

//Imprimindo cada um dos objetos e apenas uma das propriedades 
const nomeCursos = cursos.map( curso =>(

    console.log(`${curso.nome} - ${curso["duracao"]}`)
));
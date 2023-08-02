// console.log('Olá mundo')

// Declarar arrays 
// let alunos = ['Joao', 'Carlos', 'Maria'];

// Imprimindo um índice do array
// console.log(alunos[0]);

// Utilizando um forEach para imprimir o array
// alunos.forEach(aluno=>{
//     console.log(`O nome é ${aluno}`)
// });

// Sem arrow function
// alunos.forEach(function(aluno) {
//     console.log(`O nome é ${aluno}`);
// })

// Criando um array de aluno e suas notas
// let grupos = [["Laura","Leticia"],["Pedro", "Gustavo"]];

// Imprimindo o primeiro índice do array
// console.log(grupos[0][0])

// Ou imprimindo o primeiro índice criando uma variável nova 
// let aluno = (grupos[0][0])
// console.log(aluno)

// Declarar arrays de alunos
// let alunos = ['Joao', 'Carlos', 'Maria'];
// alunos.forEach(aluno=>{
//     console.log(`O nome do aluno é ${aluno}`)
// })

// Adicionando um novo aluno ao final do array com push
// console.log("\n")
// alunos.push('Ana')
// alunos.forEach(aluno=>{
//     console.log(`O nome do aluno é ${aluno}`)
// })

// Colocando em ordem alfabética com o sort 
// console.log("\n")
// alunos.sort()
// alunos.forEach(aluno=>{
//     console.log(`O nome do aluno é ${aluno}`)
// })

// Utilizando o reverse para reverter a ordem que se apresenta // podemos usar sort().reverse() caso queiramos colocar em ordem alfabética e reverter posteriormente
// console.log("\n")
// alunos.reverse()
// alunos.forEach(aluno=>{
//     console.log(`O nome do aluno é ${aluno}`)
// })

// Utilizando o pop para remover o último elemento
// console.log("\n")
// alunos.pop()
// alunos.forEach(aluno=>{
//     console.log(`O nome do aluno é ${aluno}`)
// })

//Adicionando elementos ao inicio do array com unshift()
// console.log("\n");
// alunos.unshift("Jorge");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

//Removendo elementos do inicio do array com shift()
// console.log("\n");
// alunos.shift();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

//Alterando elementos no meio do array com splice(posicao-inicial, posicao-final,novos-valores)
// console.log("\n");
// alunos.splice(1, 1, 'Adrian')
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

//Removendo elementos no meio do array com splice(posicao-inicial, posicao-final, não passamos o terceiro valor nesse caso)
// console.log("\n");
// alunos.splice(1, 1)
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

const cursos = [
    {"nome" : "HTML-5", "duracao":"3 meses"},
    {"nome" : "CSS-3", "duracao":"4 meses"},
    {"nome" : "Javascript", "duracao":"5 meses"},
    {"nome" : "React", "duracao":"5 meses"}
]

console.log(cursos[0]);

//Imprimindo cada um dos objetos e apenas uma das propriedades.
const nomeCursos = cursos.map(curso =>(
    console.log(`${curso.nome} - ${curso["nome"]}` ) // mostrando que temos duas notações diferentes para imprimir o mesmo bjeto
));

// Aqui usando curso e key
const nomeCursos2 = cursos.map( (curso,key) =>(
    console.log(`${key+1} - ${curso.nome} - ${curso["duracao"]}` )
));







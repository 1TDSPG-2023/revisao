// console.log("Olá mundo!")

// //Declarar arrays
// let alunos = ["João","Carlos","Maria"];

// //Imprimindo um indice do array
// console.log(alunos[0])

// //Utilizando um forEach para imprimir o array
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

//Criando um array de array de alunos
//e suas notas
// let grupos = [ ["Laura","Leticia"], ["Pedro","Gustavo"] ]
// //Imprimindo o primeiro indice do array
// let alunos = grupos[0]
// console.log(grupos[0][0])
// console.log(alunos[0])

//Declarar arrays de alunos
let alunos = ["João","Carlos","Maria"];
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
))

//Adicionando um novo aluno ao final do array com push();
console.log("\n");
alunos.push('Ana');
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));

console.log("\n");
//Utilizando o método sort para organizar o array em ordem alfabética.
alunos.sort()
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));

console.log("\n");
//Utilizando o reverse para reverter a ordem que se apresenta
alunos.reverse();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));

console.log("\n");
//Utilizando o pop() para remover o último elemento do array.
alunos.pop();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));

console.log("\n");
//Adicionando elementos ao inicio do array com unshift()
alunos.unshift("Jorge");
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));

console.log("\n");
//Removendo elementos do inicio do array com shift()
alunos.shift();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));


console.log("\n");
//Alterando elementos no meio do array com splice(posicao-inicial, posicao-final,novos-valores)
alunos.splice(1,1,"Adrian");
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));

console.log("\n");
//Removendo elementos no meio do array com splice(posicao-inicial, posicao-final,não passamos valores nesse caso)
alunos.splice(1,1);
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é : ${aluno}`)
));




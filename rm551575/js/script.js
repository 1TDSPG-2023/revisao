// // DECLARAR ARRAYS
// let alunos = ["João","Carlos","Maria"];

// // IMPRIMINDO UM INDICE DO ARRAY
// console.log(alunos[0])

// // UTILIZANDO UM forEach PARA IMPRIMIR O ARRAY
// alunos.forEach(aluno=>{
//     console.log(`O nome é ${aluno}`)
// })

// ======================================================================

// // CRIANDO UM ARRAY DE ARRAY DE ALUNOS E SUAS NOTAS
// let grupos = [ ["Laura","Leticia"],["Pedro","Gustavo"] ]

// // IMPRIMINDO O PRIMEIRO ÍNDICE DE ARRAY

// console.log(grupos[0][0])

// // OU
// let alunos = grupos[0]
// console.log(alunos[1])

// ======================================================================

// DECLARAR ARRAYS DE ALUNOS
let alunos = ["João","Carlos","Maria"];
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// ADICIONANDO UM NOVO ALUNO AO FINAL DO ARRAY COM push();
console.log("\n");
alunos.push("Pedro");
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O MÉTODO sort PARA ORGANIZAR O ARRAY EM ORDEM ALFABÉTICA
alunos.sort();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O reverse PARA REVERTER A ORDEM QUE SE APRESENTA
alunos.reverse();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O pop PARA REMOVER O ÚLTIMO ELEMENTO DO ARRAY
alunos.pop();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O unshift PARA ADICIONAR UM ELEMENTO NO COMEÇO DO ARRAY
alunos.unshift("José");
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O shift PARA REMOVER O PRIMEIRO ELEMENTO DO ARRAY
alunos.shift();
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O MÉTODO splice PARA ALTERAR UM ELEMENTO DE UMA POSIÇÃO ESPECÍFICA DO ARRAY
alunos.splice(1,1,"Jorge");
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));

console.log("\n")

// UTILIZANDO O splice PARA REMOVER UM ELEMENTO DE UMA POSIÇÃO ESPECÍFICA
alunos.splice(1,1);
alunos.forEach(aluno=>(
    console.log(`O nome do aluno é: ${aluno}`)
));
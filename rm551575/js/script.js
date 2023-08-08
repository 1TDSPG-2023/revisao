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

// // DECLARAR ARRAYS DE ALUNOS
// let alunos = ["João","Carlos","Maria"];
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // ADICIONANDO UM NOVO ALUNO AO FINAL DO ARRAY COM push();
// console.log("\n");
// alunos.push("Pedro");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O MÉTODO sort PARA ORGANIZAR O ARRAY EM ORDEM ALFABÉTICA
// alunos.sort();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O reverse PARA REVERTER A ORDEM QUE SE APRESENTA
// alunos.reverse();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O pop PARA REMOVER O ÚLTIMO ELEMENTO DO ARRAY
// alunos.pop();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O unshift PARA ADICIONAR UM ELEMENTO NO COMEÇO DO ARRAY
// alunos.unshift("José");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O shift PARA REMOVER O PRIMEIRO ELEMENTO DO ARRAY
// alunos.shift();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O MÉTODO splice PARA ALTERAR UM ELEMENTO DE UMA POSIÇÃO ESPECÍFICA DO ARRAY
// alunos.splice(1,1,"Jorge");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// console.log("\n")

// // UTILIZANDO O splice PARA REMOVER UM ELEMENTO DE UMA POSIÇÃO ESPECÍFICA
// alunos.splice(1,1);
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é: ${aluno}`)
// ));

// ======================================================================

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

// UTILIZANDO MAP 

const cursos = [
    {"nome" : "HTML-5", "duracao":"3 meses"},
    {"nome" : "CSS-3", "duracao":"4 meses"},
    {"nome" : "Javascript", "duracao":"5 meses"},
    {"nome" : "React", "duracao":"5 meses"}
]

// console.log(cursos);

// //Imprimindo cada um dos objetos e apenas uma das propriedades.
// const nomeCursos = cursos.map((curso,key) =>(
//     console.log(`${key+1} - ${curso.nome} - ${curso["duracao"]}` )
// ));

// Criando a UL
const ul = document.createElement("ul"); // aqui o documento ainda não existe, ele apenas foi criado na memória. 

//Adicionando a ul a div com id box-cursos
const boxCursos = document.getElementById("box-cursos");

boxCursos.appendChild(ul);

// cursos.forEach(curso=>{
    //     const li = document.createElement("li");
    //     li.textContent = `${curso.nome} - ${curso.duracao}`;
    //     ul.appendChild(li);
    // });
    
    
let indiceClassCurso = 0;
cursos.forEach(curso=>{
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
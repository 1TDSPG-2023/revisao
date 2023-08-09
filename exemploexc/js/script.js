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

/*
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
*/


//Este é um array de objetos de cursos onde ele vai popular uma lista ul com os cursos e suas durações.
//Vamos criar novos elementos com o createElement e adicionar ao html com o appendChild
//Precisamos saber quem é o pai do elemento que vamos adicionar, no caso é a ul. Porém não temos uma ul ainda. Mas temos o elemento pai que é a div com id cursos.
//Então vamos criar a ul e adicionar a div com id cursos.



const cursos = [
    {"nome" : "HTML-5", "duracao":"3 meses"},
    {"nome" : "CSS-3", "duracao":"4 meses"},
    {"nome" : "Javascript", "duracao":"5 meses"},
    {"nome" : "React", "duracao":"5 meses"}
] 

//Criando a ul
const ul = document.createElement("ul");

//Adicionando a ul a div com id box-cursos
const boxCursos = document.getElementById("box-cursos");

//Adicionando a ul a div com id box-cursos
boxCursos.appendChild(ul);

//Criando os elementos li e adicionando a ul
let indiceClassCurso = 0;
cursos.forEach(curso=>{
    indiceClassCurso++;
    const li = document.createElement("li");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "x";
    
    //Adicionando um atributo ao botão excluir
    btnExcluir.setAttribute("class","btnExcluir");
    li.id = `curso-${indiceClassCurso}`;
    li.textContent = `${curso.nome} - ${curso.duracao}`;
    li.appendChild(btnExcluir);
    ul.appendChild(li);
});

//Código engessado porque foi utilizado o onclick no html
// function cadastrar(nomeCurso,duracaoCurso){
   
//     //Recebendo os valores que o usuário digitou
//     const novoCurso = {"nome":nomeCurso,"duracao":duracaoCurso};
//     //Adicionando o novo curso ao array de cursos
//     cursos.push(novoCurso);
//     //Adicionando o novo curso a lista de cursos
//     const li = document.createElement("li");
//     //Adicionando o id ao li
//     li.id = `curso-${cursos.length}`;
//     //Adicionando o texto ao li
//     li.textContent = `${nomeCurso} - ${duracaoCurso}`;
//     //Adicionando o li a ul
//     ul.appendChild(li);
// }

//Código dinâmico porque foi utilizado o addEventListener no js
 function cadastrar(){ 
    //Recebendo os valores que o usuário digitou
    const nomeCurso = document.getElementById("idNmCurso").value;
    const duracaoCurso = document.getElementById("idDuracaoCurso").value;
    const novoCurso = {"nome":nomeCurso,"duracao":duracaoCurso};
    //Adicionando o novo curso ao array de cursos
    cursos.push(novoCurso);
    //Adicionando o novo curso a lista de cursos
    const li = document.createElement("li");

    //Criando o botão excluir
    const btnExcluir = document.createElement("button");

    //Adicionando o texto ao botão excluir
    btnExcluir.textContent = "x";

    //Adicionando um atributo ao botão excluir
    btnExcluir.setAttribute("class","btnExcluir");

    //Adicionando o botão excluir ao li
    li.appendChild(btnExcluir);
    
    //Adicionando o id ao li
    li.id = `curso-${cursos.length}`;
    //Adicionando o texto ao li
    li.textContent = `${nomeCurso} - ${duracaoCurso}`;
    //Adicionando o li a ul
    ul.appendChild(li);
}


    const btn = document.querySelector(".btnExcluir");

    //Criando um evento para o botão excluir
    btn.addEventListener("click",(evt)=>{
        
        // ul.removeChild(evt.target.parentNode);
        console.log(evt.target);

    });

//Criando um evento para o botão btnAddCurso
const btnAddCurso = document.getElementById("btnAddCurso");
btnAddCurso.addEventListener("click",cadastrar);


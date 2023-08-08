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

// const cursos = [
//     {"nome" : "HTML-5", "duracao":"3 meses"},
//     {"nome" : "CSS-3", "duracao":"4 meses"},
//     {"nome" : "Javascript", "duracao":"5 meses"},
//     {"nome" : "React", "duracao":"5 meses"}
// ]

// console.log(cursos);

// //imprinmindo cada um dos objetos e apenas cada uma das propriedades
// const nomeCursos = cursos.map( curso =>(
//     console.log(`${curso.nome} - ${curso["duracao"]}`)
// ))

// //Imprimindo cada um dos objetos e apenas uma das propriedades.
// const nomeCursos = cursos.map( (curso,key) =>(
//     console.log(`${key+1} - ${curso.nome} - ${curso["duracao"]}` )
// ));

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

    //Adicionando um evento ao botão excluir para remover o elemento da lista e do array cursos com arrow function.
    btnExcluir.addEventListener("click",()=>{

        //Removendo o elemento da lista
        ul.removeChild(li);

        //Removendo o elemento do array
        cursos.splice(cursos.indexOf(novoCurso),1);
    })
}

//Criando um evento para o botão btnAddCurso
const btnAddCurso = document.getElementById("btnAddCurso");
btnAddCurso.addEventListener("click",cadastrar);
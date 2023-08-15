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



// let nomesfuncionarios = listaSalarios.map((nome)=>{return nome.funcionario});
// console.log(nomesfuncionarios);

// console.log(listaSalarios);



/******************************************************************/
//EXEMPLOS E EXPLICAÇÕES DA AULA


// //Criando um array de objetos de cursos de tecnologia:
// let cursos = [
//     {nome: "Curso de JavaScript", duracao: 40},
//     {nome: "Curso de HTML", duracao: 20},
//     {nome: "Curso de CSS", duracao: 30},
//     {nome: "Curso de React", duracao: 50},
//     {nome: "Curso de Node", duracao: 60},
//     {nome: "Curso de Python", duracao: 70}
// ];

// //Imprimindo o array de objetos no console com o método map:
// //SINTAXE: parametro, indice, o array 
// let cursosNomes = cursos.map((curso,indice,lista) => {
//     console.log(`O elemento ${curso.nome} está na posição ${indice} de uma lista de tamanho  ${lista.length}.`);
//     return curso.nome;
// });
// //Quebrando linha no console:
// console.log("\n");

// let cursosNomes1 = cursos.map((curso,indice) => {
//     console.log(`O elemento ${curso.nome} está na posição ${indice}.`);
//     return curso;
// }).filter((curso) => curso.duracao <= 30);

// //Quebrando linha no console:
// console.log("\n");

// //Imprimindo o array de nomes de cursos
// console.log("**Imprimindo o array de nomes de cursos");
// console.log(cursosNomes)

// //Imprimindo o array de nomes de cursos menores ou iguais a 30 no console:
// console.log("\n");
// console.log("**Imprimindo o array de nomes de cursos menores ou iguais a 30");
// console.log(cursosNomes1);


// let cursosComDuracaoMaiorQue50 = cursos.filter((curso) => curso.duracao <= 50);
// //Imprimindo o array de cursos com duração maior que 50 horas:
// console.log("**Imprimindo o array de cursos com duração maior que 50 horas:");
// console.log(cursosComDuracaoMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");

// //Quero saber a quantidade total de horas de todos os cursos:
// let totalHoras = cursos.reduce((total,curso) => total + curso.duracao,0);
// //Imprimindo o total de horas:
// console.log("**Imprimindo a quantidade total de horas de todos os cursos");
// console.log(totalHoras);
// //Quebrando linha no console:
// console.log("\n");

// //Quero saber a quantidade total de horas de todos os cursos com duração maior que 50 horas:
// let totalHorasMaiorQue50 = cursos.filter((curso) => curso.duracao > 50).reduce((total,curso) => total + curso.duracao,0);
// //Imprimindo o total de horas:
// console.log(totalHorasMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");


// //Verificando se existe algum curso com duração menor que 30 horas:
// let todosTemQueSerMaiorOuIgualQue30 = cursos.every((curso) => curso.duracao >= 30);
// //Imprimindo o resultado:
// console.log(todosTemQueSerMaiorOuIgualQue30);
// //Quebrando linha no console:
// console.log("\n");

// //Verificando se existe algum curso com duração maior que 30 horas:
// let algumTemQueSerMaiorQue30 = cursos.some((curso) => curso.duracao > 30);
// //Imprimindo o resultado:
// console.log(algumTemQueSerMaiorQue30);
// //Quebrando linha no console:
// console.log("\n");

// //Buscando ocorrências de cursos com duração maior que 50 horas com find:
// let cursoComDuracaoMaiorQue50 = cursos.find((curso) => curso.duracao > 50);
// //Imprimindo o resultado:
// console.log(cursoComDuracaoMaiorQue50);
// //Quebrando linha no console:
// console.log("\n");

// //Buscando ocorrências de cursos com includes utilizando o filter:
// let cursosBuscados = cursos.filter((curso) => curso.nome.includes("c"));
// //Imprimindo o resultado:
// console.log(cursosBuscados);
// //Quebrando linha no console:
// console.log("\n");

// //Criando um objeto Pessoa:
// let pessoa = {
//     nome: "João",
//     idade: 25,
//     genero: "M",
//     altura: 1.75,
//     peso: 80,
//     andar: function(){
//         console.log("Andando...");
//     },
//     getNome: function(){
//         return this.nome;
//     },
//     setNome: function(novoNome){
//         this.nome = novoNome;
//     }
// };

// //Criando um novo object pessoa
// let pessoa1 = {
//     nome: 'Jaci',
//     idade: 24,
//     genero:'F',
//     altura: 1.61,
//     peso:50,
//     andar: function(){
//         console.log("andando...")
//     },
//     getNome: function(){
//         return this.nome;
//     },
//     setNome: function(novoNome){
//         return this.nome = novoNome
//     }
// }

// console.log(pessoa1.setNome("João"));

// //criando um novo objeto pessoa com spread operator
// let pessoa2 = {...pessoa, nome:"Mario", idade:30, genero:"M"}
// console.log(pessoa2)

// //Imprimindo o objeto:
// console.log(pessoa);
// //Quebrando linha no console:
// console.log("\n"); 

// //Criando um novo objeto Pessoa com Rest Operator:
// // const{nome, altura, peso, ...resto} = pessoa1;
// //Imprimindo o objeto:
// // console.log(nome, altura, peso, resto);

// //Exemplo de desestruturação de objeto:
//  const{nome, idade, genero, altura, peso} = pessoa;
// //Imprimindo o objeto:
// console.log("* Imprimindo o objeto de desestruturação de objeto*");
// console.log(nome, idade, genero, altura, peso);
// //Quebrando linha no console:
// console.log("\n");



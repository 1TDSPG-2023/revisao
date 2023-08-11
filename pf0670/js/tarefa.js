//Criando um array de objetos de cursos de tecnologia:
let cursos = [
    { nome: "Curso de JavaScript", duracao: 40},
    {nome: "Curso de HTML", duracao: 20},
    {nome: "Curso de CSS", duracao: 30},
    {nome: "Curso de React", duracao: 50},
    {nome: "Curso de Node", duracao: 60},
    {nome: "Curso de Python", duracao: 70}
];

//Imprimindo o array de objetos no console com o método map:
let cursosNomes = cursos.map((curso,indice,lista) => {

    console.log(`O elemento ${curso.nome} está na posição ${indice} de uma lista de tamanho  ${lista.length}.`);
    return curso.nome;
});
//Quebrando linha no console:
console.log("\n");

//Imprimindo o array de nomes de cursos no console:
console.log(cursosNomes);

//Criar a lista de Tarefas array
let listaTarefasArray = [];

const botaoAddtarefa = document.getElementById("btnAddTarefa");

botaoAddtarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    const inputTarefa = document.getElementById("idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.getElementById("lista-tarefas");

    let li = document.createElement("li");

    li.textContent = inputTarefa.value;

    listaTarefasUL.appendChild(li);
    
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{

        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        console.log(conteudoDoLi);

        let index = listaTarefasArray.indexOf(conteudoDoLi[0]);

        listaTarefasArray.splice(index,1);

        evt.target.parentNode.remove();

        console.log(listaTarefasArray);

    })

    inputTarefa.value = "";
    console.log(listaTarefasArray);
});


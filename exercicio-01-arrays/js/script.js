//Criar a lista de Tarefas array
let listaTarefasArray = [];

// Criando botão de adicionar tarefa
const botaoAddtarefa = document.getElementById("btnAddTarefa");

// Adicionando evento ao clicar no botão
botaoAddtarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    // Chamando os inputs do html
    const inputTarefa = document.getElementById("idTarefa");
    const descTarefa = document.getElementById("descTarefa");
    const autorTarefa = document.getElementById("autorTarefa");
    const deptTarefa = document.getElementById("deptTarefa");
    const impTarefa = document.getElementById("impTarefa");

    // Adicionando os inputs ao array de tarefas
    listaTarefasArray.push({
        'tarefa':inputTarefa.value,
        'desc':descTarefa.value,
        'autor':autorTarefa.value,
        'dept':deptTarefa.value,
        'imp':impTarefa.value
    });

    // Adicionando e criando a li com os inputs das tarefas
    const listaTarefasUL = document.getElementById("listaTarefas");
    let li = document.createElement("li");
    li.innerHTML = 
        "Tarefa: " + inputTarefa.value + "<br>" +
        "Descrição: " + descTarefa.value + "<br>" +
        "Autor: " + autorTarefa.value + "<br>" +
        "Departamento: " + deptTarefa.value + "<br>" +
        "Importância: " + impTarefa.value + "<br>"
    ;
    listaTarefasUL.appendChild(li);

    // Criando o botão de excluir
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " x ";
    li.appendChild(botaoExcluir);

    // Adicionando evento de excluir ao botão
    botaoExcluir.addEventListener("click",(evt)=>{

        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        console.log(conteudoDoLi);

        let index = listaTarefasArray.indexOf(conteudoDoLi[0]);

        listaTarefasArray.splice(index,1);

        evt.target.parentNode.remove();

        console.log(listaTarefasArray);

    })

    // Deixando a area de input vazia
    inputTarefa.value = "";
    descTarefa.value = "";
    autorTarefa.value = "";
    deptTarefa.value = "";
    impTarefa.value = "";
    
    console.log(listaTarefasArray);
});

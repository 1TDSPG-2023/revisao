//Criar a lista de Tarefas array
let listaTarefasArray = [];

// Criando botão de adicionar tarefa
const botaoAddtarefa = document.getElementById("btnAddTarefa");
const botaoFiltro = document.getElementById("btnFiltro")

// Adicionando evento ao clicar no botão
botaoAddtarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    // Chamando os inputs do html
    const inputTarefa = document.getElementById("idTarefa");
    const descTarefa = document.getElementById("descTarefa");
    const autorTarefa = document.getElementById("autorTarefa");
    const deptTarefa = document.getElementById("deptTarefa");
    const impTarefa = document.getElementById("impTarefa");
    const valorTarefa = document.getElementById("valorTarefa");
    const duracaoTarefa = document.getElementById("duracaoTarefa");

    // Adicionando os inputs ao array de tarefas
    listaTarefasArray.push({
        'tarefa':inputTarefa.value,
        'desc':descTarefa.value,
        'autor':autorTarefa.value,
        'dept':deptTarefa.value,
        'imp':impTarefa.value,
        'valor':valorTarefa.value,
        'duracao':duracaoTarefa.value,
    });

    // Adicionando e criando a li com os inputs das tarefas
    const listaTarefasUL = document.getElementById("listaTarefas");
    let li = document.createElement("li");
    li.innerHTML = 
        "Tarefa: " + inputTarefa.value + "<br>" +
        "Descrição: " + descTarefa.value + "<br>" +
        "Autor: " + autorTarefa.value + "<br>" +
        "Departamento: " + deptTarefa.value + "<br>" +
        "Importância: " + impTarefa.value + "<br>" +
        "Preço: " + valorTarefa.value + "<br>" +
        "Duração: " + duracaoTarefa.value
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

    botaoFiltro.addEventListener("click", (evt)=>{
        listaTarefasArray.sort((a, b)=> {
            return a.imp - b.imp;
        });

        const listaPorImp = listaTarefasArray.map(desc => listaTarefasArray.desc);
    
        listaPorImp.forEach((desc) => {
            li.textContent = `Descrição: ${desc}`
        })
        li.appendChild(botaoExcluir);
    })
});

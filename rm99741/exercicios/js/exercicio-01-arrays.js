//Inicializando um array vazio
let listaTarefasArray = [];

//Utilizando a constante botaoTarefa para armazenar uma referência a um elemento HTML que possui o atributo id definido como "botaoAddTarefa".
const botaoTarefa = document.getElementById("botaoAddTarefa");

//Adicionei um evento de clique ao elemento botaoTarefa
botaoTarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    //Obtendo referencia ao elemento idTarefa
    const inputTarefa = document.getElementById("idTarefa");

    //Adicionando o valor de campo de entrada de texto
    listaTarefasArray.push(inputTarefa.value);

    //Referencia a lista não ordenada elemento ul
    const listaTarefasUL = document.getElementById("lista-tarefas");

    //Criando um novo elemento de lista li que será usado para exibir uma tarefa na lista
    let li = document.createElement("li");

    //definindo o texto do elemento li com o valor do campo de entrada de texto
    li.textContent = inputTarefa.value;

    //Adicionando o elemento li à lista de tarefas ul
    listaTarefasUL.appendChild(li);
    
    //Criando um novo elemento para excluir a tarefa
    let botaoExcluir = document.createElement("button");

    //Definindo o texto do botão de excluir
    botaoExcluir.textContent = " remover ";

    //Adicionando o botão de excluir como elemento filho para que ele apareça ao lado da tarefa
    li.appendChild(botaoExcluir);

    //Adicionando evento de clique ao botão de excluir
    botaoExcluir.addEventListener("click",(evt)=>{

        //Obtendo o conteúdo do elemento pai do botão (ou seja, o elemento <li>) e dividindo o texto em partes separadas por espaços em branco.
        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        console.log(conteudoDoLi);

        //Buscando o índice da tarefa no array 
        let index = listaTarefasArray.indexOf(conteudoDoLi[0]);
        
        //Removendo a tarefa do array listaTarefasArray com base no índice encontrado.
        listaTarefasArray.splice(index,1);

        // Removendo o elemento <li> da interface quando o botão de exclusão é clicado.
        evt.target.parentNode.remove();

        //Imprimindo o array listaTarefasArray no console para verificar as tarefas armazenadas.
        console.log(listaTarefasArray);

    })

    //Limpando o campo de entrada de texto, preparando para uma nova entrada.
    inputTarefa.value = "";
    console.log(listaTarefasArray);
});
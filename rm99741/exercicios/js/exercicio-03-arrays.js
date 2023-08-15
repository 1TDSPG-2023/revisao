const listaTarefasArray = [];

const botaoTarefa = document.getElementById("botaoAddTarefa");

//Adicionando um evento ao botao tarefa
botaoTarefa.addEventListener("click", (evento) => {
    evento.preventDefault(); //evita o recarregamento da página ao clicar no botão.

//Fazendo referencia aos elementos de entrada através do id
    const inputTarefa = document.getElementById("idTarefa");
    const inputDescricao = document.getElementById("idDescricao");
    const inputAutor = document.getElementById("idAutor");
    const inputDepartamento = document.getElementById("idDepartamento");
    const inputImportancia = document.getElementById("idImportancia");

    //criando objeto tarefa e atribuindo informações
    const tarefa = {
        nome: inputTarefa.value,
        descricao: inputDescricao.value,
        autor: inputAutor.value,
        departamento: inputDepartamento.value,
        importancia: inputImportancia.value
    };

    //Adicionando o objeto tarefa à listaTarefasArray.
    listaTarefasArray.push(tarefa);

    const tabelaTarefas = document.getElementById("tabela-tarefas");

    //Criando novas linhas tr na tabela
    let novaLinha = tabelaTarefas.insertRow();
    
    let celulaNome = novaLinha.insertCell(0);
    let celulaDescricao = novaLinha.insertCell(1);
    let celulaAutor = novaLinha.insertCell(2);
    let celulaDepartamento = novaLinha.insertCell(3);
    let celulaImportancia = novaLinha.insertCell(4);
    let celulaRemover = novaLinha.insertCell(5);

    celulaNome.textContent = tarefa.nome;
    celulaDescricao.textContent = tarefa.descricao;
    celulaAutor.textContent = tarefa.autor;
    celulaDepartamento.textContent = tarefa.departamento;
    celulaImportancia.textContent = tarefa.importancia;

    //Criando um botão remover e checkbox de tarefa concluida
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "remover";

    let tarefaConcluida = document.createElement("input");
    tarefaConcluida.type = "checkbox";
    tarefaConcluida.className = "tarefa-concluida";


//Adiciona um evento para o botão remover que remove a linha da tabela e a tarefa correspondente se a checkbox estiver marcada
    botaoExcluir.addEventListener("click", () => {
        if (tarefaConcluida.checked) {
            const indice = listaTarefasArray.indexOf(tarefa);// Procura o indice da tarefa
            listaTarefasArray.splice(indice, 1);// utilizado splice para remover da lista 
            novaLinha.remove();// remove a linha da tabela
        } else {
            alert("Você precisa marcar a tarefa como concluída para excluí-la.");
        }
    });

// Adiciona o checkbox e o botão "remover" à célula.
    celulaRemover.appendChild(tarefaConcluida);
    celulaRemover.appendChild(botaoExcluir);


// zera os campos de entrada
    inputTarefa.value = "";
    inputDescricao.value = "";
    inputAutor.value = "";
    inputDepartamento.value = "";
    inputImportancia.value = "";
});

console.log(listaTarefasArray)

let tarefas = [];

const botaoAddtarefa = document.getElementById("btnAddTarefa");

botaoAddtarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const inputTarefa = document.getElementById('idTarefa').value;
    const inputDescricao = document.getElementById('idDescricao').value;
    const inputAutor = document.getElementById('idAutor').value;
    const inputDepartamento = document.getElementById('idDepartamento').value;
    const inputImportancia = document.getElementById('idImportancia').value;

    const tarefa = {
        inputTarefa,
        inputDescricao,
        inputAutor,
        inputDepartamento,
        inputImportancia,
    };

    tarefas.push(tarefa);

    const tabelaTarefas = document.getElementById("tabela");
    let td = document.createElement("td");
    td.textContent = inputTarefa + inputDescricao + inputAutor + inputDepartamento + inputImportancia;
    tabelaTarefas.appendChild(td);
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " x ";
    td.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{
        let conteudoDoTr = evt.target.parentNode.textContent.split(" ");
        console.log(conteudoDoTr);
        let index = tarefas.indexOf(conteudoDoTr[0]);
        tarefas.splice(index,1);
        evt.target.parentNode.remove();
        console.log(tarefas);

     })

    // inputTarefa.value = "";
    console.log(tarefas);
});

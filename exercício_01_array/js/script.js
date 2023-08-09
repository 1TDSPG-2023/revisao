const task = []


function addTarefa(){
    let inputeTarefas = document.getElementById("barra_tarefas");
    let novaTarefa = inputeTarefas.value;
    task.push(novaTarefa);
    ColocarTarefaLista();
}


function ColocarTarefaLista(){
    const listaTarefas = document.getElementById("lista_tarefas");
    listaTarefas.innerHTML = '';
    task.forEach(function(barra_tarefas,index){
        const pegarItem= document.createElement('li');
        pegarItem.textContent=barra_tarefas


    const deletarBotao = document.createElement("button");
    deletarBotao.textContent = 'excluir';
    deletarBotao.addEventListener('click', function(){
        removerTarefa(index);
    });

    pegarItem.appendChild(deletarBotao);
    listaTarefas.appendChild(pegarItem);

    });

    function removerTarefa(index){
        task.splice(index,1);
        ColocarTarefaLista()
    }
}






const task = []
/*tenho que colocar o valor e a duração semelhante ao botão excluir, pois assim o usuário decidira quando vai colocar*/ 

function addTarefa(){
    let novaTarefa = document.getElementById("barra_tarefas").value;
    let novoAutor = document.getElementById("autorInput").value;
    let novoDept = document.getElementById("deptInput").value;
    let novoImportancia = document.getElementById("importanciaSelect").value;
    let novaDescricao = document.getElementById("descriInput").value;
    task.push({tarefa: novaTarefa, Autor: novoAutor, Dept: novoDept, importancia: novoImportancia,
    Descricao: novaDescricao, valor: null});
    ColocarTarefaLista();

}


function ColocarTarefaLista(){
    const listaTarefas = document.getElementById("lista_tarefas");
    listaTarefas.innerHTML = '';
    task.forEach(function(item, index){
        const pegarItem= document.createElement('li');
        pegarItem.textContent = `Tarefa: ${item.tarefa}, Autor: ${item.Autor}, Dept: ${item.Dept}
        Importância: ${item.importancia}, Descrição: ${item.Descricao}, Valor: ${item.valor}`;
    


    const deletarBotao = document.createElement("button");
    deletarBotao.textContent = 'Remover';
    deletarBotao.style.cssText = `
    background-color: #4742ac;
    border-radius: 15px;
    padding: 5px;
    color: aliceblue;
    border: none;`;
    deletarBotao.addEventListener('click', function(){
        removerTarefa(index);
    });


    const valorprompt = document.createElement('button');
    valorprompt.textContent = 'mudar valor';
    valorprompt.addEventListener('click', function(){
        const descricao = item.Descricao
        valorInput(descricao)
    });




    pegarItem.appendChild(deletarBotao);
    listaTarefas.appendChild(pegarItem);
    pegarItem.appendChild(valorprompt);


    });

    function removerTarefa( index){
        task.splice(index,1);
        ColocarTarefaLista()
    }



}

function valorInput(descricao) {
    const index = task.findIndex(item => item.Descricao === descricao);
    if (index !== -1) {
        const novoValor = prompt("Digite o novo valor:");
        task[index].valor = novoValor;
        ColocarTarefaLista();
    } else {
        console.log("Tarefa não encontrada");
    }


}


function listarDescricoes() {
    const listaDescricoes = document.getElementById("lista_descricoes");
    listaDescricoes.innerHTML = '';

    const descricoes = task.map(item => item.Descricao);
    descricoes.forEach(descricao => {
        const itemDescricao = document.createElement('li');
        itemDescricao.textContent = descricao;
        listaDescricoes.appendChild(itemDescricao);
    });
}







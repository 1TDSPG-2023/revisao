let listaTarefas = [];

let botaoAdicionar = document.getElementById("btnAdicionar");
botaoAdicionar.addEventListener("click", function(){
    let nmTarefa = document.getElementById("txtTarefa");
    if (nmTarefa.value != ""){
        listaTarefas.push(nmTarefa.value);
        atualizarLista();
        nmTarefa.value = "";
        console.log(listaTarefas);
    }else{
        alert("Nenhum valor foi adicionado");
    }
});

let lista = document.getElementById("lista");
function atualizarLista() {
    lista.innerHTML = "";
    listaTarefas.forEach((tarefa, i) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = `${tarefa}`;
        lista.appendChild(novaTarefa);

        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "X";
        btnExcluir.setAttribute("id", "btnExcluir");
        btnExcluir.addEventListener("click", function() {
            listaTarefas.splice(i, 1);
            atualizarLista();
        });
        novaTarefa.appendChild(btnExcluir);
    })
}
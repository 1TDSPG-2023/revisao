let listaTarefas = [];
let conteudoListaTarefas = document.getElementById("conteudoListaTarefas");

let botaoAdicionar = document.getElementById("btnAdicionar");
botaoAdicionar.addEventListener("click", function(){
    let desc = document.getElementById("txtDesc");
    let autor = document.getElementById("txtAutor");
    let depto = document.getElementById("txtDepto");
    let importancia = document.getElementById("txtImport");

    let tarefa = {
        descricao: `${desc.value}`,
        autor: `${autor.value}`,
        departamento: `${depto.value}`,
        importancia: `${importancia.value}`
    }

    listaTarefas.push(tarefa);
    console.log(listaTarefas);
        
    let valores = [ 
        `${tarefa.descricao}`,
        `${tarefa.autor}`,
        `${tarefa.departamento}`,
        `${tarefa.importancia}`
    ]

    let novaTarefa = document.createElement("tr");
    conteudoListaTarefas.appendChild(novaTarefa);

    valores.forEach((valor) => {
        let novaCelula = document.createElement("td");
		novaCelula.textContent = valor;
		novaTarefa.appendChild(novaCelula);
        })

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "X";
    botaoExcluir.addEventListener("click", excluirTarefa);
    novaTarefa.appendChild(botaoExcluir);
});

function excluirTarefa(evt) {
	const botaoExcluir = evt.target;
	const tarefa = botaoExcluir.parentNode;

	const index = Array.from(conteudoListaTarefas.children).indexOf(tarefa);
	listaTarefas.splice(index, 1);
    
	tarefa.remove();
}

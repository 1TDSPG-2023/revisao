let conteudoPrincipal = document.getElementById("conteudoPrincipal");
let listaTarefas = [];
let listaImpressa = document.getElementById("listaDeTarefas");
let corpoListaImpressa = document.getElementById("corpoListaDeTarefas");
const descricaoDaTarefa = document.getElementById("inputDescricaoTarefa");
const autorDaTarefa = document.getElementById("inputAutorTarefa");
const departamentoDaTarefa = document.getElementById("inputDepartamentoTarefa");
const importanciaDaTarefa = document.getElementById("inputImportanciaTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");
const botaoCriarListaImportancia = document.getElementById(
	"botaoCriarListaPorImportancia"
);

botaoAdicionar.addEventListener("click", adicionarTarefa);
botaoCriarListaImportancia.addEventListener("click", criarListaPorImportancia);

function adicionarTarefa() {
	if (
		descricaoDaTarefa.value != "" &&
		autorDaTarefa.value != "" &&
		departamentoDaTarefa.value != "" &&
		importanciaDaTarefa.value != ""
	) {
		// Adicionar tarefa à lista do backend
		const tarefa = {
			descricao: `${descricaoDaTarefa.value}`,
			autor: `${autorDaTarefa.value}`,
			departamento: `${departamentoDaTarefa.value}`,
			importancia: `${importanciaDaTarefa.value}`,
		};
		console.log(tarefa);
		listaTarefas.push(tarefa);
		console.log(listaTarefas);

		// Adicionar tarefa à lista impressa na tela
		const valoresAAdicionar = [
			`${tarefa.descricao}`,
			`${tarefa.autor}`,
			`${tarefa.departamento}`,
			`${tarefa.importancia}`,
            "",
            ""
		];

		const novaTarefa = document.createElement("tr");
		corpoListaImpressa.appendChild(novaTarefa);

		valoresAAdicionar.forEach((valor) => {
			const novaCelula = document.createElement("td");
			novaCelula.textContent = valor;
			novaTarefa.appendChild(novaCelula);
		});

		// Adicionar botão para excluir tarefa
		const botaoExcluir = document.createElement("button");
		botaoExcluir.textContent = "Excluir";
		botaoExcluir.addEventListener("click", excluirTarefa);
		novaTarefa.appendChild(botaoExcluir);

        // Adicionar botão para adicionar campo valor
        const botaoAdicionarValor = document.createElement("button");
        botaoAdicionarValor.textContent = "Adicionar valor";
        botaoAdicionarValor.addEventListener("click", adicionarValor);
        novaTarefa.appendChild(botaoAdicionarValor);

        // Adicionar botão para adicionar campo duração
        const botaoAdicionarDuracao = document.createElement("button");
        botaoAdicionarDuracao.textContent = "Adicionar duração";
        botaoAdicionarDuracao.addEventListener("click", adicionarValor);
        novaTarefa.appendChild(botaoAdicionarDuracao);

		// Limpar conteúdo dos campos
		const campos = [
			descricaoDaTarefa,
			autorDaTarefa,
			departamentoDaTarefa,
			importanciaDaTarefa,
		];
		for (let campo of campos) {
			campo.value = "";
		}

		// Foco no campo de input inicial
		campos[0].focus();
	} else {
		alert(
			"Por favor, preencha todos os campos obrigatórios para adicionar a tarefa."
		);
	}
}

function excluirTarefa(evt) {
	// Capturar a tarefa que deve ser excluída e o botão correspondente a ela
	const botaoExcluir = evt.target;
	const tarefa = botaoExcluir.parentNode;

	//Excluir tarefa da lista do backend
	const index = Array.from(corpoListaImpressa.children).indexOf(tarefa);
	listaTarefas.splice(index, 1);
    
	//Excluir tarefa da lista impressa na tela
	tarefa.remove();
}

function criarListaPorImportancia() {
    function compararPorImportancia(tarefa1, tarefa2) {
        return tarefa1.importancia - tarefa2.importancia;
	}
    
	listaTarefasPorImportancia = listaTarefas.map((tarefa) => tarefa);
    
	listaTarefasPorImportancia.sort(compararPorImportancia).reverse();
    
	conteudoPrincipal.innerHTML += 
    `<table>
    <caption>Lista de Tarefas por Importância</caption>
    <thead>
    <th>Descrição</th>
    </thead>
    <tbody id="corpoListaDeTarefasPorImportancia">
    
    </tbody>
    </table>`;
    
    const corpoListaImpressaPorImportancia = document.getElementById("corpoListaDeTarefasPorImportancia");
    let listaDeDescricoes = [];
    
    listaTarefasPorImportancia.forEach(tarefa => {
        listaDeDescricoes.push(tarefa.descricao);        
    });
    
    console.log(listaDeDescricoes);
    
    listaDeDescricoes.forEach(descricao => {
        let novaTarefa = document.createElement("tr");
        corpoListaImpressaPorImportancia.appendChild(novaTarefa);
        
        let novaCelula = document.createElement("td");
        novaCelula.textContent = descricao;
        novaTarefa.appendChild(novaCelula);
    })
}

function adicionarValor(evt){
    const botaoAdicionarValor = evt.target;
    const tarefa = botaoAdicionarValor.parentNode;
    
    const index = Array.from(corpoListaImpressa.children).indexOf(tarefa);
    console.log(index);
    
    const valor = prompt("Digite o valor para a tarefa: ");
    
    listaTarefas[index].valor = valor;

    const novaCelula = document.createElement("td");
    novaCelula.textContent = valor;

    const linha = document.querySelector(`tr:nth-child(${index + 1})`);
    const primeiroBotao = linha.querySelector("button:first-child");
    linha.insertBefore(novaCelula, primeiroBotao);
}

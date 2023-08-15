const listaTarefas = [];

const form = document.getElementById("formularioTarefas");
const tabela = document.getElementById("listaTarefas");
const listaPorImportancia = document.getElementById("listaPorImportancia"); // Adicionado

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;
    const departamento = document.getElementById("departamento").value;
    const importancia = document.getElementById("importancia").value;

    const novaTarefa = {
        descricao: descricao,
        autor: autor,
        departamento: departamento,
        importancia: importancia,
    };

    listaTarefas.push(novaTarefa);
    atualizarTabela();
    form.reset();
});

function criarLinhaTabela(tarefa, index) {
    return `
        <tr>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.autor}</td>
            <td>${tarefa.departamento}</td>
            <td>${tarefa.importancia}</td>
            <td>
                <input type="text" id="valor" name="valor" required>
            </td>
            <td>
                <button class="excluir" data-index="${index}">Excluir</button>
            </td>
        </tr>
    `;
}

function atualizarTabela() {
    tabela.innerHTML = '';

    listaTarefas.forEach((tarefa, index) => {
        tabela.innerHTML += criarLinhaTabela(tarefa, index);
    });

    const botoesExcluir = tabela.querySelectorAll(".excluir");
    botoesExcluir.forEach((botao) => {
        botao.addEventListener("click", function () {
            const index = parseInt(botao.getAttribute("data-index"));
            listaTarefas.splice(index, 1);
            atualizarTabela();
        });
    });
}


function criarListaPorImportancia() {
    listaPorImportancia.innerHTML = '';

    let tarefasPorImportancia = listaTarefas.sort((a, b) => {
        const ordem = {"Alta" : 1, "Média" : 2, "Baixa" : 3}
        return ordem[a.importancia] - ordem[b.importancia]
    })
    

    tarefasPorImportancia.forEach((obj) => {
        const li = document.createElement("li");
        li.textContent = obj.descricao;
        listaPorImportancia.appendChild(li);
    });
}




const btnListarPorImportancia = document.getElementById("btnListaPorImportancia");
btnListarPorImportancia.addEventListener("click", criarListaPorImportancia);

// let salarios = [

//     {salario: 1200},
//     {salario: 1800},
//     {salario: 2200},
//     {salario: 2500},
//     {salario: 10000},
//     {salario: 900},
//     {salario: 1900},
//     {salario: 2000},
//     {salario: 2300},
//     {salario: 1000}

// ];


// let aumentoSalario = salarios.map((salario => {
//     if (salario.salario <= 2000) {
//         return salario.salario * 1.15;
//     }
//     else {
//         return salario.salario * 1.10;
//     }
// }));

// console.log(aumentoSalario);

// let salariosMaiorQue2500 = aumentoSalario.filter((salario) => salario > 2500);
// console.log(salariosMaiorQue2500);

// let totalSalariosMaiorQue2500 = salariosMaiorQue2500.reduce((total, salario) => total + salario, 0);
// console.log(totalSalariosMaiorQue2500);



let listaTarefas = [];

const botaoAddtarefa = document.getElementById("btnAddTarefa");

botaoAddtarefa.addEventListener("click", (evento) => {

    evento.preventDefault();
    const inputTarefa = document.getElementById("idTarefa").value;
    const inputDescricao = document.getElementById("idDescricao").value;
    const inputAutor = document.getElementById("idAutor").value;
    const inputDepartamento = document.getElementById("idDepartamento").value;
    const inputImportancia = document.getElementById("idImportancia").value;
    const inputValor = document.getElementById("idValor").value;
    const inputDuracao = document.getElementById("idDuracao").value;
    

    if (inputTarefa == "" || inputDescricao == "" || inputAutor == "" || inputDepartamento == "" || inputImportancia == ""){
        alert("Preencha todos os campos obrigatorios para o envio de uma nova tarefa!")
    } else {
        const tarefa = {
            tarefa: inputTarefa,
            descricao: inputDescricao,
            autor: inputAutor,
            departamento: inputDepartamento,
            importancia: inputImportancia,
            valor: inputValor,
            duracao: inputDuracao
        };
        
        listaTarefas.push(tarefa);
    
        let tabelaTarefas = document.getElementById("tabela-tarefas");
    
        let valoresTarefa = [`${tarefa.tarefa}`,`${tarefa.descricao}`,`${tarefa.autor}`,`${tarefa.departamento}`,`${tarefa.importancia}`,`${tarefa.valor}`,`${tarefa.duracao}`];
    
        let novaTarefa = document.createElement("tr");
        tabelaTarefas.appendChild(novaTarefa);
    
        valoresTarefa.forEach(valor => {
            let novaColuna = document.createElement("td");
            novaColuna.textContent = valor;
            novaTarefa.appendChild(novaColuna);
        });
       
        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = " x ";
        novaTarefa.appendChild(botaoExcluir);
    
        botaoExcluir.addEventListener("click",(evento)=>{
    
            let conteudoTd = evento.target.parentNode.textContent.split(" ");
            let index = listaTarefas.indexOf(conteudoTd[0]);
            listaTarefas.splice(index,1);
            evento.target.parentNode.remove();
            console.log(listaTarefas);
    
        });
    
        inputTarefa.value = "";
        console.log(listaTarefas);
    }});

const botaoListaImportancia = document.getElementById("btnListaImportancia");
botaoListaImportancia.addEventListener("click", (event) => {
    event.preventDefault();
    
    const organizarTarefa = listaTarefas.slice().sort((a, b) => {
    return b.importancia - a.importancia;
    });
    
    const listaOrganizada = organizarTarefa.map((tarefa) => {
        return `<li>Descrição: ${tarefa.descricao} - Importancia: ${tarefa.importancia}</li>`
    });
    
    const listaImportancia = document.getElementById("lista-importancia");
    listaImportancia.innerHTML = `<ul>${listaOrganizada.join("")}</ul>`;


});

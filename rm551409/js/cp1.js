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

botaoAddtarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();
    const inputTarefa = document.getElementById("idTarefa").value;
    const inputDescricao = document.getElementById("idDescricao").value;
    const inputAutor = document.getElementById("idAutor").value;
    const inputDepartamento = document.getElementById("idDepartamento").value;
    const inputImportancia = document.getElementById("idImportancia").value;

    const tarefa = {
        inputTarefa,
        inputDescricao,
        inputAutor,
        inputDepartamento,
        inputImportancia
    };

    listaTarefas.push(tarefa);

    const tabelaTarefas = document.getElementById("tabela-tarefas");
    let td = document.createElement("td");
    td.textContent = inputTarefa;
    tabelaTarefas.appendChild(td);
   
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " x ";
    td.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{

        let conteudoTd = evt.target.parentNode.textContent.split(" ");
        let index = listaTarefas.indexOf(conteudoTd[0]);
        listaTarefas.splice(index,1);
        evt.target.parentNode.remove();
        console.log(listaTarefas);

    })

    inputTarefa.value = "";
    console.log(listaTarefas);
});
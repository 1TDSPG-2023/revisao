const tarefas = [];

function adicionarTarefa() {
    const novaTarefa = document.getElementById("tarefaInput").value;
    tarefas.push(novaTarefa);
    atualizarListaTarefas();
    document.getElementById("tarefaInput").value = "";
    console.log(tarefas);
}

function atualizarListaTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];
        const item = document.createElement("li");
        item.textContent = tarefa;

        const removerBotao = document.createElement("button");
        removerBotao.textContent = "Remover";
        removerBotao.classList.add("remover");
        removerBotao.addEventListener("click", () => removerTarefa(i));

        item.appendChild(removerBotao);
        listaTarefas.appendChild(item);
    }

    const removerPrimeiroBotao = document.createElement("button");
    removerPrimeiroBotao.textContent = "Remover Primeira";
    removerPrimeiroBotao.addEventListener("click", () => removerPrimeiraTarefa());

    const removerUltimoBotao = document.createElement("button");
    removerUltimoBotao.textContent = "Remover Última";
    removerUltimoBotao.addEventListener("click", () => removerUltimaTarefa());

    listaTarefas.prepend(removerPrimeiroBotao);
    listaTarefas.appendChild(removerUltimoBotao);
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarListaTarefas();
}

function removerPrimeiraTarefa() {
    tarefas.shift();
    atualizarListaTarefas();
}

function removerUltimaTarefa() {
    tarefas.pop();
    atualizarListaTarefas();
}

function verificarTecla(event) {
    if (event.key === "Enter") {
        adcionarTarefa();
        event.preventDefault();
    }
}

document.getElementById("tarefaInput").addEventListener("keydown", verificarTecla);

// // ======================================================================================================

// let cursos = [
//     {nome: "HTML", duracao: 40},
//     {nome: "CSS", duracao: 50},
//     {nome: "JavaScript", duracao: 60},
//     {nome: "React", duracao: 70},
//     {nome: "Node", duracao: 80}
// ];


// let cursosNomes = cursos.map((curso,indice,lista) => {
//     console.log(`O elemento curso de ${curso.nome} está na posição ${indice} de uma lista com tamanho ${lista.length}`);
//     return curso.nome;
// });

// console.log("\n");

// console.log(cursosNomes);

// // ======================================================================================================

// let cursosComDuracaoMaiorQue50 = cursos.filter((curso) => curso.duracao > 50);

// console.log(cursosComDuracaoMaiorQue50);

// console.log("\n");

// // ======================================================================================================

// let totalHoras = cursos.reduce((total, curso) => total + curso.duracao, 0);

// console.log(totalHoras);

// console.log("\n");

// // ======================================================================================================

// let totalHorasMaiorQue50 = cursos.filter((curso) => curso.duracao > 50).reduce((total, curso) => total + curso.duracao, 0);

// console.log(totalHorasMaiorQue50);

// console.log("\n");

// // ======================================================================================================

// let todosTemQueSerMaiorQue50 = cursos.every((curso) => curso.duracao >= 50);

// console.log(todosTemQueSerMaiorQue50);

// console.log("\n");

// // ======================================================================================================

// let algumTemQueSerMaiorQue50 = cursos.some((curso) => curso.duracao >= 50);

// console.log(algumTemQueSerMaiorQue50);

// console.log("\n");

// // ======================================================================================================

// let cursoComDuracaoMaiorQue50 = cursos.find((curso) => curso.duracao > 50);

// console.log(cursoComDuracaoMaiorQue50);

// console.log("\n");

// // ======================================================================================================

// let cursosBuscados = cursos.filter((curso) => curso.nome.includes("CSS"));

// console.log(cursosBuscados);

// console.log("\n");

// // ======================================================================================================

// let pessoa = {
//     nome: "João",
//     idade: 20,
//     altura: 1.80,
//     genero: "M",
//     peso: 80,
//     andar: function() {
//         console.log("Andando");
//     },
//     getNome: function() {
//         return this.nome;
//     },
//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     }
// };

// console.log(pessoa);
// console.log("\n");

// // Criando um novo objeto Pessoa com o Spread Operator
// let pessoa2 = {...pessoa, nome: "Maria", genero: "F"};
// console.log(pessoa2);
// console.log("\n");

// // Criando um novo objeto Pessoa com o Rest Operator
// let pessoa3 = {nome,altura,peso, ...resto} = pessoa2;
// console.log(nome,altura,peso,resto);
// console.log("\n");

// // Exemplo de desestruturação de objeto
// const{nome,idade,genero,altura,peso} = pessoa;
// console.log(nome,idade,genero,altura,peso);
// console.log("\n");

// // ======================================================================================================

let salarios = [1500, 2200, 1800, 2500, 1900, 2800, 2100, 1700, 2300, 2000];

// O MÉTODO MAP PERCORRE CADA ITEM DO ARRAY E APLICA A LÓGICA DE AUMENTO PERCENTUAL NO SALÁRIO
let salariosComAumento = salarios.map(salario => {
    if (salario <= 2000) {
        return salario * 1.15;
    } else {
    return salario * 1.10;
    }
});

console.log(salariosComAumento);

// O MÉTODO FILTER PERCORRE CADA ITEM DO ARRAY E FILTRA APENAS OS SALÁRIOS ACIMA DE 2500
let salariosSuperiores2500 = salariosComAumento.filter(salario => salario > 2500);
console.log(salariosSuperiores2500);

// O MÉTODO REDUCE PERCORRE CADA ITEM DO ARRAY E ACUMULA O VALOR DA SOMA COMEÇANDO COM 0
let somaSalarios = salariosSuperiores2500.reduce((total, salario) => total + salario, 0);
console.log(`Soma dos salários: ${somaSalarios}`);

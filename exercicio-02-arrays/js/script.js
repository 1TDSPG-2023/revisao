// const vivos = [];
// const array1 = [];

// function reviverPessoal(){
//   vivos.push("Napoleão Bonaparte");
//   vivos.push("Gregório de Matos");
//   vivos.push("Ricardo Coração de Leão");
//   vivos.unshift("Camponês Comum");
// }

// const flechaArabeNaGuerra = (condição) =>
//   condição ? vivos.pop() : vivos.shift();

// function naoParticiparCruzada() {
//   vivos.splice(0, 2);
// }

// reviverPessoal()
// console.log(vivos);

// flechaArabeNaGuerra(true);
// console.log(vivos);

// flechaArabeNaGuerra(false);
// console.log(vivos);

// naoParticiparCruzada();
// console.log(vivos);

// /* Modificação de dom :) */

// const ul = document.createElement("ul");
// const corpo = document.querySelector("body");

// corpo.appendChild(ul);

// const criarListinha = () => {
//   const li = document.createElement("li");
//   const botao = document.createElement("button");
//   botao.className = "deletar";
//   let input = document.getElementById("input").value;
//   array1.push(input);
//   console.log(`Foi adicionado ${input}`);
//   console.log(`Lista atual: ${array1} \n `)
//   if (input === "") return null;
//   li.innerText = input;
//   li.appendChild(botao);
//   return li;
// };

// function adicionarListinha() {
//   const lista = criarListinha();
//   ul.appendChild(lista);
//   document.getElementById("input").value = "";
// }

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("deletar")) {
//     let pai = event.target.parentNode;
//     let indexArray = array1.indexOf(pai.innerText);
//     array1.splice(indexArray, 1);
//     ul.removeChild(pai);
//     console.log(`Sobraram os elementos  ${array1} \n `)
//   }
// });

// document.addEventListener("click", (event) => {
//   if (event.target.id === "button") {
//     adicionarListinha();
//   }
// });

const salarios = [
  { salario: 1000 },
  { salario: 2000 },
  { salario: 4000 },
  { salario: 5000 },
  { salario: 6000 },
  { salario: 7000 },
  { salario: 8000 },
  { salario: 9000 },
  { salario: 10000 },
  { salario: 3000 },
];

let aumentarSalario = (array) =>
  array.map((objeto) => {
    return objeto.salario >= 2000
      ? objeto.salario * 1.1
      : objeto.salario * 1.15;
  });

const novosSalarios = aumentarSalario(salarios);
console.log(novosSalarios);

let selecionarSalarios = (array) => {
  return array.filter((objeto) => objeto.salario > 2500);
};

const novosSalarios2 = selecionarSalarios(salarios);
console.log(novosSalarios2);

let somarSalarios = (array) => {
  return array.reduce((acumulador, objeto) => acumulador + objeto.salario, 0);
};

const totalSalarios = somarSalarios(novosSalarios2);
console.log(`${totalSalarios}`);

/* BORA PRA CIMA */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const tarefas = [];

function adicionarTarefa() {
  const descricao = document.getElementById("descricao").value;
  const autor = document.getElementById("autor").value;
  const departamento = document.getElementById("departamento").value;
  const importancia = document.getElementById("importancia").value;
  const duracao = document.getElementById("duracao").value;
  const valor = document.getElementById("valor").value;

  if (
    descricao === "" ||
    autor === "" ||
    departamento === "" ||
    importancia === ""
  ) {
    alert("Preencha os quatro primeiros campos obrigatórios!");
    return;
  }

  let encontrouDescricao = false;

  document.querySelectorAll(".descricao").forEach((element) => {
    if (element.textContent === descricao) {
      encontrouDescricao = true;
      let linhaExistente = element.parentNode;
      const tdDuracao = linhaExistente.querySelector(".duracao");
      const tdValor = linhaExistente.querySelector(".valor");

      tdDuracao.textContent = duracao;
      tdValor.textContent = valor;
    }
  });

  document.querySelector(".importancia").

  if (!encontrouDescricao) {
    const tabela = document.querySelector("table");
    const novaLinha = tabela.insertRow();

    //cria o html
    novaLinha.innerHTML = `
      <td class="descricao">${descricao}</td>
      <td class="autor">${autor}</td>
      <td class="departamento">${departamento}</td>
      <td class="importancia">${importancia}</td>
      <td class="duracao">${duracao}</td>
      <td class="valor">${valor}</td>
      <td><button onclick="deletarTarefa(this)">X</button></td>
    `;
    //alterando o objeto, caso precise futuramente
    tarefas.push({
      descricao,
      autor,
      departamento,
      importancia,
      duracao,
      valor,
    });
  }
}

let adicionar = document.querySelector("#enviarTarefa");
adicionar.addEventListener("click", (event) => {
  event.preventDefault();
  adicionarTarefa();
});

function deletarTarefa(button) {
  const table = button.parentNode.parentNode.parentNode;
  const linha = button.parentNode.parentNode;
  table.removeChild(linha);
}

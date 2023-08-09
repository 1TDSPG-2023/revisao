const vivos = [];
const array1 = [];

function reviverPessoal(){
  vivos.push("Napoleão Bonaparte");
  vivos.push("Gregório de Matos");
  vivos.push("Ricardo Coração de Leão");
  vivos.unshift("Camponês Comum");
}

const flechaArabeNaGuerra = (condição) =>
  condição ? vivos.pop() : vivos.shift();

function naoParticiparCruzada() {
  vivos.splice(0, 2);
}

reviverPessoal()
console.log(vivos);

flechaArabeNaGuerra(true);
console.log(vivos);

flechaArabeNaGuerra(false);
console.log(vivos);

naoParticiparCruzada();
console.log(vivos);



/* Modificação de dom :) */

const ul = document.createElement("ul");
const corpo = document.querySelector("body");

corpo.appendChild(ul);

const criarListinha = () => {
  const li = document.createElement("li");
  const botao = document.createElement("button");
  botao.className = "deletar";
  botao.innerText = "X";
  let input = document.getElementById("input").value;
  array1.push(input);
  console.log(`Foi adicionado ${input}`);
  console.log(`Lista atual: ${array1}`)
  if (input === "") return null;
  li.innerText = input;
  li.appendChild(botao);
  return li;
};

function adicionarListinha() {
  const lista = criarListinha();
  ul.appendChild(lista);
  document.getElementById("input").value = "";
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("deletar")) {
    let pai = event.target.parentNode;
    ul.removeChild(pai);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "button") {
    adicionarListinha();
  }
});

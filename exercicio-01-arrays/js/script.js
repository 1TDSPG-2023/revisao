const vivos = [];
vivos.push("Napoleão Bonaparte");
vivos.push("Gregório de Matos");
vivos.push("Ricardo Coração de Leão");
vivos.unshift("Camponês Comum");

console.log(vivos);

const flechaArabeNaGuerra = (condição) =>
  condição ? vivos.pop() : vivos.shift();

function naoParticiparCruzada() {
  vivos.splice(0, 2);
}

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
  if (input === "") return null;
  li.innerText = input;
  li.appendChild(botao);
  return li;
};

function adicionarListinha() {
  const lista = criarListinha();
  ul.appendChild(lista);
  console.log(`adicionando ${lista.innerText}`);
  document.getElementById("input").value = "";
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("deletar")) {
    let pai = event.target.parentNode;
    ul.removeChild(pai);
  }
  console.log(`Não é o botão de deletar`);
});

document.addEventListener("click", (event) => {
  if (event.target.id === "button") {
    adicionarListinha();
  }
});

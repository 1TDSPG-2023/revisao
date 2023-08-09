let lista = [];
const input_button = document.getElementById('input_button')

function adicionar() {
  /* Adiciona o que está no input e põe um focus nele */
  let input = document.getElementById("input");
  let valor = input.value;
  if (valor === "") {
    input.classList.add("input_error");
    alert("Digite um item para adicionar na lista!");
    return;
  }
  else {
    lista.push(valor);
    input.value = "";
    input.focus();
    atualizar();
  }
}

function atualizar() {
  /* Atualiza a lista */
  let listaHtml = document.getElementById("lista");
  listaHtml.innerHTML = "";
  console.log(lista)
  for (let i = 0; i < lista.length; i++) {
    let itemHtml = document.createElement("li");
    let ordemButtonsHtml = document.createElement("div");
    let subirButtonHtml = document.createElement("button");
    let descerButtonHtml = document.createElement("button");
    let itemTextHtml = document.createElement("p");
    let removerButtonHtml = document.createElement("button");
    
    itemHtml.classList.add("item");
    ordemButtonsHtml.classList.add("ordem_buttons");
    subirButtonHtml.classList.add("list_buttons");
    descerButtonHtml.classList.add("list_buttons");
    itemTextHtml.classList.add("item_text");
    removerButtonHtml.classList.add("list_buttons");
    
    subirButtonHtml.textContent = "↑";
    descerButtonHtml.textContent = "↓";
    itemTextHtml.textContent = lista[i];
    removerButtonHtml.textContent = "X";
    
    subirButtonHtml.addEventListener("click", function() {
        subirNaLista(i);
    });
    
    descerButtonHtml.addEventListener("click", function() {
        descerNaLista(i);
    });
    
    removerButtonHtml.addEventListener("click", function() {
        remover(i);
    });
    
    ordemButtonsHtml.appendChild(subirButtonHtml);
    
    if (i === 0) {
        if (lista.length === 1) {
            subirButtonHtml.disabled = true;
            descerButtonHtml.disabled = true;
        } else {
            subirButtonHtml.disabled = true;
        }
    } 
    else if (i === lista.length - 1) {
        subirButtonHtml.disabled = false;
        descerButtonHtml.disabled = true;
    } 
    else {
        subirButtonHtml.disabled = false;
        descerButtonHtml.disabled = false;
    }
    
    ordemButtonsHtml.appendChild(descerButtonHtml);
    
    itemHtml.appendChild(ordemButtonsHtml);
    itemHtml.appendChild(itemTextHtml);
    itemHtml.appendChild(removerButtonHtml);
    
    listaHtml.appendChild(itemHtml);
}
  }


function remover(index) {
  /* Remove o item que clicar da lista */
  if (index >= 0) {
    lista.splice(index, 1);
  }
  input.value = "";
  input.focus();
  atualizar();
}

input.addEventListener("keyup", function (event) {
  /* Adiciona o que está no input quando apertar enter */
  if (event.key === "Enter") {
    if (input.value != "") {
      adicionar();
    }
  }
});

input.addEventListener('click',remove_error)
input_button.addEventListener('click',adicionar)

function subirNaLista(index) {
  /* Subir o item na lista */
  if (index > 0) {
    let aux = lista[index - 1];
    lista[index - 1] = lista[index];
    lista[index] = aux;
  }
  atualizar();
}

function descerNaLista(index) {
  /* Descer o item na lista */
  if (index < lista.length - 1) {
    let aux = lista[index + 1];
    lista[index + 1] = lista[index];
    lista[index] = aux;
  }
  atualizar();
}

function remove_error() {
  /* Remove a classe de erro do input */
  input.classList.remove("input_error");
}
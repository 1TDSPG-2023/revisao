const form = document.getElementById('form');
const inputTarefa = document.getElementById('tarefa');
const listaTarefas = document.getElementById('lista');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const tarefa = inputTarefa.value.trim();
  if (tarefa !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${tarefa}</span>
      <button class="excluir">Excluir</button>
    `;
    listaTarefas.appendChild(li);
    inputTarefa.value = '';

    const btnExcluir = li.querySelector('.excluir');
    btnExcluir.addEventListener('click', function () {
      listaTarefas.removeChild(li);
    });
  }
});


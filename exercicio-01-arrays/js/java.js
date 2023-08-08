const tarefaForm = document.getElementById('tarefa-form');
const tarefaInput = document.getElementById('tarefa-input');
const tarefaLista = document.getElementById('tarefa-lista');

const tarefas = [];

tarefaForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const tarefaTexto = tarefaInput.value.trim();
  if (tarefaTexto !== '') {
    tarefas.push(tarefaTexto);
    updateTarefaLista();
    tarefaInput.value = '';
  }
});

function updateTarefaLista() {
    tarefaLista.innerHTML = '';
    for (let i = 0; i<tarefas.length; i++) {
        const tarefaItem = document.createElement('li');
        tarefaItem.classList.add('tarefa-container');
        tarefaItem.innerHTML = `
        <span>${tarefas[i]}</span>
        <button class="delete-btn" dado-indice="${i}">Excluir</button>
        `;
        tarefaLista.appendChild(tarefaItem);
    }
    addDeleteEventListeners();
}

function addDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(button.getAttribute('dado-indice'));
            tarefas.splice(index, 1);
            updateTarefaLista();
        });
    });
}
updateTarefaLista();
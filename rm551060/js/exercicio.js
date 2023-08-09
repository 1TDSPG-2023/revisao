const tarefas = [];

const ul = document.createElement("ul");

const boxCursos = document.getElementById("box-tarefas");

boxCursos.appendChild(ul);

function cadastrar(){ 

    const nomeTarefa = document.getElementById("idTarefa").value;
    const novaTarefa = {"nome":nomeTarefa};

    tarefas.push(novaTarefa);
    const li = document.createElement("li");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "x";
    btnExcluir.setAttribute("class","btnExcluir");
    li.id = tarefas-`${tarefas.length}`;
    li.textContent = `${nomeTarefa}`;
    ul.appendChild(li);
    li.appendChild(btnExcluir);
    li.setAttribute("class","tarefas");

    btnExcluir.addEventListener("click",(evt)=>{
        tarefas.forEach((tarefas,index)=>{
            if(tarefas.nome === evt.target.parentNode.textContent.split("-")[0]){
                tarefas.splice(index,1);
            }
        });
        ul.removeChild(evt.target.parentNode);
    });
}



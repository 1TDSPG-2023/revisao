let tarefas = [];

const botaoAddtarefa = document.getElementById("btnAddTarefa");
botaoAddtarefa.addEventListener("click",adicionarTarefa);

function adicionarTarefa() {
        const inputDescricao = document.getElementById('idDescricao').value;
        const inputAutor = document.getElementById('idAutor').value;
        const inputDepartamento = document.getElementById('idDepartamento').value;
        const inputImportancia = document.getElementById('idImportancia').value;
        const inputValorAdicional = document.getElementById('idValorAdicional').value;
        const inputDuracao = document.getElementById('idDuracao').value;
        
        if (inputDescricao != "" && inputAutor != "" && inputDepartamento != "" && inputImportancia != "") {
            const tarefa = {
                descricao : inputDescricao,
                autor : inputAutor,
                departamento : inputDepartamento,
                importancia : inputImportancia,
                valorAdicional : inputValorAdicional,
                duracao : inputDuracao
            };
            
            tarefas.push(tarefa);
            
            let tabelaBody = document.getElementById("tabela");
            let valoresTabela = [`${tarefa.descricao}`,`${tarefa.autor}`,`${tarefa.departamento}`,`${tarefa.importancia}`,`${tarefa.valorAdicional}`,`${tarefa.duracao}`];
            let novaTarefa = document.createElement("tr");
            tabelaBody.appendChild(novaTarefa);
            
            valoresTabela.forEach(valor => {
                let novaCelula = document.createElement("td");
                novaCelula.textContent = valor;
                novaTarefa.appendChild(novaCelula);
            }) 
            
            let botaoExcluir = document.createElement("button");
            botaoExcluir.textContent = " x ";
            novaTarefa.appendChild(botaoExcluir);
            
            botaoExcluir.addEventListener("click",(evt)=>{
                let conteudoDoTr = evt.target.parentNode.textContent.split(" ");
                console.log(conteudoDoTr);
                let index = tarefas.indexOf(conteudoDoTr[0]);
                tarefas.splice(index,1);
                evt.target.parentNode.remove();
                console.log(tarefas);
                
            })
            
            // inputTarefa.value = "";
            console.log(tarefas);
        } else {
            alert("É necessário preencher todos os campos obrigatórios para enviar uma tarefa.")
            }
        };
                  
    

const task = []

    
    let novaTarefa = document.getElementById("barra_tarefas").value;
    let novoAutor = document.getElementById("autorInput").value
    let novoDept = document.getElementById("deptInput").value
    let novoImportancia = document.getElementById("importanciaSelect").value
    let novaDescricao = document.getElementById("descriInput").value
    let novoValor = document.getElementById("novoValor").value
    task.push({tarefa: novaTarefa, Autor: novoAutor, Dept: novoDept, importancia: novoImportancia,
    Descricao: novaDescricao, valor: null});


    
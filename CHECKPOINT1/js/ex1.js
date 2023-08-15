let listaTarefa = []
       let lista = document.querySelector('ul')
       let botao = document.querySelector('button')
       let tarefa = document.querySelector('#idTarefa') 

    
        botao.addEventListener('click', function(){
            listaTarefa.push(tarefa.value)
            console.log(listaTarefa);
            lista.innerHTML = ''
            listaTarefa.forEach((item, i)=>{
                lista.innerHTML += `<li>${item} <button onclick="apagar('${i}')"> X </button> </li>`
            })
            tarefa.value = ''
        })
                
        function apagar(i){
            listaTarefa.splice(i,1)
            lista.innerHTML = ''
            listaTarefa.forEach((item, i)=>{
                lista.innerHTML += `<li>${item} <button onclick="apagar('${i}')"> X </button> </li>`
            })
        }



let listaSalarios = [
    {funcionario:"Funcionario1", salario:2978},
    {funcionario:"João", salario:1602},
    {funcionario:"Funcionario3", salario:1780},
    {funcionario:"Maria", salario:2110},
    {funcionario:"Funcionario5", salario:3452},
    {funcionario:"Luis", salario:2000},
    {funcionario:"Funcionario7", salario:1452},
    {funcionario:"José", salario:2098},
    {funcionario:"Funcionario9", salario:1960},
    {funcionario:"Jaci", salario:1998}
];

const listaImpressaSalario = document.getElementById("listaDeSalarios"); //Resgata a ul
const botaoReajuste = document.getElementById("reajustar"); //Resgata o button reajustar

botaoReajuste.addEventListener("click", ()=>{//add event ao click do botão
    console.log("LISTA SEM ALTERAÇÃO")
    console.log(listaSalarios)
    //UTILIZANDO O METODO MAP PARA PERCORRER A LISTA E CRIAR UMA NOVA LISTA
    const salariosAjustado = listaSalarios.map((novoSalario) =>{
        if (novoSalario.salario <= 2000) {
            return {funcionario: novoSalario.funcionario, salario: novoSalario.salario * 1.15};
        } else {
            return {funcionario: novoSalario.funcionario, salario: novoSalario.salario * 1.1 };
        }
    });
    console.log("LISTA ALTERADA")
    console.log(salariosAjustado);

    listaImpressaSalario.innerHTML = " "
    //UTILIZANDO O METODO MAP PARA PERCORRER A LISTA E CRIA UM ELEMENTO "LI" PARA CADA ITEM
    salariosAjustado.map((ajustado)=> {
        let novoSalario = document.createElement("li");
        novoSalario.textContent = `${ajustado.funcionario}: Salario: ${ajustado.salario}`;
        listaImpressaSalario.appendChild(novoSalario); 
    });

    let botao = document.createElement("button");
    botao.textContent = "Mostrar salarios > 2500";

    botao.addEventListener("click",()=>{
        //UTILIZANDO O METODO FILTER PARA CRIAR UMA NOVA LISTA COM 
        const salariosMaiorQue2500 = salariosAjustado.filter((valor) => {
            return valor.salario > 2500
        });
        console.log("SALARIOS MAIOR QUE 2500");
        console.log(salariosMaiorQue2500);

        // Limpar a lista antes de adicionar os salários maiores que 2500
        listaImpressaSalario.innerHTML = "";
        salariosMaiorQue2500.forEach(salarioMaior => {
            let novoSalario = document.createElement("li");
            novoSalario.textContent = `${salarioMaior.funcionario}: Salario: ${salarioMaior.salario}`;
            listaImpressaSalario.appendChild(novoSalario);
        });

        
        botao.textContent = "Somar"
        botao.addEventListener("click",()=>{
            //UTILIZANDO O METODO REDUCE
            const somaSalarios = salariosMaiorQue2500.reduce((acumulador, salario) => {
                return acumulador + salario.salario;
            },0)
            console.log("SOMA DOS SALARIOS")
            console.log(somaSalarios);
            listaImpressaSalario.innerHTML ="";
            listaImpressaSalario.append(`Soma: ${somaSalarios}`);

            
            botao.textContent = "REINICIAR"
            botao.addEventListener("click",()=>{
                listaImpressaSalario.innerHTML = ""
            });
            listaImpressaSalario.appendChild(botao);
        });
        listaImpressaSalario.appendChild(botao);
    }); 
    listaImpressaSalario.appendChild(botao);
});

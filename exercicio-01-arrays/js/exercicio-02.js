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

const botaoReajuste = document.getElementById("reajustar");
botaoReajuste.addEventListener("click", ()=>{
    //UTILIZANDO O METODO MAP
    console.log("LISTA SEM ALTERAÇÃO")
    console.log(listaSalarios)
    const salariosAjustado = listaSalarios.map((novoSalario) =>{
        return novoSalario.salario;
    })
    console.log("LISTA ALTERADA")
    console.log(salariosAjustado);

    //UTILIZANDO O METODO FILTER
    const salariosMaiorQue2500 = salariosAjustado.filter((salario) => {
        return salario > 2500
    });
    console.log("SALARIOS MAIOR QUE 2500");
    console.log(salariosMaiorQue2500);

    //UTILIZANDO O METODO REDUCE
    const somaSalarios = salariosAjustado.reduce((acumulador, salario) => {
        return acumulador + salario;
    },0)
    console.log("SOMA DOS SALARIOS")
    console.log(somaSalarios);
});

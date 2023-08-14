/* EXERCICIO 2
1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua
um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
de 2000. (CONCLUÍDO)
2 – Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
método filter(), contendo somente os salários superiores a 2500. (CONCLUÍDO)
3 – Utilizando o array de resultado do exercício anterior, usando o método reduce(),
some os valores. (CONCLUÍDO)
*/

// Função para facilitar a exibição de salários no console
function mostrarListaNoConsole(lista) {
    for(elemento in lista) {
        console.log(`R$${lista[elemento]}`);
    }
}

// Criando uma variavel que contem uma lista de salários
let salarios = [1473, 4886, 1491, 1699, 3192, 1323, 1456, 3187, 2437, 3489];
console.log(`Salários:`);
mostrarListaNoConsole(salarios);

// Atribuindo aumentos para cada salario
let salariosComAumento = salarios.map((salario)=>{
    // Se o atual salario for menor ou igual a 2000, o aumento será de 15%, caso contrário, o aumento será de 10%
    if(salario <= 2000){
        return salario + (salario*15)/100;
    } else {
        return salario + (salario*10)/100;
    }
});
console.log(`Salários após aumento de 15% ou 10%:`);
mostrarListaNoConsole(salariosComAumento);

// Filtrando somente salarios acima de 2500, e adcionando-os em uma lista
let maioresSalariosComAumento = salariosComAumento.filter((salario) => {
    return salario > 2500;
})
console.log(`Salários acima de 2500 após o aumento:`);
mostrarListaNoConsole(maioresSalariosComAumento);

// Somando todos os salarios acima de 2500
let somaTotalSalarios = maioresSalariosComAumento.reduce((acumulado, atual) => acumulado + atual);
console.log(`Soma de Todos os Salários: ${somaTotalSalarios}`);

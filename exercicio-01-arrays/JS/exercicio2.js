/* EXERCICIO 2
1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua
um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
de 2000.
2 – Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
método filter(), contendo somente os salários superiores a 2500.
3 – Utilizando o array de resultado do exercício anterior, usando o método reduce(),
some os valores 
*/

valoresSalario = [];
salarioMinimo = 1320;
let salario = 0;
qtd = 10;
for(i=0; i < qtd; i++) {
    while(salario <= salarioMinimo) {
        salario = Math.floor(Math.random()* 10000);
    }
    valoresSalario.push(salario);
    salario = 0;
}

console.log(valoresSalario);


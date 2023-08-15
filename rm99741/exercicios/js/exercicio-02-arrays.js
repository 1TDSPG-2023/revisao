//1- Crie um array contendo 10 valores de salário e utilizando o método map() atribua um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima de 2000:

let salario = [1200,2800,2500,2000,1600,1000,920,3500,9800,1999];


let aumentoSalario = salario.map (salario => {
    if (salario <= 2000) {
        return salario * 1.15; 
      } else {
        return salario * 1.10; 
      }
});

console.log(aumentoSalario)

//2- Utilizando o array de resultado do exercício anterior, crie um novo array, usando o método filter(), contendo somente os salários superiores a 2500.

let salarioMaiorque2500 = aumentoSalario.filter(item => item >2500)
console.log(salarioMaiorque2500)

//3- Utilizando o array de resultado do exercício anterior, usando o método reduce(),some os valores.

let somaSalario = salarioMaiorque2500.reduce((acumulado, atual) => acumulado + atual)

console.log(somaSalario)
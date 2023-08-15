// 1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima de 2000.

const valores = [1000, 1200, 1400, 1600, 1800, 2000, 2200, 2550, 2750, 3200]

function aumentoSalario(salario) {
    if (salario <= 2000) {
        return (salario * 1.15).toFixed();
    } else {
        return (salario * 1.1).toFixed();
    }
};

const salariosAumentados = valores.map(aumentoSalario);
console.log(salariosAumentados);

// 2 – Utilizando o array de resultado do exercício anterior, crie um novo array, usando o método filter(), contendo somente os salários superiores a 2500.

const salarioSuperior2500 = salariosAumentados.filter(salario => salario > 2500);
console.log(salarioSuperior2500);

// 3 – Utilizando o array de resultado do exercício anterior, usando o método reduce(), some os valores.

const somaSuperiores = salarioSuperior2500.reduce((soma, salario) => soma + parseFloat(salario), 0);
console.log(somaSuperiores);
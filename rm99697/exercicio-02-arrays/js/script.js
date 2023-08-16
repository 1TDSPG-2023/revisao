// 1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua
// um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
// de 2000.

const salariosFuncionarios = [
    {"funcionario": "Matheus", "salario": 3500},
    {"funcionario": "Bianca", "salario": 2500},
    {"funcionario": "Carolina", "salario": 2700},
    {"funcionario": "Joao", "salario": 1300},
    {"funcionario": "Lucas", "salario": 800},
    {"funcionario": "Ana", "salario": 1500},
    {"funcionario": "Pedro", "salario": 3000},
    {"funcionario": "André", "salario": 4500},
    {"funcionario": "Paolla", "salario": 2500},
    {"funcionario": "Regina", "salario": 1220},
];


const novosSalariosFuncionarios = salariosFuncionarios.map(elemento => {
  if (elemento.salario <= 2000) {
    return {
      funcionario: elemento.funcionario,
      salario: elemento.salario * 1.15, 
    };
  } else {
    return {
      funcionario: elemento.funcionario,
      salario: elemento.salario * 1.10,
    };
  }
});

console.log(novosSalariosFuncionarios);

// 2 – Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
// método filter(), contendo somente os salários superiores a 2500.
const salariosAcima = novosSalariosFuncionarios.filter(item => item.salario > 2500);

console.log(salariosAcima);

// 3 – Utilizando o array de resultado do exercício anterior, usando o método reduce(),
// some os valores.
const soma = salariosAcima.reduce((acumulado, atual) => acumulado + atual.salario, 0);
console.log(soma);

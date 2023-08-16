let salarios = [

    {salario: 1200},
    {salario: 1800},
    {salario: 2200},
    {salario: 2500},
    {salario: 10000},
    {salario: 900},
    {salario: 1900},
    {salario: 2000},
    {salario: 2300},
    {salario: 1000}

];


let aumentoSalario = salarios.map((salario => {
    if (salario.salario <= 2000) {
        return salario.salario * 1.15;
    }
    else {
        return salario.salario * 1.10;
    }
}));

console.log(aumentoSalario);

let salariosMaiorQue2500 = aumentoSalario.filter((salario) => salario > 2500);
console.log(salariosMaiorQue2500);

let totalSalariosMaiorQue2500 = salariosMaiorQue2500.reduce((total, salario) => total + salario, 0);
console.log(totalSalariosMaiorQue2500);
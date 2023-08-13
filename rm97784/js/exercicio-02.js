let salarios = [800,1000,1200,1400,1600,1800,2000,2200,2400,2600];

console.log(salarios);

let salariosAumentados = salarios.map((salario) => {
    if(salario <= 2000) {
        return Number((salario *= 1.15).toFixed(2));
    }
    return Number((salario *= 1.1).toFixed(2));
});

console.log(salariosAumentados);

let salariosMaioresQue2500 = salariosAumentados.filter((salario) => salario > 2500);

console.log(salariosMaioresQue2500);

let somaSalariosMaioresQue2500 = salariosMaioresQue2500.reduce((soma,salario) => soma + salario, 0);

console.log(somaSalariosMaioresQue2500);
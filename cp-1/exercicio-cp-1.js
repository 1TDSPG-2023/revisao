// Declaração da lista de salários

let salarios = [
    1400,
    2200,
    3500,
    900,
    1600,
    2900,
    4800,
    1300,
    950,
    5000
]

// Aumento dos salarios com map

let aumentoSalarios = salarios.map((salario) => {
    if (salario <= 2000) {
        return Math.round(salario * 1.15);
    } else {
        return Math.round(salario * 1.10);
    }
});

console.log(aumentoSalarios);

// Filtrando salarios acima de 2500 reais

let salariosAcima2500 = aumentoSalarios.filter((salario) => salario >= 2500);

console.log(salariosAcima2500);

// Somando salarios

let somaSalarios = salariosAcima2500.reduce((total, salario) => total + salario);

console.log(somaSalarios);

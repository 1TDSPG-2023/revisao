salarios = [1320, 3499, 2000, 1840, 5900, 3170, 7680, 10560, 1980, 9800];

aumentoSalarios = salarios.map(salario => salario <= 2000 ? salario *= 1.15 : salario *= 1.1);
console.log(aumentoSalarios);

salariosSuperiores2500 = aumentoSalarios.filter(salario => salario > 2500);
console.log(salariosSuperiores2500);

somaSalarios = salariosSuperiores2500.reduce((acumulado, atual) => acumulado + atual);
console.log(somaSalarios);
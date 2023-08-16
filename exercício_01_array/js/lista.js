const pagamento = [2500,1500,2000,2500,11000,3500,9000,4500,1200,5500]

const salariosMultiplicados = pagamento.map(salario => {

    if (salario <= 2000) {
        return salario * 1.15;

    }else {
        return salario * 1.10;
    }
}); 

const salarioMaior2500 = salariosMultiplicados.filter(salario => salario > 2500);

const somaSalariosMaior2500 = salarioMaior2500.reduce((valorsoma, salario) => valorsoma + salario, 0);
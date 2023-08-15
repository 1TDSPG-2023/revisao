const salarios= [2500,1000,1000,2500,1000,150,800,1500,1500,2500,1000]

const aumentasalario = salarios.map(salario =>  { 
    if (salario <= 2000) {
        return salario * 1.15; // Aumento de 15%
    } else {
        return salario * 1.10; // Aumento de 10%
    }
});

const achasalarios = aumentasalario.filter(salarios =>(salarios >=2500));

const somasalarios = achasalarios.reduce((acumulador,salario) =>acumulador+salario,0);

console.log("Esses salarios sofreram aumento: ",aumentasalario);
console.log("Esses foram os salarios filtrados: ",achasalarios);
console.log("Soma total dos salarios: " , somasalarios);
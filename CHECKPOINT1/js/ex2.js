
//aumento salario
let salario = [1200, 3500, 4550, 7220, 8322, 1183, 2000, 1500, 3000, 4750]
console.log(`Salários: ${salario}`)

let novoSalario = salario.map((salarios) =>{
    if (salarios <= 2000){
        return salarios + (salarios * 15) / 100;
    }else{
        return salarios+ (salarios * 10) / 100;
    }

});

console.log(`Aumento: ${novoSalario}`)

//superior a 2500

let salarioSuperior = salario.filter( sal => sal > 2500)
console.log(`Salario Superior: ${salarioSuperior}`)

// somando os valores

let somandoSalario = salario.reduce((acumular, salario) => acumular + salario)
console.log(`Soma: ${somandoSalario}`)




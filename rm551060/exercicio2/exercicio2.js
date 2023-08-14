const salarios = [
    {'salario' : 900},
    {'salario' : 1000},
    {'salario' : 1200},
    {'salario' : 1800},
    {'salario' : 2200},
    {'salario' : 10000},
    {'salario' : 1900},
    {'salario' : 2000},
    {'salario' : 2300},
    {'salario' : 2500},
]

console.log(salarios)

let valorSalarios = salarios.map(salarios =>{
    if (salarios.salario < 2000){
        return salarios.salario * 1.15;
    }
    else{
        return salarios.salario * 1.10;
    }
});
console.log(valorSalarios)

let valorSalariosMaior2500 = valorSalarios.filter(salarios => salarios >2500);
console.log(valorSalariosMaior2500)



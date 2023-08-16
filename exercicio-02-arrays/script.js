const adicionarSalarioBtn = document.getElementById("adicionarSalario");
const salariosOriginaisUl = document.getElementById("salariosOriginais");
const salariosAumentadosUl = document.getElementById("salariosAumentados");
const salariosSuperiores2500Ul = document.getElementById("salariosSuperiores2500");
const somaSalariosP = document.getElementById("somaSalarios");

let salarios = [1500, 2200, 1800, 2500, 1900, 2800, 2100, 3000, 2300, 2600];

adicionarSalarioBtn.addEventListener("click", () => {
    const novoSalario = parseInt(prompt("Digite o novo salário:"));
    if (!isNaN(novoSalario)) {
        salarios.push(novoSalario);
        atualizarTabelas();
    }
});

function atualizarTabelas() {
    salariosOriginaisUl.innerHTML = salarios.map(salario => `<li>${salario}</li>`).join("");
    
    const salariosAumentados = salarios.map(salario => {
        if (salario <= 2000) {
            return salario * 1.15;
        } else {
            return salario * 1.1;
        }
    });
    salariosAumentadosUl.innerHTML = salariosAumentados.map(salario => `<li>${salario.toFixed(2)}</li>`).join("");
    
    const salariosSuperiores2500 = salariosAumentados.filter(salario => salario > 2500);
    salariosSuperiores2500Ul.innerHTML = salariosSuperiores2500.map(salario => `<li>${salario.toFixed(2)}</li>`).join("");
    
    const somaSalarios = salariosAumentados.reduce((acumulador, salario) => acumulador + salario, 0);
    somaSalariosP.textContent = `Soma dos Salários: ${somaSalarios.toFixed(2)}`;
}

// Atualiza as tabelas inicialmente
atualizarTabelas();

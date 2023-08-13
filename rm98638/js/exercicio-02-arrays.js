//cspell:ignore salarios

const salarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10_000];
const salariosAumentados = salarios.map(
    (salario) => (salario *= salario <= 2000 ? 1.15 : 1.1)
);
const salariosFiltrados = salariosAumentados.filter(
    (salario) => salario > 2500
);
const total = salariosFiltrados.reduce((salario, total) => total += salario)

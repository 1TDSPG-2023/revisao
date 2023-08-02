// //Declarar arrays
// let alunos = ['João', 'Carlos', 'Maria'];

// //Imprimindo um índice do array
// console.log(alunos[0]);

// //Utilizando um forEach para imprimir o array

// alunos.forEach(aluno => {
//     console.log(aluno);
// });

// let alunos = ["João", "Carlos", "Maria"];

// alunos.push("Ana");

// // alunos.forEach(aluno => {
// //     console.log(`${aluno} é aluno(a) da FIAP.`)
// // })

// alunos.sort()

// console.log(alunos);

// alunos.splice(1,2,"Adrian");

// console.log(alunos);

const cursos = [
    {'nome': "Programação", 'duracao':"3 meses"},
    {'nome': "DevOps", 'duracao':"2 meses"},
    {'nome': "Negócios", 'duracao':"6 meses"},
    {"nome": "React", 'duracao': "4 meses"}
];

const nomeCursos = cursos.map(curso => (
    console.log(curso.nome)
))

console.log(nomeCursos);
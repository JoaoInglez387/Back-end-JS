import entradaDados from 'readline-sync';

let numAlunos = entradaDados.questionInt("Digite o numero de alunos que tem na turma: ");
let cont = 1;
let mediaTurma = 0;

while (cont <= numAlunos) {
    let nota1 = entradaDados.questionFloat(`Digite as notas do 1 Bimestre do aluno ${cont}: `);
    let nota2 = entradaDados.questionFloat(`Digite as notas do 2 Bimestre do aluno ${cont}: `);
    let nota3 = entradaDados.questionFloat(`Digite as notas do 3 Bimestre do aluno ${cont}: `);
    let nota4 = entradaDados.questionFloat(`Digite as notas do 4 Bimestre do aluno ${cont}: `);

    let mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(`A media do aluno ${cont}: ${mediaAluno}`)
    
    mediaTurma += mediaAluno;
    cont++;
}

let calculamedia = mediaTurma / numAlunos;
console.log(`A media da turma é: ${calculamedia}`)
let nomes = ["Joao","Pedro","Hiago","Vitor","Gabriel","Vinicius"];

for (let lista of nomes) {
     console.log(lista)
}

//------------------------------------------------------------------

let alunos = [{Id: 1, nome: 'Joao Gabriel', email: 'joaogabriel74@gmail.com', idade: 16, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 2, nome: 'Joao Corso', email: 'joaoCorso57@gmail.com', idade: 17, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'}, 
{Id: 3, nome: 'Joao Vinicius', email: 'joaovinicius72@gmail.com', idade: 16, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 4, nome: 'Hiago Gabriel', email: 'hiago96apelido@gmail.com', idade: 16, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 5, nome: 'Joao Guerini', email: 'joaoguarana7@gmail.com', idade: 17, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 6, nome: 'Marcos Vinicus', email: 'relampagomarquinhos@gmail.com', idade: 16, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 7, nome: 'Joao Bento', email: 'pretinho358@gmail.com', idade: 15, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'}, 
{Id: 8, nome: 'Vitor Cappe', email: 'cappe20jogador@gmail.com', idade: 14, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 9, nome: 'Joao Oliveira', email: 'Azeite92@gmail.com', idade: 16, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'},
{Id: 10, nome: 'Nathan Teixeira', email: 'chalimatadordeporco@gmail.com', idade: 16, cidade: 'Vilhena', estado: 'Rondonia', turma: '2 Ano', turno: 'matutino'}
]

for (let lista of alunos) {
     console.log(`Id do Aluno: ${lista.Id} | Nome: ${lista.nome} | Email: ${lista.email} | Idade: ${lista.idade} | Cidade: ${lista.cidade} | Estado: ${lista.estado} | Turma: ${lista.turma} | Turno: ${lista.turno}`)
}
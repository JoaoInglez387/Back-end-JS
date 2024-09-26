import inputDados from 'readline-sync';

let catagoria = inputDados.question("Digite qual a sua categoria de bonificacao:\
\na - Categoria A\
\nb - Categoria B\
\nc - Categoria C\
\nd - Categoria D\
\n---> ").toLowerCase();

let salario = inputDados.questionFloat("Digite o valor do seu salario: R$ ");

if (salario > 0) {
    switch (catagoria) {
        case "a":
            console.log(`Seu novo sálario da Categoria A: R$ ${(salario * 5 / 100) + salario}`)
            break;
        case "b":
            console.log(`Seu novo sálario da Categoria B: R$ ${(salario * 10 / 100) + salario}`)
            break;
        case "c":
            console.log(`Seu novo sálario da Categoria C: R$ ${(salario * 15 / 100) + salario}`)
            break;
        case "d":
            console.log(`Seu novo sálario da Categoria D: R$ ${(salario * 20 / 100) + salario}`)
            break;
        default:
            console.log("Erro, Categoria não existe!")
            break;
    }
}
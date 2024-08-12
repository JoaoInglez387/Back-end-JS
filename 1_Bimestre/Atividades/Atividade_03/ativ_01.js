import inputDados from 'readline-sync';

let dia = inputDados.questionInt("Digite dia da semana: ")

switch (dia) {
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4:
        console.log("Quinta-Feira");
        break;
    case 5:
        console.log("Sexta-Feira");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Erro, número de mês invalido");
        break;
}
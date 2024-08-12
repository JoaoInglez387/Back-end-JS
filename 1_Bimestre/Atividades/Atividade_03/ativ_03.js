import inputDados from 'readline-sync';

let opera = inputDados.questionInt("Digite o numero da operacao que deseja:\
\n1 - Adicao\
\n2 - Subtracao\
\n3 - Multiplicacaoo\
\n4 - Divisao\
\n---> ");

let num1 = inputDados.questionInt("Digite o primeiro numero: ");
let num2 = inputDados.questionInt("Digite o segundo numero: ")

switch (opera) {
    case 1:
        console.log(`Sua soma de ${num1} + ${num2} = ${num1+num2}`)
        break;
        
        case 1:
            console.log(`Soma: ${num1} + ${num2} = ${num1+num2}`)
            break;
        case 2:
            console.log(`Subtração: ${num1} - ${num2} = ${num1-num2}`)
            break;
        case 3:
            console.log(`Sua soma de ${num1} x ${num2} = ${num1*num2}`)
            break;
    default:
        break;
}
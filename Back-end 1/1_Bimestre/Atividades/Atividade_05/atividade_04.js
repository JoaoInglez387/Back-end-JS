import input from 'readline-sync';

let valor = input.questionFloat('Digite um valor: ');
let porcento = input.questionFloat('Digite uma porcentagem: ');

function calc_acrescimo(valor, porcent) {
    return valor * (1 + porcent/100);
}

console.log(`O valor de R$${valor} com o acrescimo de ${porcento}% é de  R$${calc_acrescimo(valor, porcento).toFixed(2)}`);

//--------------------------------------------

let calculaAcrescimo = function (valor, porcent) {
    return valor * (1 + porcent/100);
}

console.log(`O valor R$${valor} + ${porcento}% = R$${calculaAcrescimo(valor, porcento).toFixed(2)}`);

//------------------------------------------------------------------------------

const calcAcrescimo = (valor, porcent) => {return valor * (1 + porcent/100)}; console.log(`O valor de R$${valor} c/ acrescimo de ${porcento}% = R$${calcAcrescimo(valor, porcento).toFixed(2)}`)
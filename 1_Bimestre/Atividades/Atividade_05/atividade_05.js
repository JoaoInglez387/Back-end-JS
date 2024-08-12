import input from 'readline-sync';

let nome = input.question('Digite o nome do produto: ')
let valor = input.questionFloat('Digite o valor do produto: ');
let desc = input.questionFloat('Digite quantos porcento de desconto o produto vai receber: ');

if (valor < 0 || desc < 0) {
    console.log("Não é possível calcular.");
} 
else {
    function calcValorDescont(valor, desconto) {
        return valor * (desconto / 100);
    }

    let valorDesconto = calcValorDescont(valor, desc);
    let diferenca = valor - valorDesconto;

    console.log(`O produto ${nome} do R$${valor.toFixed(2)} teve um desconto de ${desc}% O valor total com desconto é R$${valorDesconto.toFixed(2)}, com uma diferença de R$${diferenca.toFixed(2)}.`);
}

//---------------------------------------------------------------------

if (valor < 0 || desc < 0) {
    console.log("Não é possível calcular.");
} 
else {
let calcularDescont = function (valor, desconto) {
    return valor * (desconto / 100);
}

let valorDesc = calcularDescont(valor, desc);
let calcdifere = valor - valorDesc;
console.log(`O produto ${nome} de R$${valor.toFixed(2)} teve um desconto de ${desc}% com total R$${valorDesc.toFixed(2)}, com uma diferença de R$${calcdifere.toFixed(2)}.`)}

//---------------------------------------------------------------------

const calcvalDesc = (valor, desconto) => {return valor * (desconto / 100)}
let valordoDesc = calcvalDesc(valor, desc);
let calculodifere = valor - valordoDesc;
console.log(`Produto ${nome} de R$${valor.toFixed(2)} + ${desc}% total: R$${valordoDesc.toFixed(2)}\nDiferença: R$${calculodifere.toFixed(2)}.`)
import input from 'readline-sync';

let tempC = input.questionInt('Digite a temperatura em Celsius: ');

function converteF(tempC) {
    return tempC * 1.8 + 32
}

console.log(`A conversão de ${tempC}C° para ${converteF(tempC)}F°`);

//----------------------------------------------------------------------

let convertepF = function(tempC) {
    return tempC * 1.8 + 32
}

console.log(`A conversão de ${tempC}C° para ${convertepF(tempC)}F°`);

//----------------------------------------------------------------------

let CpraF = (tempC) => {return tempC * 1.8 + 32}
console.log(`\nConversor de Temperatura\
\nTemperatura C°: ${tempC}C°\
\nTemperatura F°: ${CpraF(tempC)}F°`);
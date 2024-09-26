import input from 'readline-sync';

let raio = input.questionFloat('Digite o raio do circulo: ');

function calculoArea(raio) {
    return 3.14*(raio**2)
}

console.log(`A area desse circulo é de ${calculoArea(raio)}`);

//------------------------------------------------------

let calcArea = function(raio) {
    return 3.14*(raio**2)
}

console.log(`A area do circulo é: ${calcArea(raio)}`);

//------------------------------------------------------

let calculaArea = (raio) => {return 3.14*(raio**2)}
console.log(`Area do circulo: ${calculaArea(raio)}`);
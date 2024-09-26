import input from 'readline-sync';

let altura = input.questionFloat('Digite sua altura: ');
let peso = input.questionFloat('Digite seu peso: ');

function calculoIMC (altura, peso) {
    return peso / (altura**2)
}

const imc = calculoIMC(altura, peso);

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)} classificado como Magreza`);
}

else if (imc >= 18.5 && imc<= 24.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)} classificado como Normal`);
}

else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)} classificado como Sobrepeso`);
}

else if (imc >= 30 && imc <= 34.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)} classificado como Obesidade grau 1`);
}

else if (imc >= 35 && imc <= 39.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)} classificado como Obesidade grau 2`);
}

else {
    console.log(`Seu IMC é ${imc.toFixed(2)} classificado como Obesidade grau 3`);
}

//----------------------------------------------------------------------------------

let calcIMC = function (altura, peso) {
    return peso / (altura**2)
}

const IMC = calcIMC(altura, peso);

if (IMC < 18.5) {
    console.log(`Seu IMC é ${IMC.toFixed(2)} classificado como Magreza`);
}

else if (IMC >= 18.5 && IMC<= 24.9) {
    console.log(`Seu IMC é ${IMC.toFixed(2)} classificado como Normal`);
}

else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`Seu IMC é ${IMC.toFixed(2)} classificado como Sobrepeso`);
}

else if (IMC >= 30 && IMC <= 34.9) {
    console.log(`Seu IMC é ${IMC.toFixed(2)} classificado como Obesidade grau 1`);
}

else if (IMC >= 35 && IMC <= 39.9) {
    console.log(`Seu IMC é ${IMC.toFixed(2)} classificado como Obesidade grau 2`);
}

else {
    console.log(`Seu IMC é ${IMC.toFixed(2)} classificado como Obesidade grau 3`);
}

//----------------------------------------------------------------------------------

let calcularIMC = (altura, peso) => {return peso / (altura**2)}
const recebeIMC = calcularIMC(altura, peso);
recebeIMC < 18.5 ? `Seu IMC é ${recebeIMC.toFixed(2)} classificado como Magreza` : recebeIMC >= 18.5 && recebeIMC <= 24.9 ? `Seu IMC é ${recebeIMC.toFixed(2)} classificado como Normal` : recebeIMC >= 25 && recebeIMC <= 29.9 ? `Seu IMC é ${recebeIMC.toFixed(2)} classificado como Sobrepeso` : recebeIMC >= 30 && recebeIMC <= 34.9 ? `Seu IMC é ${recebeIMC.toFixed(2)} classificado como Obesidade grau 1` : recebeIMC >= 35 && recebeIMC <= 39.9 ? `Seu IMC é ${recebeIMC.toFixed(2)} classificado como Obesidade grau 2` : `Seu IMC é ${recebeIMC.toFixed(2)} classificado como Obesidade grau 3`;
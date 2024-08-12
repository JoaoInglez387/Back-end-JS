import input from 'readline-sync';

let n = input.questionInt('Digite um numero: ')

function verificar(num) {
    if (num % 2 == 0){
        return "Par"
    }
    else {
        return "Impar"
    }
}

console.log(verificar(n))

//--------------------------------------------

let numero = function (numero) {
    if (numero % 2 == 0){
        return "Par"
    }
    else {
        return "Impar"
    }
}

console.log(numero(n));

//-------------------------------------------

let num = (n) => (n % 2 == 0 ) ? "Par" : "Impar";
import input from 'readline-sync';

let num1 = input.questionInt('Digite o seu primeiro numero: ');
let num2 = input.questionInt('Digite o seu segundo numero: ');

function calculo(num1, num2) {
    return num1 + num2
}

console.log(`A soma do número ${num1} e ${num2} é de: ${calculo(num1, num2)}`)

//------------------------------------------------------------------------------

let calculonum = function (num1, num2) {
    return num1 + num2
}

console.log(`A soma do ${num1} + ${num2} = ${calculonum(num1, num2)}`);

//------------------------------------------------------------------------------

let calconum = (num1, num2) => {return num1+num2} 
console.log(`Soma ${num1} + ${num2} = ${calconum(num1, num2)}`);
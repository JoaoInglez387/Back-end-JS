import entradaDados from 'readline-sync';

let num = entradaDados.questionInt("Digite numero da tabuada que deseja: ");
let contar = 0;

console.log("Tabuada do "+ num);

while (contar <= 10) {
    console.log(`${num} x ${contar} = ${num*contar}`);
    contar++;
};
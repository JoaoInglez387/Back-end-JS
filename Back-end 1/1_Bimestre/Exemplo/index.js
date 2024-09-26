import entradaDados from 'readline-sync';

/*Input de dados */

let nome = entradaDados.question('Digite seu nome: ');
console.log(`Olá, ${nome}.`);


/* Converter */

let x = entradaDados.question(`X: `);
let y = entradaDados.question(`Y: `);
let total = Number(x) + Number(y);
console.log(`Total: ${total}`);

/* Converte dentro do question*/

let h = entradaDados.questionInt(`H: `);
let c = entradaDados.questionInt(`C: `);
/*let total = Number(x) + Number(y);*/
console.log(`Total: ${h+c}`)

/*If, else if , else*/
let idade = 18;
if (idade >= 18){
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}

/*Simplificado */
if (idade >= 18) console.log("Maior de idade"); //if

/*Curto Circuito*/
(idade >= 18) && console.log("Maior de idade");//if

/*Operador de terminal*/
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"; //if e else


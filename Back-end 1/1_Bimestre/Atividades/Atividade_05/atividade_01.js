import input from 'readline-sync';

let nome = input.question('Digite seu nome: ')

function recebename(nome) {
    return nome.toUpperCase();
}

console.log(`Meu amigo é ${recebename(nome)}.`);

//--------------------------------------------------

let name = function (name) {
    return name.toUpperCase();
}

console.log((`Meu nome é ${name(nome)}.`));

//--------------------------------------------------

const nom = (nom) => nom.toUpperCase();

console.log(nom(`O ${nom(nome)} está feliz.`));
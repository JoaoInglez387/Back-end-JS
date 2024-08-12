import entradaDados from 'readline-sync';

let aleatorio = Math.floor(Math.random() * 100) + 1;
//let aleatorio = Math.round(Math.random() * 100) + 1;
//let aleatorio = Math.ceil(Math.random() * 100);
let tentativa;
let contTentativa = 0 ;

do {
    tentativa = entradaDados.questionInt("Advilhar o numero entre 1 e 100: ");
    
    if (tentativa < aleatorio) {
        console.log("Seu palpite é baixo");
        contTentativa++;
    }

    else if (tentativa > aleatorio){
        console.log("Seu palpite é alto");
        contTentativa++;
    }

    else {
        console.log(`Parabéns! Você acertou o número.\nTentativa de acerto = ${contTentativa} vezes`)
        contTentativa++;
    }

    
} while (tentativa !== aleatorio);
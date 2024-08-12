import input from 'readline-sync';

const verificaMaiuscula = /[A-Z]/;
const verificaminuscula = /[a-z]/;
const especial = /\W|_/;

function verifica(senha) {
    if (senha.length >= 8) {
        if (verificaMaiuscula.test(senha) && especial.test(senha) && verificaminuscula.test(senha)){
            return `Senha valida!`
        }
        else{
            return `Erro! Senha não valida`
        }
    }
    else {
        return `Erro! Senha não valida a senha tenha pelo menos 8 caracteres`
    }
}

console.log(verifica(input.question('Digite sua senha: ')));

//---------------------------------------------------------------------

let ver = function(senha) {
    if (senha.length >= 8) {
        if (verificaMaiuscula.test(senha) && especial.test(senha) && verificaminuscula.test(senha)){
            return `Senha valida!`
        }
        else{
            return `Erro! Senha não valida`
        }
    }
    else {
        return `Erro! Senha não valida a senha tenha pelo menos 8 caracteres`
    }
}

console.log(ver(input.question('Digite sua senha: ')));

//---------------------------------------------------------------------

let verificasenha = (senha) => {senha.length >= 8 ? verificaMaiuscula.test(senha) && especial.test(senha) && verificaminuscula.test(senha) ? "Senha valida!" : "Senha Invalida" : "Erro senha tem menos de 8 caracteres"}
console.log(verificasenha(input.question('Digite sua senha: ')));
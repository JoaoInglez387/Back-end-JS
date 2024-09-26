import input from 'readline-sync';

let cpf = input.question('Digite seu CPF: ');

function validarCPF(cpf) {
    if (cpf.length <= 11){
        return true
    }
    else{
        return false
    }
}

const validar = validarCPF(cpf);

if (validar === true) {
    console.log(`CPF: ${cpf} foi aprovado.`);
}
else {
    console.log(`Erro! CPF invalido.`);
}

//---------------------------------------------------------------------

let validacpf = function(cpf) {
    if (cpf.length <= 11) {
        return true
    }
    else{
        return false
    }
}

const vale = validacpf(cpf);
if (vale === true){
    console.log(`CPF: ${cpf}, Aprovado.`);
}
else {
    console.log(`Erro! CPF invalido.`);
}

//---------------------------------------------------------------------

let valeCPF = (cpf) => {cpf.length <= 11 ? true : false}
const valercpf = valeCPF(cpf);
valercpf === true ? "CPF Aprovado" : "Erro CPF invalido";
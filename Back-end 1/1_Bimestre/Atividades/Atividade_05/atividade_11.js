import input from 'readline-sync';

let capitalInicial = input.questionFloat('Informe o valor inicial do seu capital: ') ;
let taxaJuroMensal = input.questionFloat('Digite o juros mensal: ');
let tempoInvestido = input.questionInt('Digite o tempo do investimento em meses que deseja: ');

function calculoInvestir(c, taxajuro, tempo ) {
    let montante = 0;
    montante = c *(1 + taxajuro/100)**tempo;
    return montante.toFixed(2)
}

console.log(`O capital inicial: R$${capitalInicial.toFixed(2)}\
\nTendo um juro mensal de: ${taxaJuroMensal}%\
\nE seu tempo investido é de: ${tempoInvestido} meses\
\nTendo o total do investimento: R$${calculoInvestir(capitalInicial, taxaJuroMensal, tempoInvestido)}`);

//------------------------------------------------------------------------------------------------------------

let calcInvestimento = function(c, taxajuro, tempo) {
    let montante = 0;
    montante = c *(1 + taxajuro/100)**tempo;
    return montante.toFixed(2)
}

console.log(`O capital inicial foi de R$${capitalInicial.toFixed(2)}\
\nTendo um juro mensal de: ${taxaJuroMensal}%\
\nE seu tempo investido é de: ${tempoInvestido} meses\
\nTendo o total do investimento: R$${calcInvestimento(capitalInicial, taxaJuroMensal, tempoInvestido)}`);

//------------------------------------------------------------------------------------------------------------

let calcularInvestir = (c, taxajuro, tempo) => {let montante = 0; montante = c *(1 + taxajuro/100)**tempo;
return montante.toFixed(2)}

console.log(`O capital inicial: R$${capitalInicial.toFixed(2)}\
\nJuro mensal: ${taxaJuroMensal}%\
\nTempo investido: ${tempoInvestido} meses\
\nTotal do investimento: R$${calcularInvestir(capitalInicial, taxaJuroMensal, tempoInvestido)}`);
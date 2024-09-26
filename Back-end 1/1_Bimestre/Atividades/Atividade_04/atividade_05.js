import entradaDados from 'readline-sync';

for (let i = 1;i <= 10;i ++) {

    let nome = entradaDados.question(`Digite o nome da pessoa ${i}: `);
    let salario = entradaDados.questionFloat(`Digite o salario de ${nome}: `);

    if (salario <= 2100) {
        console.log(`Nome: ${nome}\
        \nSalário: R$ ${salario}\
        \nValor do Imposto de renda: Isento do imposto de renda.`);
        console.log("\n");
    }
    
    else if (salario <= 2800) {
        console.log(`Nome: ${nome}\
        \nSalário: R$ ${salario}\
        \nValor do Imposto de renda: R$ ${salario*(7.5/100)}.`);
        console.log("\n");
    }

    else if (salario <= 3750) {
        console.log(`Nome: ${nome}\
        \nSalário: R$ ${salario}\
        \nValor do Imposto de renda: R$ ${salario*(15/100)}.`);
        console.log("\n");
    }

    else if (salario <= 4660) {
        console.log(`Nome: ${nome}\
        \nSalário: R$ ${salario}\
        \nValor que ira pagar do imposto de renda é: R$ ${salario*(22.5/100)}.`);
        console.log("\n");
    }

    else if (salario > 4660) {
        console.log(`Nome: ${nome}\
        \nSalário: R$ ${salario}\
        \nValor que ira pagar do imposto de renda é: R$ ${salario*(27.5/100)}.`);
        console.log("\n");
    }
}
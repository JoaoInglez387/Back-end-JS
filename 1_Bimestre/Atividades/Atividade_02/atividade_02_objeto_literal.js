/*1)*/
let apartamento = {
    quartos: 3,
    tipo: "Apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
};

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}° andar da ${apartamento.endereco}.`);

/*2)*/
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônico",
    peso: 1.5,
    preco: 3500.00
};

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por R$${produtoEmbalado.preco}.00.`);

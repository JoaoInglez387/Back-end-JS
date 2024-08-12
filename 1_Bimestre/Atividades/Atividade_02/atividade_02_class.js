/*3)*/
class Imovel {
    quartos;
    tipo;
    endereco;

    exibirInformacoes() {
        return `Uma ${this.tipo} com ${this.quartos} quartos, localizado no ${this.endereco}.`
    }
};

const casa = new Imovel ()
casa.quartos = 4
casa.tipo = "Casa"
casa.endereco = "Rua da Amizade, 789 - Bairro Alegre"
console.log(casa.exibirInformacoes());

const apartamento = new Imovel ()
apartamento.quartos = 2
apartamento.tipo = "Apartamento"
apartamento.endereco = "Avenida da Paz, 123 - Centro"
console.log(apartamento.exibirInformacoes());

/*4)*/

class Veiculo {
    marca;
    modelo;
    ano;

    exibirDetalhes () {
        return `Um veículo da marca ${this.marca} de modelo ${this.modelo} do ano ${this.ano}.`
    }
};

const carro = new Veiculo ()
carro.marca = "Toyota"
carro.modelo = "Corolla"
carro.ano = 2022
console.log(carro.exibirDetalhes())

const moto = new Veiculo ()
moto.marca = "Honda"
moto.modelo = "CBR 600RR"
moto.ano = 2021
console.log(moto.exibirDetalhes())
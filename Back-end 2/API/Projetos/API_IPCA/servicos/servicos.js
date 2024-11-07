import historicoInflacao from '../dados/dados.js';

export const buscarHistoricoIPCA = () => {
    return historicoInflacao;
};

export const buscarHistoricoIPCAporAno = (ano) => {
    const anoIPCA = parseInt(ano)
    return historicoInflacao.filter(ipca => ipca.ano === anoIPCA);
}

export const buscarIPCAporId = (id) => {
    const idIPCA = parseInt(id);
    return historicoInflacao.find(ipca => ipca.id === idIPCA);
}
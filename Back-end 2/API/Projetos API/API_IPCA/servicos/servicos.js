import historicoInflacao from '../dados/dados.js';

export const buscarHistoricoIPCA = () => {
    return historicoInflacao;
};

export const buscarHistoricoIPCAporAno = (ano) => {
    const anoIPCA = parseInt(ano);
    return historicoInflacao.filter(ipca => ipca.ano === anoIPCA);
};

export const buscarIPCAporId = (id) => {
    const idIPCA = parseInt(id);
    return historicoInflacao.find(ipca => ipca.id === idIPCA);
};

export const calculoIPCA = (valor, mesInicial, anoInicial,  mesFinal, anoFinal) => {
    const listaDeHistoricoIPCA = historicoInflacao.filter(ipca => {
        return (
            (ipca.ano === anoInicial && ipca.mes >= mesInicial) || 
            (ipca.ano > anoInicial && ipca.ano < anoFinal) || 
            (ipca.ano === anoFinal && ipca.mes <= mesFinal)
        );
    });

    let valorIPCA = valor;

    listaDeHistoricoIPCA.forEach(ipca => {
        valorIPCA *= (1 + (ipca.ipca / 100));
    });

    let resultado = parseFloat(valorIPCA.toFixed(2));
    return resultado;
};

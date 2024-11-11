import express from 'express';
import {buscarHistoricoIPCA, buscarHistoricoIPCAporAno, buscarIPCAporId, calculoIPCA } from "./servicos/servicos.js";

const app = express();
 
app.get('/historicoIPCA', (req, res) => {
    const ano = req.query.ano;
    const resultado = (ano !== undefined) ? buscarHistoricoIPCAporAno(ano) : buscarHistoricoIPCA();

    if (resultado.length > 0) {
        res.json(resultado);
    }
    else if (isNaN(ano)){
        res.status(400).json({"Erro": "Parâmetro 'ano' está ausente ou inválido."})
    }
    else {
        res.status(404).json({"Erro": "Nenhum histórico encontrado para o ano especificado."})
    }
});

app.get('/historicoIPCA/calculo', (req,res) => {
    const valor = parseFloat(req.query.valor);
    const mesInicial = parseInt(req.query.mesInicial);
    const anoInicial = parseInt(req.query.anoInicial);
    const mesFinal = parseInt(req.query.mesFinal);
    const anoFinal = parseInt(req.query.anoFinal);


    if (isNaN(valor) || isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal)) {
        return res.status(400).json({"Erro": "Parâmetros inválidos."});
    }
    else if (anoInicial > anoFinal || anoInicial == anoFinal && mesInicial > mesFinal) {
        return res.status(400).json({"Erro": "Parâmetros inválidos."});
    }
    else if (anoInicial < 2015 || anoFinal > 2024 || mesInicial < 1 || mesInicial > 12 || mesFinal > 12 || mesFinal < 1){
        return res.status(400).json({"Erro": "Parâmetros inválidos."})
    }
    else {
        const resultado = calculoIPCA(valor, mesInicial, anoInicial, mesFinal, anoFinal);
        res.json({ resultado: resultado });
    }
});

app.get('/historicoIPCA/:id', (req,res) => {
    const id = buscarIPCAporId(req.params.id);
    if (id) {
        res.json(id);
    }
    else if (isNaN(parseInt(req.params.id))) {
        res.status(400).json({"Erro": "Requisição Inválida"});
    }
    else {
        res.status(404).json({"Erro": "Elemento não encontrado!"})
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
})
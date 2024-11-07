import express from 'express';
import {buscarHistoricoIPCA, buscarHistoricoIPCAporAno, buscarIPCAporId } from "./servicos/servicos.js";

const app = express();

app.get('/historicoIPCA', (req, res) => {
    const dadosIPCA = buscarHistoricoIPCA ();
    res.json (dadosIPCA);
});    

app.get('/historicoIPCA', (req, res) => {
    const anoIPCA = req.query.
})

app.get('/historicoIPCA/:id', (req,res) => {
    const ipca = buscarIPCAporId(req.params.id);
    
    if (ipca) {
        res.json(ipca);
    }
    else if (isNaN(parseInt(req.params.id))) {
        res.status(400).send({"Erro": "Requisição Inválida"});
    }
    else {
        res.status(404).json({"Erro": "Elemento não encontrado!"})
    }
}) 

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
})
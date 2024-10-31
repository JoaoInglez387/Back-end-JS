const express = require('express');
const colecaoInstrumentos = require('./dados/dados');

const app = express();

app.get('/instrs', (req, res) => {
    res.json(colecaoInstrumentos.colecaoInstrumentos);
});

app.get('/instrs/:idinstr', (req, res) => {
    const idInstrumento = parseInt(req.params.idinstr);
    let mensagemErro = '';
    let instrumentos;

    if (!(isNaN(idInstrumento))) {
        instrumentos = colecaoInstrumentos.colecaoInstrumentos.find(i => i.id === idInstrumento);

        if (!instrumentos) {
            mensagemErro = 'Instrumento não encontrado!';
        }
        else {
            mensagemErro = 'Requisição inválida!';
        }

    }
    if (instrumentos){
        res.json(instrumentos);
    }
    else {
        res.status(404).json({"Erro": mensagemErro});
    }

});

app.get('/instrs/nome/:nomeinstr', (req, res) => {
    const nomeInstrumentos = req.params.nomeinstr;
    const instrumentos = colecaoInstrumentos.colecaoInstrumentos.filter(i => i.nome === nomeInstrumentos);

    if (instrumentos.length > 0) {
        res.json(instrumentos);
    }
    else {
        res.status(404).json({"Erro": "Instrumento não encontrado!"});
    }
});

app.get('/instrs/marca/:marcainstr', (req, res) => {
    const marcaInstrumentos = req.params.marcainstr;
    const instrumentos = colecaoInstrumentos.colecaoInstrumentos.filter(i => i.marca === marcaInstrumentos);

    if (instrumentos.length > 0) {
        res.json(instrumentos);
    }
    else {
        res.status(404).json({"Erro": "Instrumento não encontrado!"});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});

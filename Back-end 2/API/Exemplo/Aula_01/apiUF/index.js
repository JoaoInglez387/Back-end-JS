const  express = require('express');
const colecaoUf = require('./dados/dados.js');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf.colecaoUf);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF= parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUf.colecaoUf.find(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada!';
        }
        else {
            mensagemErro = 'Requisição inválida!';
        }
    }

    if (uf) {
        res.json(uf);
    }
    else {
        res.status(404).json({"Erro": mensagemErro});
    }
});

/*app.get('/ufs/:siglauf', (req, res) => {
    const siglaUF= req.params.siglauf;
    let mensagemErro = '';
    let uf;

    if (!(isNaN(siglaUF))) {
        uf = colecaoUf.colecaoUf.find(u => u.uf === siglaUF);
        if (!uf) {
            mensagemErro = 'Sigla não encontrada!';
        }
        else {
            mensagemErro = 'Requisição inválida!';
        }
    }

    if (uf) {
        res.json(uf);
    }
    else {
        res.status(404).json({"Erro": mensagemErro});
    }
});*/

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});
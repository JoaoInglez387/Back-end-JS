const express = require('express');
const app = express();

let conversorTemp = require('./conversorTemperatura');

app.get('/', (req, res) => {
    let tipoTemp = req.query.tipoTemp;
    let valorTemp = parseFloat(req.query.valorTemp);

    if (!tipoTemp || isNaN(valorTemp)) {
        res.status(422).json({Erro: 'Temperatura ou valor de temperatura inválido. Por favor, preencha corretamente!'})
    }
    else {
        if (conversorTemp.validaTipoTemp(req.query.tipoTemp) && conversorTemp.validaTemperatura(req.query.valorTemp)) {
            let conversor = conversorTemp.conversorTempCtoF(tipoTemp, valorTemp);
            let resultado = {'Tipo de Temperatura': tipoTemp, 'Temperatura será convertida': conversor.Temperatura || conversor.Erro};
        
            res.json(resultado);
        }
        else {
            res.status(400).json({Erro:'Tipo de temperatura inválido! Use "C" para Celsius e "F" para Fahrenheit.'});
        }
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciador em: ' + data);
});
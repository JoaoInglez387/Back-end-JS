const express = require('express');
const app = express();

app.get('/',(req,res) => {
    let mensagem = ({mensagem:'Olá, Mundo!', codigo:'1949'});
    res.json(mensagem);
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});

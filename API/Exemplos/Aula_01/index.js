const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Você é o cara!');
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});

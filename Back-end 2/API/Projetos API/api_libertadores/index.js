import express from 'express';
import { retornaCampeonatos, retornaCampeonatosID } from './servicos/retornaCampeonatos_servico.js';
//import pool from './servicos/conexao.js';

const app = express();

app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos();
    res.json(campeonatos);
});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonato = await retornaCampeonatosID(id);
    if (campeonato.length > 0) {
        res.json(campeonato);
    }
    else {
        res.status(404).json({ mensagem: "Nenhuma campeonato encontrado" });
    }
})

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: " + data);

    //const conexao = await pool.getConnection();
    //console.log(conexao.threadId);
    //conexao.release();
});
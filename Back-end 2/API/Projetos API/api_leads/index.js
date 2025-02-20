import express from 'express';
import cors from 'cors';
import { cadastrarUsuario } from './servico/cadastro_servico';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;

    if (typeof nome !== 'undefined' || typeof email !== 'undefined' || typeof telefone !== 'undefined') {
        return res.status(400).json({ Error: 'Todos os campos tem que está preenchidos!' });
    } else {
        try {
            const resultado = await cadastrarUsuario(nome, email, telefone);
            res.status(201).json({mesangem: 'Usuário cadastro com sucesso!'})
        } catch (error) {
            res.status(500).json({Erro: 'Erro ao cadastrar usuário!', error});
        }
    }
});

app.listen(9000, async () => {
    const data = new Date ();
    console.log("Servidor node iniciado em: " + data);
})
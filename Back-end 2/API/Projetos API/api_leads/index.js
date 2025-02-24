import express from 'express';
import cors from 'cors';
import { cadastrarUsuario } from './servico/cadastro_servico.js';
import { ValidaUsuario } from './validacao/valida.js';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res, next) => {
    try{
        const { nome, email, telefone } = req.body;

        const usuarioValido = ValidaUsuario(nome, email, telefone);

        if (usuarioValido.status) {
            await cadastrarUsuario(nome, email, telefone);
            res.status(204).json({mesangem: usuarioValido.mensagem});
        } else {
            return res.status(400).json({ mesangem: usuarioValido.mensagem});
        }
    } catch(error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensagem: 'Erro interno no servidor', erro: err.message });
});

app.listen(9000, async () => {
    const data = new Date ();
    console.log("Servidor node iniciado em: " + data);
})
import express from 'express';
import cors from 'cors';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    
})
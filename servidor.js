const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.post('/analisador', (req, res) => {

    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json({ erro: 'O campo "texto" é obrigatório.' });
    }

    const caracteres = texto.length;
    
    const palavras = texto.trim().split(/\s+/).length;
    
    const linhas = texto.split('\n').length;

    const resultado = {
        caracteres: caracteres,
        palavras: palavras,
        linhas: linhas  
    };

    res.status(200).json(resultado);
});

app.listen(port, () => {
    console.log(`Teste - Servidor funcionando em http://localhost:${port}`);
});


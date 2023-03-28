const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Ola Mundo')
})

app.listen('PORT', () => {
    console.log(`Servidor subido com sucesso na porta http://localhost:${PORT}`)
})
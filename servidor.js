const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000,()=>console.log('Servidor web rodando na porta 3000http://localhost:3000'));
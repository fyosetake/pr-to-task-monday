const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Rota para receber o webhook do GitHub
app.post('/github-webhook', (req, res) => {
  const eventData = req.body;

  if (eventData.action === 'started' && eventData.repository) {
    // Implemente a criação da tarefa no Monday.com aqui
    console.log('Repositório marcado como favorito:', eventData.repository.full_name);
  }

  res.sendStatus(200);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
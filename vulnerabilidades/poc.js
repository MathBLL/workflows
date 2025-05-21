// Dependência com CVE conhecida
const express = require('express');
const app = express();

// Simula um secret hardcoded
const slackWebhook = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX";

// Rota simples
app.get('/', (req, res) => {
  res.send('Vulnerável!');
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});

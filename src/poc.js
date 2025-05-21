const express = require('express');
const app = express();

const slackWebhook = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX";

app.get('/', (req, res) => {
  res.send('vuln!');
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});

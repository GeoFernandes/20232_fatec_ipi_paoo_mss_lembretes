require('dotenv').config();
const express = require('express');
const axios = require('axios');
const moment = require('moment'); // Adicionando o momento
const app = express();
 
app.use(express.json());
 
const registros = {};
let id = 1;
 
app.get('/logs', (req, res) => res.send(registros));
 
app.post('/eventos', (req, res) => {
  try {
    const dataHora = moment().format('YYYY-MM-DD HH:mm:ss'); // Utilizando moment
    registros[id] = {
      tipo: req.body.type,
      data: dataHora,
    };
    id++;
  } catch (e) {
    console.error(e);
  }
  res.status(200).end();
});
 
app.listen(process.env.PORT, () => console.log(`Logs: ${process.env.PORT}`));
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/webhook', (req, res) => {
    const { Body, From } = req.body;
    console.log(`Mensaje recibido de ${From}: ${Body}`);
    res.send('Mensaje recibido');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

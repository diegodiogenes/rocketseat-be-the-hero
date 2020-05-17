const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');
const app = express();

app.use(express.json());
app.use(cors());

//Configurando corretamente os cabeçalhos para o CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(routes);
app.use(errors());

module.exports = app

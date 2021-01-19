'use strict';

const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');

// INICIALIZATIONS
const app = express();
require('./database');

// SETTINGS
const port = 3000;

// MIDDLEARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs')

// ROUTES


app.listen(port, console.log(`Escuchando por el ${port}`));

app.use(express.static(__dirname + '/public'));
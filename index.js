'use strict';

const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
const path = require('path');

// INICIALIZATIONS
const app = express();
require('./database');


// SETTINGS
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// ROUTES
    //app.use(require('./routes/meal.routes'));
    app.use(require('./routes/index.routes'));

app.listen(port, console.log(`Escuchando por el ${port}`));

app.use(express.static(__dirname + '/public'));
const express = require('express');
const bodyParser = require('body-parser');
// Middlewares
const bearerToken = require('./middlewares/BearerToken');
// Routers
const mainRouter = require('./routes/main');

// App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api', (req, res) => res.send('API v1.0.0'));
app.use('/api/main', bearerToken, mainRouter);

module.exports = app;

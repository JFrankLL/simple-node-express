const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Middlewares
const auth = require('./middlewares/Auth');
// Routers
const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/index', auth, indexRouter);

module.exports = app;

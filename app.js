const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 4000;

app.use(morgan('tiny'));
// app.get('/', (req, res) => res.send('Hi from my App!'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.listen(port, () => debug(`listening on port ${chalk.green(port)}`));
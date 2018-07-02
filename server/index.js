// const nr = require('newrelic');
const compress = require('compression');
const parser = require('body-parser');
const path = require('path');
const express = require('express');

const env = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const App = express();

// require('../database_postgresql');
// require('../database_mongodb');
const {router} = require('./router');


App.use(parser.json());
App.use(parser.urlencoded({extended: true}));

App.use(compress());

App.use(express.static(path.join(__dirname, '../client/dist/')));

App.use('/api', router)

// console.log(App.get('env'));
App.listen(PORT, err => {
    err ? console.log('Failed to start server: ', err) : console.log('Listening on port ', PORT)
})


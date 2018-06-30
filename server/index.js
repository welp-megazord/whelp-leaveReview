const parser = require('body-parser');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const App = express();
// require('../database_postgresql');
// require('../database_mongodb');
const {router} = require('./router');

App.use(parser.json());
App.use(parser.urlencoded({extended: true}));

App.use(express.static(path.join(__dirname, '../client/dist/')))
App.use('/api', router)

App.listen(PORT, err => {
    err? console.log('Failed to start server: ', err) : console.log('Listening on port ', PORT)
})
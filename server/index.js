const parser = require('body-parser');
const path = require('path');
const express = require('express');

const PORT = 3000;
const App = express();

App.use(parser.json());
App.use(parser.urlencoded({extended: true}));

App.use(express.static(path.join(__dirname, '../client/dist/')))

App.listen(PORT, err => {
    err? console.log('Failed to start server: ', err) : console.log('Listening on port ', PORT)
})
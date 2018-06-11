const Sequelize = require('sequelize');

const connection = new Sequelize('yelp','JJ','', {
    host: 'localhost',
    dialect: 'postgres'
});

connection.authenticate()
    .then(() => {
        console.log('connected to database');
    })
    .catch(err => {
        console.log('Error connecting to the database ', err);
    })

module.exports = {
    connection: connection
};

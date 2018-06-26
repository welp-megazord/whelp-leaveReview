const Sequelize = require('sequelize');
const db = process.env.DB || 'reviews';
const user = process.env.USER || 'Kevin';
const pass = process.env.PASS || '';
const host = process.env.HOST || 'localhost';
const connection = new Sequelize(db, user, pass, {
    host: host,
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

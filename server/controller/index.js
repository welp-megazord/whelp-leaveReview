const { users } = require('../../database_postgresql/schema.js');
const { photos } = require('../../database_postgresql/schema.js');
const { restaurants } = require('../../database_postgresql/schema.js');
const { reviews } = require('../../database_postgresql/schema.js');

const user_controllers = {
    get: function(req, res) {
        users.findAll({})
        .then(data => {
            console.log('user data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving user data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

const photo_controllers = {
    get: function(req, res) {
        photos.findAll({})
        .then(data => {
            console.log('photo data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving photo data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

const restaurant_controllers = {
    get: function(req, res) {
        restaurants.findAll({})
        .then(data => {
            console.log('restaurant data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving restaurant data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

const review_controllers = {
    get: function(req, res) {
        reviews.findAll({})
        .then(data => {
            console.log('review data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving review data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

module.exports = {
    user_controllers: user_controllers,
    photo_controllers: photo_controllers,
    restaurant_controllers: restaurant_controllers,
    review_controllers: review_controllers
}
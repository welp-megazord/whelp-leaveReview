const Sequelize = require('sequelize');
const { connection } = require('./');
const { user_seeds } = require('./seeds.js');
const { photo_seeds } = require('./seeds.js');
const { restaurant_seeds } = require('./seeds.js');
const { review_seeds } = require('./seeds.js');

const reviews = connection.define('reviews', {
    date: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    counts: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(300),
        allowNull: false
    }
}, { timestamps: false });

const restaurants = connection.define('restaurants', {
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, { timestamps: false });

const users = connection.define('users', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    profilephoto: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    counts: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    location: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, { timestamps: false });

const photos = connection.define('photos', {
    src: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    review_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false }) 

connection.sync({force: false})
    .then(() => {
    // users.bulkCreate(user_seeds);
    // photos.bulkCreate(photo_seeds);
    // restaurants.bulkCreate(restaurant_seeds);
    // reviews.bulkCreate(review_seeds);
    console.log('successfully synced database')
    })
    .catch(err => console.log('error syncing to database', err));

module.exports = {
    reviews: reviews,
    restaurants: restaurants,
    users: users,
    photos: photos
};

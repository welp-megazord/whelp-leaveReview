const router = require('express').Router();

const { user_controllers } = require('../controller/index.js');
const { photo_controllers } = require('../controller/index.js');
const { restaurant_controllers } = require('../controller/index.js');
const { review_controllers } = require('../controller/index.js');


router.route('/users')
    .get(user_controllers.get)
    .post(user_controllers.post);

router.route('/photos')
    .get(photo_controllers.get)
    .post(photo_controllers.post);

router.route('/restaurants')
    .get(restaurant_controllers.get)
    .post(restaurant_controllers.post);

router.route('/reviews')
    .get(review_controllers.get)
    .post(review_controllers.post);


module.exports = {
    router: router
};
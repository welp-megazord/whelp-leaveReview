const { users } = require('../../database_postgresql/schema.js');
const { photos } = require('../../database_postgresql/schema.js');
const { restaurants } = require('../../database_postgresql/schema.js');
const { reviews } = require('../../database_postgresql/schema.js');

const user_controllers = {
  get: function (req, res) {
    users.findAll({
      where: {
        id: req.query.user_id
      }
    })
      .then(data => {
        console.log('user data received')
        res.status(200).send(data)
      })
      .catch(err => {
        console.log('error receiving user data', err)
        res.status(401)
      })
  },
  post: function (req, res) {
    users.create(req.body)
      .then(data => {
        console.log('Added user');
        res.status(200).send('Added user');
      })
      .catch(err => {
        console.log('Err in adding to users: ', err);
        res.status(400).send('ERROR');
      })
  },
  put: function (req, res) {
    const id = req.body.id;
    const newData = req.body.update[0];
    console.log(newData.counts);
    users.find({
      where: {
        id: id
      }
    })
      .then((data) => {
        if (data) {
          data.update(newData)
            .then(data => {
              res.status(202).send('User data updated');
            })
            .catch(err => {
              console.log('Err updating in user: ', err);
              res.status(400).send('ERROR');
            })
        }
        else {
          res.status(404).send('Cant find user data');
        }
      })
      .catch(err => {
        console.log('Users put err: ', err);
      });
  },
  delete: function (req, res) {
    const id = req.body.id;
    users.find({
      where: {
        id: id
      }
    })
      .then(data => {
        if (data) {
          data.destroy()
            .then(data => {
              res.status(202).send('User has been deleted');
            })
            .catch(err => {
              console.log('Err in destroying user row: ', err);
              res.status(400).send('ERROR');
            })
        }
        else {
          console.log('User not found');
          res.status(404).send('User not found');
        }
      })
      .catch(err => {
        console.log('Err in deleting user: ', err);
        res.status(400).send('Err')
      })
  }
}

const photo_controllers = {
  get: function (req, res) {
    photos.findAll({
      where: {
        review_id: req.query.review_id
      }
    })
      .then(data => {
        console.log('photo data received')
        console.log(data);
        res.status(200).send(data)
      })
      .catch(err => {
        console.log('error receiving photo data', err)
        res.status(401)
      })
  },
  post: function (req, res) {
    console.log('test')
    res.send('applied')
  }
}

const restaurant_controllers = {
  get: function (req, res) {
    // const id = req.query.ID;
    restaurants.findAll({
      where: {
        id: req.query.ID
      }
    })
      .then(data => {
        console.log('restaurant data received');
        res.status(200).send(data)
      })
      .catch(err => {
        console.log('error receiving restaurant data', err)
        res.status(401)
      })
  },
  post: function (req, res) {
    console.log('test')
    res.send('applied')
  }
}

const review_controllers = {
  get: function (req, res) {
    // let id = req.query.restaurant_id
    reviews.findAll({
      where: {
        restaurant_id: req.query.restaurant_id
      }
    })
      // reviews.findById(id)
      .then(data => {
        console.log('review data received')
        res.status(200).send(data)
      })
      .catch(err => {
        console.log('error receiving review data', err)
        res.status(401)
      })
  },
  post: function (req, res) {
    console.log('posting')
    console.log(req.body.restaurantID)
    console.log(req.body.reviewDescription)
    console.log(req.body.date)
    console.log(req.body.counts)
    console.log(req.body.rating)
    console.log(req.body.user_id)
    let x = req.body.restaurantID
    let newReview = { 'date': req.body.date, 'counts': req.body.counts, 'rating': req.body.rating, 'user_id': req.body.user_id, 'restaurant_id': req.body.restaurantID, 'description': req.body.reviewDescription }
    //  restaurant_id': req.body.restaurantID, 'description': req.body.reviewDescription}
    console.log(newReview)
    reviews.insertOrUpdate(newReview);
    res.send('applied')
  }
}

module.exports = {
  user_controllers: user_controllers,
  photo_controllers: photo_controllers,
  restaurant_controllers: restaurant_controllers,
  review_controllers: review_controllers
}
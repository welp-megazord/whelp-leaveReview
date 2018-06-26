const { users } = require('../../database_postgresql/schema.js');
const { photos } = require('../../database_postgresql/schema.js');
const { restaurants } = require('../../database_postgresql/schema.js');
const { reviews } = require('../../database_postgresql/schema.js');
// const { connection } = require('../../database_postgresql');

const POST = (model, req, res) => {
  model.create(req.body)
    .then(data => {
      console.log('Created');
      res.status(200).send('Created');
    })
    .catch(err => {
      console.log('Err in POSTING: ', err);
      res.status(400).send('ERROR');
    })
}

const PUT = (model, req, res) => {
  const id = req.body.id;
  const newData = req.body.update[0];
  console.log(newData.counts);
  model.find({
    where: {
      id: id
    }
  })
    .then((data) => {
      if (data) {
        data.update(newData)
          .then(data => {
            res.status(202).send('Data updated');
          })
          .catch(err => {
            console.log('Err updating DB: ', err);
            res.status(400).send('ERROR');
          })
      }
      else {
        res.status(404).send('Data doesnt exists in DB');
      }
    })
    .catch(err => {
      console.log('PUT err: ', err);
    });
}

const DELETE = (model, req, res) => {
  const id = req.body.id;
  model.find({
    where: {
      id: id
    }
  })
    .then(data => {
      if (data) {
        data.destroy()
          .then(data => {
            res.status(202).send('Data has been deleted');
          })
          .catch(err => {
            console.log('Err in destroying data row: ', err);
            res.status(400).send('ERROR');
          })
      }
      else {
        console.log('Data not found');
        res.status(404).send('Data not found');
      }
    })
    .catch(err => {
      console.log('Err in DELETE: ', err);
      res.status(400).send('Err')
    })
}

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
    POST(users, req, res);
  },
  put: function (req, res) {
    PUT(users, req, res);
  },
  delete: function (req, res) {
    DELETE(users, req, res);
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
    POST(photos, req, res);
  },
  put: function (req, res) {
    PUT(photos, req, res);
  },
  delete: function (req, res) {
    DELETE(photos, req, res);
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
    POST(restaurants, req, res);
  },
  put: function (req, res) {
    PUT(restaurants, req, res);
  },
  delete: function (req, res) {
    DELETE(restaurants, req, res);
  }
}

const review_controllers = {
  get: function (req, res) {
    // let id = req.query.restaurant_id
    // const query = `SELECT "id", "date", "counts", "rating", "user_id", "restaurant_id", "description" FROM "reviews" AS "reviews" WHERE "reviews"."restaurant_id"= '54';`
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
    POST(reviews, req, res);
  },
  put: function (req, res) {
    PUT(reviews, req, res);
  },
  delete: function (req, res) {
    DELETE(reviews, req, res);
  }
}

module.exports = {
  user_controllers: user_controllers,
  photo_controllers: photo_controllers,
  restaurant_controllers: restaurant_controllers,
  review_controllers: review_controllers
}
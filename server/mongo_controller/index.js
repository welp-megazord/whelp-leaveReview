const { db } = require('../../database_mongodb');
const { returnLast } = require('../../database_mongodb');
const { increment } = require('../../database_mongodb');

const POST = (op, req, res) => {
  let data = req.body;
  data._id = increment();
  db().collection(op).insertOne(data)
    .then(data => {
      res.status(200).send('Success');
    })
    .catch(err => {
      console.log('Err in users post: ', err);
      res.status(404).send('ERROR');
    })
};

const DELETE = (op, req, res) => {
  const id = req.body.id;
  db().collection(op).deleteOne({_id: id })
    .then(data => {
      // console.log(data);
      res.status(200).send('Data has been deleted');
    })
    .catch(err => {
      console.log('Err in delete: ', err);
      res.status(404).send('ERROR');
    })
};

const PUT = (op, req, res) => {
  const id = {_id: req.body.id};
  const newData = {
    $set : req.body.update
  };
  db().collection(op).updateOne(id, newData)
    .then(data => {
      res.status(200).send('Data has been updated');
    })
    .catch(err => {
      console.log('Err in PUT ', err);
      res.status(404).send('ERROR');
    })
}

user_controllers = {
  get: (req, res) => {
    db().collection('users').findOne({ _id: +req.query.user_id })
      .then(data => {
        // console.log(data);
        res.status(200).send([data]);
      })
      .catch(err => {
        console.log('Err in users: ', err);
        res.status(401).send('ERROR');
      })
  },
  post: (req, res) => {
    POST('users', req, res);
  },
  delete: (req, res) => {
    db().collection('users').deleteOne({_id: req.body.id})
      .then(data => {
        db().collection('reviews').deleteMany({user_id: req.body.id})
          .then(data => {
            console.log('Deleted');
            res.status(200).send('Data has been deleted');
          })
          .catch(err => {
            console.log('Error in delete users: ', err);
          })
      })
      .catch(err => {
        console.log('Error in delete users: ', err);
      })
  },
  put: (req, res) => {
    PUT('users', req, res);
  }
}

photo_controllers = {
  get: (req, res) => {
    db().collection('photos').find({ review_id: +req.query.review_id }).toArray()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(401).send('err in photo GET: ', err);
      })

  },
  post: (req, res) => {
    POST('photos', req, res);
  },
  delete: (req, res) => {
    DELETE('photos', req, res);
  },
  put: (req, res) => {
    PUT('photos', req, res);
  }
}

restaurant_controllers = {
  get: (req, res) => {
    db().collection('restaurants').find({ _id: +req.query.ID }).toArray()
      .then(row => {
        console.log(row);
        res.status(200).send(row);
      })
      .catch(err => {
        console.log('Err in restaurant GET: ', err);
        res.status(401).send('ERROR');
      })
  },
  post: (req, res) => {
    POST('restaurants', req, res);
  },
  delete: (req, res) => {
    db().collection('restaurants').deleteOne({_id: req.body.id})
      .then(data => {
        db().collection('reviews').deleteMany({restaurant_id: req.body.id})
          .then(data => {
            db().collection('photos').deleteMany({restaurant_id: req.body.id})
              .then(data => {
                res.status(200).send('Data has been deleted');
              })
              .catch(err => {
                console.log('error in restaurants delete: ', err);
                res.status(400).send('ERROR');
              })
          })
          .catch(err => {
            console.log('error in restaurants delete: ', err);
            res.status(400).send('ERROR');
          })
      })
      .catch(err => {
        console.log('error in restaurants delete: ', err);
        res.status(400).send('ERROR');
      })
  },
  put: (req, res) => {
    PUT('restaurants', req, res);
  }
}

review_controllers = {
  get: (req, res) => {
    db().collection('reviews').find({ restaurant_id: +req.query.restaurant_id }).toArray()
      .then(data => {
        console.log(data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('err in reviews: ', err);
        res.status(404).send('ERROR');
      })
  },
  post: (req, res) => {
    POST('reviews', req, res);
  },
  delete: (req, res) => {
    db().collection('reviews').deleteOne({_id: req.body.id})
      .then(data => {
        db().collection('photos').deleteMany({review_id: req.body.id})
          .then(data => {
            res.status(200).send('Data has been deleted');
          })
          .catch(err => {
            console.log('Err in review delete: ', err);
            res.status(401).send('ERROR');
          })
      })
      .catch(err => {
        console.log('Err in review delete: ', err);
        res.status(401).send('ERROR');
      })
  },
  put: (req, res) => {
    PUT('reviews', req, res);
  }
}

module.exports = {
  user_controllers,
  photo_controllers,
  restaurant_controllers,
  review_controllers
}
const mongo = require('mongodb');
const url = 'mongodb://localhost:27017';

const connection = mongo.connect(url, (err, client) => {
  if(err) console.log('Err connection to MongoDB: ', err);
  else {
    console.log('Successfully connected to MongoDB');
  }
})

module.exports = {
  connection
}
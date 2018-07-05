const faker = require('faker');
const fs = require('fs');
const Promise = require('bluebird');
const $ = require('jquery');
const path = require('path');

let userID = 1;
let photoID = 1;
let restID = 1;
let reviewID = 1;
const totalData = 9000000;
const photoURL = [
  'https://s3-media3.fl.yelpcdn.com/bphoto/LL_ibUp-R_2-iXkdO4V4-Q/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/FBoLLCJsOE2lL-Mbcy9S9w/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg', 
  'https://s3-media4.fl.yelpcdn.com/bphoto/D5iz3-3XXFlzNbmI0ft6lg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/Kau2nVXb86awQuf__6ne1Q/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/YMZDvRjbbtvR23_n1HGB0w/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/NrGw9alaEPQ-EW7aaGpxWQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/9_Rw4GinB050sDzECTJZ7g/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/htzdc0IVF8t4eE5FXyjq0Q/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/yVnQkwrnl36U3LTDGWa1Ow/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/R_nhNXaDugnLCTHb_HqSVw/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/arHtSEJhPK-eRrJg50T9MA/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/hQDnWccGdgPHJDfa4Ht5Ig/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/lokjec_jQy7Quc2co4Voeg/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/4PKpYavKII2S5t4LyqVLJA/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/oAdfYdes8tbm7LtdLwoirg/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/P4B4KHEOcCMTHX6jpomTrQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/sIs3kIJxv0cFlWGLG-pdYw/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/D5onVCpt_yd66CySfHqupQ/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/bjVM7EU4EIONpApXD8H5RA/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/j_uAjiI_9SfRqQlKEreq2A/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/7gJk28u6Z8n38AdEjhbj1w/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/4gUN0paSkCNPBqV5evvLkQ/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/jGNsTWAg3B2eb5BRwEx1lA/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/sJOKYa6_y_AodSlMBH9IbA/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/nz5gTrP0MasImd1nq3o6RQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/Hcl8zR7tBbMKKudXtzbEMA/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/eH9O_dKH-y7yMUUdidSJFw/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/uWPP2LXUMWa7y_vGzyb2qg/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/h_4PImxJvkSl-DeCyq6uag/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/TcUctJIiKw47GuHXpRfqqQ/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/lo5mYZTGxHwfB_paQ8TiQw/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/y4vzzB_fJpzvKnA-Ka-Lcw/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/QbqCC1IiPS1O6nIK6734Ng/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/75SLAExTKsx2wdm9TFr0nw/o.jpg'
]
const userReviews = [
  'Turn around. Hungry Bear is not worth your money.', 
  'Hungry Bear was the most delicious experience of my life so far.',
  'Pho ck You was the most dank experience of my life so far.',
  'bomb. Thats the only word I can use to describe Pho ck You.',
  'I LOVE Sushi Sasabune. The smell in the air as I walked inside... completely dank.',
  'Manhatten Beach Post is the most crap place I have ever eaten at!',
  'I LOVE Lucha Libre. the California Surfin Burrito was delightful.',
  'Del Friscos Grille was the most bomb experience of my life so far.',
  'I give Del Friscos Grille a well deserved 4 out of 5. I couldnt believe it.',
]

const generateUsers = () => {
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  // const counts = faker.fake("{{random.number(200)}},{{random.number(200)}},{{random.number(100)}}")
  const counts = `${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 100)}`
  const image = faker.image.avatar();
  const location = faker.address.city();
  return [userID++, name, counts, image, location];
}

const generatePhotos = () => {
  const src = photoURL[Math.floor(Math.random() * photoURL.length)];
  let reviewID = Math.floor(Math.random() * totalData);
  if(reviewID === 0) ++reviewID;
  let restaurantID = Math.floor(Math.random() * totalData);
  if(restaurantID === 0) ++restaurantID;
  return [photoID++, src, reviewID, restaurantID];
}

const generateRestaurants = () => {
  return [restID++, faker.company.companyName()];
}

const parseDate = (num, date) => {
  if(num === 0) {
    date += '06/';
  }
  else if(num > 0 && num < 10) {
    date += `0${num.toString()}/`;
  }
  else {
    date += `${num.toString()}/`;
  }
  return date;
}

const generateReviews = () => {
  const fakeDate = faker.date.between('2017-03-01', '2018-12-30');
  let date = '';
  date = parseDate(fakeDate.getMonth(), date);
  date = parseDate(fakeDate.getDay(), date);
  date += fakeDate.getFullYear().toString();
  // const counts = faker.fake("{{random.number(8)}},{{random.number(9)}},{{random.number(8)}}")
  const counts = `${Math.floor(Math.random() * 8)},${Math.floor(Math.random() * 9)},${Math.floor(Math.random() * 8)}`
  let ratings = Math.floor(Math.random() * 5);
  if(ratings === 0) ++ratings;
  let userID = Math.floor(Math.random() * totalData);
  if(userID === 0) ++userID;
  let restaurantID = Math.floor(Math.random() * totalData);
  if(restaurantID === 0) ++restaurantID;
  const description = userReviews[Math.floor(Math.random() * userReviews.length)];
  return [reviewID++, date, counts, ratings, userID, restaurantID, description];
}

const callWrite = (stream, func, timer, cb) => {
  promisifiedWrite(stream, func, timer, cb);
}

const writeData = (writer, generator, time, callback) => {
  let i = totalData;
  console.time(time);
  function write() {
    let ok = true;
    do {
      i--;
      if(i === 0) {
        writer.write(generator().join('\t'));
        callback();
      } else {
        ok = writer.write(generator().join('\t') + '\n');
      }
    } while(i > 0 && ok);
    if(i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
const dataFolder = path.join(__dirname, 'data');
const userWriter = fs.createWriteStream(`${dataFolder}/users.tsv`, {encoding: 'utf8'});
const photoWriter = fs.createWriteStream(`${dataFolder}/photos.tsv`, {encoding: 'utf8'});
const restaurantWriter = fs.createWriteStream(`${dataFolder}/restaurants.tsv`, {encoding: 'utf8'});
const reviewWriter = fs.createWriteStream(`${dataFolder}/reviews.tsv`, {encoding: 'utf8'});

const promisifiedWrite = Promise.promisify(writeData);

callWrite(userWriter, generateUsers, 'users', () => {
  console.log('Users');
  console.timeEnd('users');
});

callWrite(photoWriter, generatePhotos, 'photos', () => {
  console.log('Photos');
  console.timeEnd('photos');
});

callWrite(restaurantWriter, generateRestaurants, 'rest', () => {
  console.log('Restaurants');
  console.timeEnd('rest');
})

callWrite(reviewWriter, generateReviews, 'review', () => {
  console.log('Reviews');
  console.timeEnd('review');
})

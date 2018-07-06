# Yelp-Review-Component
This is a component that renders reviews from a postgre-sql database with mock reviews in. Designed to be a clone of Yelp's reviews microservice.

# Inserting data into mysql tables
COPY users (name, counts, profilephoto, location) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/users.txt';

COPY photos (src, review_id, restaurant_id) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/photos.txt';

COPY restaurants (name) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/restaurants.txt';

COPY reviews (date, counts, rating, user_id, restaurant_id, description) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/reviews.txt';

# Adding foreign key constraint to tables
ALTER TABLE photos
ADD CONSTRAINT review_id
FOREIGN KEY (review_id)
REFERENCES reviews(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE photos
ADD CONSTRAINT restaurant_id
FOREIGN KEY (restaurant_id)
REFERENCES restaurants(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE reviews
ADD CONSTRAINT restaurant_id
FOREIGN KEY (restaurant_id)
REFERENCES restaurants(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE reviews
ADD CONSTRAINT user_id
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

create index on photos(restaurant_id);
create index on photos(review_id);
create index on reviews(restaurant_id);
create index on reviews(user_id);



# MONGODB
mongoimport --db yelp --collection users --type tsv --drop --columnsHaveTypes --fields "_id.int32(),name.string(),counts.string(),profilephoto.string(),location.string()" --file users.tsv;

mongoimport --db yelp --collection photos --type tsv --drop --columnsHaveTypes --fields "_id.int32(),src.string(),review_id.int32(),restaurant_id.int32()" --file photos.tsv;

mongoimport --db yelp --collection reviews --type tsv --drop --columnsHaveTypes --fields "_id.int32(),date.string(),counts.string(),rating.int32(),user_id.int32(),restaurant_id.int32(),description.string()" --file reviews.tsv;

mongoimport --db yelp --collection restaurants --type tsv --drop --columnsHaveTypes --fields "_id.int32(),name.string()" --file restaurants.tsv;


# Photos
db.photos.createIndex({review_id: 1});
db.photos.createIndex({restaurant_id: 1});
# Reviews
db.reviews.createIndex({user_id: 1});
db.reviews.createIndex({restaurant_id: 1});

#DOCKER
Remove all stopped containers - docker rm $(docker ps -a -q) 
Get into running docker bash - docker exec -it (container ID) bash - to get into bash shell
Pushing image up to docker hub - docker tag bb38976d03cf yourhubusername/verse_gapminder:firsttry

mongoimport --db yelp --collection restaurants --type tsv --file restaurants.tsv --fields _id,name
mongoimport --db yelp --collection users --type tsv --file users.tsv --fields _id,name,counts,profilephoto,location
mongoimport --db yelp --collection reviews --type tsv --file reviews.tsv --fields _id,date,counts,rating,user_id,restaurant_id,description
mongoimport --db yelp --collection photos --type tsv --file photos.tsv --fields _id,src,review_id,restaurant_id

NGINX
/usr/local/etc/nginx

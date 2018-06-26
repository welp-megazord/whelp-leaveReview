# Yelp-Review-Component
This is a component that renders reviews from a postgre-sql database with mock reviews in. Designed to be a clone of Yelp's reviews microservice.

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



#MONGODB
mongoimport --db yelp --collection users --type tsv --drop --columnsHaveTypes --fields "_id.int32(), name.string(), counts.string(),profilephoto.string(), location.string()" --file users.tsv;

mongoimport --db yelp --collection photos --type tsv --drop --columnsHaveTypes --fields "_id.int32(),src.string(),review_id.int32(),restaurant_id.int32()" --file photos.tsv;

mongoimport --db yelp --collection reviews --type tsv --drop --columnsHaveTypes --fields "_id.int32(),date.string(),counts.string(),rating.int32(),user_id.int32(),restaurant_id.int32(),description.string()" --file reviews.tsv;

mongoimport --db yelp --collection restaurants --type tsv --drop --columnsHaveTypes --fields "_id.int32(),name.string()" --file restaurants.tsv;

#Users
db.users.createIndex({rid: 1});
#Photos
db.photos.createIndex({review_id: 1});
db.photos.createIndex({restaurant_id: 1});
#Reviews
db.reviews.createIndex({user_id: 1});
db.reviews.createIndex({restaurant_id: 1});

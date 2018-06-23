# Yelp-Review-Component
This is a component that renders reviews from a postgre-sql database with mock reviews in. Designed to be a clone of Yelp's reviews microservice.

# Adding foreign key constraint to tables
ALTER TABLE photos
ADD CONSTRAINT review_id
FOREIGN KEY (review_id)
REFERENCES reviews(id);

ALTER TABLE photos
ADD CONSTRAINT restaurant_id
FOREIGN KEY (restaurant_id)
REFERENCES restaurants(id);

ALTER TABLE reviews
ADD CONSTRAINT restaurant_id
FOREIGN KEY (restaurant_id)
REFERENCES restaurants(id);

ALTER TABLE reviews
ADD CONSTRAINT user_id
FOREIGN KEY (user_id)
REFERENCES users(id);
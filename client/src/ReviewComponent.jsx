import React from 'react';
import Header from './components/Header.jsx';
import LeaveReview from './components/LeaveReview.jsx';
import Review from './components/Review.jsx';

export default class ReviewComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantName: 'Hungry Bear',
            reviews: [
                {
                    username: 'Joshua J.',
                    location: 'San Diego, CA',
                    date: '06/01/2018',
                    friends_count: 9999,
                    reviews_count: 3,
                    photos_count: 999,
                    useful_count: 4,
                    funny_count: 8,
                    cool_count: 0,
                    reviewDescription: 'I LOVE Hungry Bear. Absolutely awesome. The atmosphere of the place was comfortable af. I now feel bomb as F#!K. Bring your friends and family to Hungry Bear to try the Fries',
                    img_src: "https://avatars0.githubusercontent.com/u/33384155?s=460&v=4",
                    rating: 4,
                    photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/LL_ibUp-R_2-iXkdO4V4-Q/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/FBoLLCJsOE2lL-Mbcy9S9w/o.jpg"]
                },
                {
                    username: 'Aldo H.',
                    location: 'Los Angeles, CA',
                    date: '06/02/2018',
                    friends_count: 12,
                    reviews_count: 2,
                    photos_count: 999,
                    useful_count: 30,
                    funny_count: 80,
                    cool_count: 12,
                    reviewDescription: 'Turn around. Hungry Bear is not worth your money. The manager especially was awful. If you get the Burger, expect it to be soggy. I couldnt believe it. When my tastebuds made contact with the Fries, I felt disgusted. I have to give the place a 1 out of 5.',
                    img_src: "https://avatars2.githubusercontent.com/u/32969152?s=460&v=4",
                    rating: 1,
                    photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg"]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                < Header RestaurantName={this.state.RestaurantName}/>
                < LeaveReview RestaurantName={this.state.RestaurantName}/>
                { this.state.reviews.map(review => (
                < Review rating={review.rating} photos={review.photos} username={review.username} location={review.location} date={review.date} friends_count={review.friends_count} reviews_count={review.reviews_count} photos_count={review.photos_count} useful_count={review.useful_count} funny_count={review.funny_count} cool_count={review.cool_count} reviewDescription={review.reviewDescription} imgSrc={review.img_src} />
                ))
                }
            </div>
        )
    }
}
const user_seeds = [
    {name: 'Joshua J.', profilephoto: 'https://avatars0.githubusercontent.com/u/33384155?s=460&v=4', counts: '8,7,6', location: 'San Diego'},
    {name: 'Aldo H.', profilephoto: 'https://avatars2.githubusercontent.com/u/32969152?s=460&v=4', counts: '5,37,10', location: 'Los Angeles'}
]

const photo_seeds = [
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/LL_ibUp-R_2-iXkdO4V4-Q/o.jpg', review_id: 1, restaurant_id: 1},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/FBoLLCJsOE2lL-Mbcy9S9w/o.jpg', review_id: 1, restaurant_id: 1},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg', review_id: 2, restaurant_id: 1}
]

const restaurant_seeds = [
    {name: 'Hungry Bear'}
]

const review_seeds = [
    {date: '06/01/2018', counts: '4,8,0', rating: 4, user_id: 1, restaurant_id: 1, description: 'I LOVE Hungry Bear. Absolutely awesome. The atmosphere of the place was comfortable af. I now feel bomb as F#!K. Bring your friends and family to Hungry Bear to try the Fries'},
    {date: '06/02/2018', counts: '3,1,5', rating: 2, user_id: 2, restaurant_id: 1, description: 'Turn around. Hungry Bear is not worth your money. The manager especially was awful. If you get the Burger, expect it to be soggy. I couldnt believe it. When my tastebuds made contact with the Fries, I felt disgusted. I have to give the place a 1 out of 5.'} 
]

module.exports = {
    user_seeds: user_seeds,
    photo_seeds: photo_seeds,
    restaurant_seeds: restaurant_seeds,
    review_seeds: review_seeds
} 
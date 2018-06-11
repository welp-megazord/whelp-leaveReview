import React from 'react';
import styles from '../css/Ratings.css';

const RatingImg = (props) => (
    <div className={[styles.i_stars, styles[props.rating.split('').includes('.')? "i_stars__"+props.size+"_"+props.rating.split('')[0]+"_half" : "i_stars__"+props.size+"_"+props.rating]].join(' ')}>
        <img className={[styles.offscreen, styles.image].join(' ')} height="303" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" width="84" />
    </div>
)

export default RatingImg;
import React from 'react';
import styles from '../css/Review.css';

const SmallStarIcon = (props) => (
    <span alt="test" className={styles.small_star_icon}>
        <svg className="icon_svg" viewBox="-2 0 17 16" height="10" width="10">
            <path fill={"#fff"} d="M8.94 1l2.373 5.387 5.187.758-3.75 3.67.928 5.077-4.737-2.907L4.367 16l.885-5.186-3.75-3.67 5.187-.757L8.94 1z"></path>
        </svg>
    </span>
)

export default SmallStarIcon;
import React from 'react';
import styles from '../css/Header.css';

const FriendsIcon = () => (
    <span className="">
        <svg className={styles.icon} viewBox="-5 0 20 20" height="25" width="25">
            <path fill={"#f15c00"} d="M6.592 7.53l-1.846 3.832c-.41.856-1.082.85-1.492-.007l-1.846-3.82c-.41-.856.005-1.53.923-1.53h3.34c.918 0 1.333.67.923 1.526zM4 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
            <path fill={"#f15c00"} d="M12.592 7.53l-1.846 3.832c-.41.856-1.082.85-1.492-.007l-1.846-3.82c-.41-.856.005-1.53.923-1.53h3.34c.918 0 1.333.67.923 1.526zM10 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" opacity=".502"></path>
        </svg>
    </span>
)

export default FriendsIcon
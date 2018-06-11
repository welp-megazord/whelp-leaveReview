import React from 'react';
import styles from '../css/Header.css';

const EmbedIcon = () => (
    <span className="">
        <svg className={styles.icon} viewBox="-5 -2 22 22" height="22" width="22">
            <path fill={"#0073bb"} d="M12.503 13.76a.717.717 0 0 1-.526.23.717.717 0 0 1-.526-.23.822.822 0 0 1 0-1.117l3.444-3.652-3.444-3.65a.822.822 0 0 1 0-1.116.714.714 0 0 1 1.053 0l4.495 4.77-4.495 4.767zm-5.954 0a.717.717 0 0 1-.528.23.718.718 0 0 1-.526-.23L1.002 8.99l4.495-4.768a.714.714 0 0 1 1.052 0c.29.308.29.808 0 1.116L3.105 8.99l3.442 3.653c.29.308.29.808 0 1.116z"></path>
        </svg>
    </span>
)

export default EmbedIcon
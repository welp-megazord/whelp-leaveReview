import React from 'react';
import styles from '../css/Header.css';

const ShareIcon = () => (
    <span className="">
        <svg className={styles.icon} viewBox="-5 -2 22 22" height="22" width="22">
            <path fill={"#0073bb"} d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z"></path>
        </svg>
    </span>
)

export default ShareIcon
import React from 'react';
import styles from '../css/Header.css';

const MessageIcon = () => (
    <span className="">
        <svg className={styles.icon} viewBox="-5 -2 22 22" height="22" width="22">
            <path fill={"#0073bb"} d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
        </svg>
    </span>
)

export default MessageIcon
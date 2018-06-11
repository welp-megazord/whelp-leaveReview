import React from 'react';
import styles from '../css/Header.css';

const ComplimentIcon = () => (
    <span>
        <svg className={styles.icon} viewBox="-5 -2 22 22" height="22" width="22">
            <path fill={"#0073bb"} d="M14.5 6.75a5.5 5.5 0 0 0-11 0 5.495 5.495 0 0 0 2.993 4.892L5.5 16.75l3.505-2 3.495 2-.993-5.108A5.495 5.495 0 0 0 14.5 6.75zm-5.5 4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path>
        </svg>
    </span>
)

export default ComplimentIcon
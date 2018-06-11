import React from 'react';
import styles from '../css/Header.css';

const FollowingIcon = () => (
    <span className="">
        <svg className={styles.icon} viewBox="-5 -2 22 22" height="22" width="22">
            <path fill={"#0073bb"} d="M16 13l-4 3v-2H9l1-2h2v-2l4 3zm-8.925 2.383c-.443.817-1.707.817-2.15 0L2.128 9.605C1.728 8.868 2.31 8 3.203 8h5.594c.893 0 1.474.868 1.075 1.605l-2.797 5.778zM6 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
        </svg>
    </span>
)

export default FollowingIcon
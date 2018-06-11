import React from 'react';
import styles from '../css/Header.css';

const SearchIcon = () => (
    <span className="">
        <svg className={styles.icon} viewBox="0 0 20 20" height="20" width="20">
            <path fill={"#fff"} d="M19.34 17.925l-3.953-3.952A5.968 5.968 0 0 0 16.5 10.5a6 6 0 1 0-6 6 5.968 5.968 0 0 0 3.473-1.113l3.952 3.952a1 1 0 0 0 1.414-1.416zM10.5 14.5c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path>
        </svg>
    </span>
)

export default SearchIcon
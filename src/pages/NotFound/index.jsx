import React from 'react';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const index = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404 - Page Not Found</h1>
            <p className={styles.message}>The page you are looking for does not exist.</p>
            <button onClick={() => navigate('/')} className={styles.homeLink}>
                Go Back Home
            </button>
        </div>
    )
}

export default index;
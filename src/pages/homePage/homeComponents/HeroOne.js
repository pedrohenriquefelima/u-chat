import React from "react";
import styles from './HeroOne.module.css';
import CHAT_FLAGS from '../../../materials/images/chatFlags.png';

const HeroOne = () => {
    return (
        <div className={styles.container}>
            <div className={styles.welcome}>
                <h1 className={styles['welcoming-text']}>Welcome</h1>
                <h3 className={styles['welcoming-subtext']}>Language Mastery - Speak with Confidence!</h3>
            </div>
            <div className={styles['image-container']}>
                <img src={CHAT_FLAGS} alt="Logo" className={styles['chat-flags']}/>
            </div>
        </div>
    )
}

export default HeroOne;
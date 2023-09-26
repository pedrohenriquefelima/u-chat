import React from "react";
import styles from './HeroTwo.module.css';
import Button from "../../../components/UI/Button";
import USERS_CONNECTED from '../../../materials/images/usersConnected.png'

const HeroTwo = () => {

const goSomewhere = () => {
    console.log('to go somewhere');
}

return (
        <>
            <div className={styles.container}>
                <div className={styles['image-container']}>
                    <img src={USERS_CONNECTED} alt="users connected network carton" className={styles['chat-flags']}/>
                </div>
                <div className={styles['text-container']}>
                    <div className={styles.uChat}>
                        <span className={styles['letter-u']}>U</span><span className={styles.chat}>Chat</span>
                    </div>
                    <p className={styles['body-text']}>
                        Welcome to Uchat, your passport to a global language and cultural journey. Imagine connecting with people from every corner of the world, sharing stories, experiences, and laughter, all while mastering a new language and immersing yourself in diverse cultures.With Uchat, the world is at your fingertips, and the possibilities are endless.
                        Whether you're an aspiring polyglot, a culture enthusiast, or simply someone eager to make new friends worldwide, Uchat is your gateway to an extraordinary adventure. Start conversations, break language barriers, and unlock a world of opportunities right from your device.
                        Join us today and embark on a chat-powered odyssey that will not only broaden your horizons but also warm your heart. Uchat - where languages and cultures unite.
                    </p>
                    <div  className={styles['get-started']}>
                        <Button type='button' onClick={goSomewhere}>Get Started</Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HeroTwo;
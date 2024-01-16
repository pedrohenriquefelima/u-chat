import React from "react";
import styles from './MainHomeContent.module.css';
import USERS_CONNECTED from '../../../materials/images/usersConnected.png';
import VIDEO_CALL from '../../../materials/images/heroOne.jpg'
import SEARCH_CARD from '../../../materials/images/searchIcon.png';
import CARD_IDEA_ICON from '../../../materials/images/cardIdeaIcon.png';
import CARD_CHAT_ICON from '../../../materials/images/chatCardIcon.png'
import CardSquare from "../../../components/UI/CardSquare";


const HeroOne = () => {

    const cardsData = [
        { 
            image: SEARCH_CARD,
            label: 'Embark on a Cultural Adventure as You Learn and Explore!',
            alt: 'cardIcon search'
        },
        { 
            image: CARD_CHAT_ICON,
            label: 'Boost Your Language Skills with Engaging Conversations with Native Speakers!',
            alt: 'two chat boxes inside an yellow circle'
        },
        { 
            image: CARD_IDEA_ICON,
            label: 'Open Doors to Opportunities and Amplify Your Potential in a fun and interactive enviroment!',
            alt: 'a head with a lamp as an idea'
        },
    ]

    const goSomewhere = () => {
        console.log('to go somewhere');
    }

    return (
        <section>
            <div className={styles['hero-container']}>
                <div className={styles.welcome}>
                    <h1 className={styles['welcoming-text']}>Welcome</h1>
                    <h3 className={styles['welcoming-subtext']}>Language Mastery - Speak with Confidence!</h3>
                    <ul className={styles['unordered-list-welcome']}>
                        <li><i class="em em-white_check_mark" aria-role="presentation" aria-label="WHITE HEAVY CHECK MARK"></i> Speak with convidence</li>
                        <li><i class="em em-white_check_mark" aria-role="presentation" aria-label="WHITE HEAVY CHECK MARK"></i> Chat with native speakers</li>
                        <li><i class="em em-white_check_mark" aria-role="presentation" aria-label="WHITE HEAVY CHECK MARK"></i> Discover new cultures</li>
                        <li><i class="em em-white_check_mark" aria-role="presentation" aria-label="WHITE HEAVY CHECK MARK"></i> Make new friends</li>
                    </ul>
                    <div className={styles['button-container']}>
                        <button className={styles['get-started-button']}>Get started</button>
                    </div>
                </div>
                <div className={styles['hero-one-image']}>
                    <img src={VIDEO_CALL} alt="users connect-video camera" className={styles['video-call']}/>
                </div>  
            </div>
            <div className={`${styles['hero-container']}  ${styles['hero-margin-top']}  ${styles['scroll-effect']}`}>
                <div className={styles['hero-two-image']}>
                    <img src={USERS_CONNECTED} alt="users connected network carton"/>
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
                    <div className={styles['button-container']}>
                        <button className={styles['get-started-button']}>Get started</button>
                    </div>
                </div>
            </div>
            <div className={`${styles['hero-container']}  ${styles['hero-margin-top']} ${styles['scroll-effect']}`}>
                {cardsData.map((item) => {
                    return <CardSquare cardItem={item}/>
                })}
            </div>
        </section>
    )
}

export default HeroOne;
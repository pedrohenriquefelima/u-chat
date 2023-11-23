import React from "react";
import styles from './HeroOne.module.css';
import CHARLES from '../../../materials/images/eyeglassesman.png';
import DAVID from '../../../materials/images/david.png'
import CHRISTA from '../../../materials/images/christa.jpg'
import MARIE from '../../../materials/images/marie.jpg'


const HeroOne = () => {
    return (
        <section className={styles.container}>
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
            <div className={styles['all-circles']}>
                <div className={styles["circle-one-container"]}>
                    <div className={styles["circle-one-container-parent"]}>
                        <div className={styles['chat-box-right-one']}>
                            Hello1
                        </div>
                        <div className={styles['img-container-one']}>
                            <img src={CHARLES} alt="A tall bold man smiling"/>
                        </div>
                    </div>
                </div>

                <div className={styles["circle-two-container"]}>
                    <div className={styles["circle-two-container-parent"]}>
                        <div className={styles['chat-box-left-two']}>
                            Hello2
                        </div>
                        <div className={styles['img-container-two']}>
                            <img src={MARIE} alt="A tall bold man smiling"/>
                        </div>
                    </div>
                </div>

                <div className={styles["circle-three-container"]}>
                    <div className={styles["circle-three-container-parent"]}>
                        <div className={styles['chat-box-right-three']}>
                            Hello3
                        </div>
                        <div className={styles['img-container-three']}>
                            <img src={DAVID} alt="A tall bold man smiling"/>
                        </div>
                    </div>
                </div>

                <div className={styles["circle-four-container"]}>
                    <div className={styles["circle-four-container-parent"]}>
                        <div className={styles['chat-box-right-four']}>
                            Hello4
                        </div>
                        <div className={styles['img-container-four']}>
                            <img src={CHRISTA} alt="A tall bold man smiling"/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default HeroOne;
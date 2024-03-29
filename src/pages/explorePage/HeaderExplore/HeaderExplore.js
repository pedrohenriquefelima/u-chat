import styles from './HeaderExplore.module.css';
import LEARNING_IMG from '../../../materials/images/Wavy-learning.jpg'
import InnerCountryList from '../../../components/UI/InnerCountryList';
import { SearchBarGeneric } from '../../../components/UI/SearchBarGeneric';
import { SearchLanguageList } from '../../../components/UI/searchLanguagesList/SearchLanguageList';

const HeaderExplore = () => {
    return (
        <>
            <div className={styles['container-learning']}>
                <div className={styles['hero-text']}>
                    <h3 className={styles.enthusiasts}>FIND YOUR LANGUAGE PARTNER <span className={styles['online-text']}>ONLINE</span></h3>
                    <p> At Uchat, we believe that learning a new language can be fun, engaging, and most importantly, effective when you have the right language partner. Whether you're a beginner looking to grasp the basics or an advanced learner aiming to refine your skills, our platform connects language enthusiasts from around the world to facilitate meaningful language exchange. </p>
                </div>
                <img src={LEARNING_IMG} alt='test' className={styles.learning}/>
            </div>
        </>
        
        
    )
}

export default HeaderExplore;
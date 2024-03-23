import { useState } from 'react';
import styles from './UsersFilters.module.css';
import { SearchLanguageList } from '../../../components/UI/searchLanguagesList/SearchLanguageList';
import { SearchInterestList } from '../../../components/UI/searchInterestsList/SearchInterestList';



const UsersFilters = ({interestOptionsValues}) => {

    const [interestOptions, setInterestOptions] = useState(interestOptionsValues);
    const [openInterest, setOpenInterest] = useState(false)
    const [openLearning, setOpenLearning] = useState(false)
    const [openTeaching, setOpenTeaching] = useState(false)
    const [selectedInterests, setSelectedInterest] = useState([]);

    const handleInterestHover = (isOpen) => {
        if(isOpen){
            setOpenLearning(false);
            setOpenTeaching(false);
        }
        setOpenInterest(isOpen);
    };

    const handleLearningHover = (isOpen) => {
        if(isOpen){
            setOpenInterest(false);
            setOpenTeaching(false);
        }
        setOpenLearning(isOpen);
    };

    const handleTeachingHover = (isOpen) => {
        if(isOpen){
            setOpenInterest(false);
            setOpenLearning(false);
        }
        setOpenTeaching(isOpen);
    };

    return (
        <div className={styles['filtering-container']}>
            <div className={styles['main-filter']}>
                <div>
                    <div 
                        className={styles.button} 
                        onClick={()=>handleInterestHover(!openInterest)}
                    >
                        Interests</div>
                    {openInterest && <SearchInterestList optionsData={interestOptions} hoverOverHandler={handleInterestHover}/>}
                </div>
                <div>
                    <div className={styles.button} 
                        onClick={()=>handleLearningHover(!openLearning)}
                    >
                        Learning</div>
                    {openLearning &&<SearchLanguageList className={styles.learning} sourceButton='learning' hoverOverHandlerLearning={handleLearningHover}/>}
                </div>
                <div>
                    <div 
                        className={styles.button} 
                        onClick={()=>handleTeachingHover(!openTeaching)}
                    >
                        Teaching</div>
                    {openTeaching &&<SearchLanguageList className={styles.learning} sourceButton='teaching' hoverOverHandlerTeaching={handleTeachingHover}/>}
                </div>
                
                <div className={styles.button}>Clear</div>
            </div>
           
        </div>
    )
}

export default UsersFilters;
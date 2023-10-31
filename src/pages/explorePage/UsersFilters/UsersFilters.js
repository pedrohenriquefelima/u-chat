import { useEffect } from 'react';
import styles from './UsersFilters.module.css';

const UsersFilters = () => {

    useEffect(()=>{
        //when it loads for the first time loads all users
        
    },[])

    return (
        <div className={styles['filtering-container']}>
           <div className={styles.button}>Interests</div>
           <div className={styles.button}>Learning</div>
           <div className={styles.button}>Speaks</div>
           <div className={styles.button}>Level</div>
           <div className={styles.clear}>Clear</div>
           <div className={styles.search}></div>
        </div>
    )
}

export default UsersFilters;
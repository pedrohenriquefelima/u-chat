import styles from "./SearchBarGeneric.module.css";
import {FaSearch} from 'react-icons/fa';
export const SearchBarGeneric = () => {
    return (
        <div className={styles['input-wrapper']}>
            <FaSearch className={styles['search-icon']}/>
            <input placeholder="Type to search..."/>
        </div>
    )
}

import { useState } from 'react';
import styles from './UsersFilters.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItem from '../../../components/UI/FilterItem';
import InnerCountryList from '../../../components/UI/InnerCountryList';
import { SearchLanguageList } from '../../../components/UI/searchLanguagesList/SearchLanguageList';



const UsersFilters = ({interestOptionsValues}) => {
    console.log('interestOptionsValues',JSON.stringify(interestOptionsValues));

    const [interestOptions, setInterestOptions] = useState(interestOptionsValues);
    const [openInterest, setOpenInterest] = useState(false)
    const [openLearning, setOpenLearning] = useState(false)
    const [selectedInterests, setSelectedInterest] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");

    function selectedItemHandler(item) {
        //only add if it hasn't been added already
        const exist = selectedInterests.find(option => option.label === item.label);
        if(!exist) {
            setSelectedInterest((prev)=>{
                return [...prev, item];
            })
        }else {
            const removed = selectedInterests.filter(option => option.label !== item.label);
            console.log(removed);
            setSelectedInterest(removed);
        }
    }



    return (
        <div className={styles['filtering-container']}>
            <div className={styles['main-filter']}>
                <div>
                    <div className={styles.button} onClick={()=>setOpenInterest(!openInterest)}>Interests</div>
                        {openInterest &&<div className={styles['dropdown-ul']}>
                                <div className={styles.inputContainer}>
                                    <FontAwesomeIcon icon={faSearch}  className={styles.icon} />
                                    <input className={styles['type-here']} type='text' placeholder='Type here...' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                                </div>
                        {    
                                interestOptions?.map(option => {
                                    const propertyNames = Object.keys(option);
                                    const arrayValue = option[propertyNames[0]];
                                    return (
                                            <div className={styles['option-container']}>
                                                <span className={[`${styles['group-title']} ${propertyNames[0].toLowerCase().startsWith(inputValue) ||  inputValue === ""? styles['item-show'] : styles['item-hide']}`]}>{propertyNames}</span>
                                                <div className={styles['option-item-container']}>
                                                    {arrayValue?.map(item => {
                                                        return <FilterItem key={item._id} item={item} selectedOption={selectedItemHandler} arraySelected={selectedInterests}/>
                                                    })}
                                                </div>
                                                
                                            </div>)
                                })
                        }
                    </div>}
                </div>
                <div>
                    <div className={styles.button} onClick={()=>setOpenLearning(!openLearning)}>Learning</div>
                    {openLearning &&<SearchLanguageList className={styles.learning}/>}
                </div>
                
                <div className={styles.button}>Teaching</div>
                <div className={styles.button}>Clear</div>
            </div>
           
        </div>
    )
}

export default UsersFilters;
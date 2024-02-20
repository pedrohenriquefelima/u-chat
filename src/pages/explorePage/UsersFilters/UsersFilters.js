import { useState } from 'react';
import styles from './UsersFilters.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItem from '../../../components/UI/FilterItem';


const UsersFilters = ({interestOptionsValues}) => {
    console.log('interestOptionsValues',JSON.stringify(interestOptionsValues));

    const [interestOptions, setInterestOptions] = useState(interestOptionsValues);
    const [open, setOpen] = useState(false)
    const [selectedInterests, setSelectedInterest] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleItemClick(objItem) {
        const exists = selectedInterests?.some(item => {
            console.log(JSON.stringify(item));
            return item.label === objItem.label});
        if(exists) {
            const selectedInteTemp = selectedInterests?.filter(item => item.label != objItem.label);
            console.log('selectedInteTemp:::', JSON.stringify(selectedInteTemp));
            setSelectedInterest(selectedInteTemp);
            return;
        }
        console.log('selectedInterests::::',JSON.stringify(selectedInterests));
        setSelectedInterest((current) => {
            return [...current, objItem];
        })
    }

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
                <div className={styles.button} onClick={()=>setOpen(!open)}>Interests</div>
                    {open &&<div className={styles['dropdown-ul']}>
                            <div className={styles.inputContainer}>
                                <FontAwesomeIcon icon={faSearch}  className={styles.icon} />
                                <input className={styles['type-here']} type='text' placeholder='Type here...' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                            </div>
                       {    
                            interestOptions?.map(option => {
                                const propertyNames = Object.keys(option);
                                const arrayValue = option[propertyNames[0]];
                
                                // const shouldHide = arrayValue.some(value => value.name !== inputValue);
                                
                                return (
                                        <div className={styles['option-container']}>
                                            <span className={[`${styles['group-title']} ${propertyNames[0].toLowerCase().startsWith(inputValue) ||  inputValue === ""? styles['item-show'] : styles['item-hide']}`]}>{propertyNames}</span>
                                            <div className={styles['option-item-container']}>
                                                {arrayValue?.map(item => {
                                                    //return <span  className={[` ${selectedInterests?.some(inter => inter.label === item.label) ? styles['item-selected']  : styles['option-item-hover']} ${item?.label?.toLowerCase().startsWith(inputValue) ? styles['item-show'] : styles['item-hide']}`]} onClick={() => handleItemClick(item)}>{item.label}</span>
                                                    return <FilterItem key={item._id} item={item} selectedOption={selectedItemHandler} arraySelected={selectedInterests}/>
                                                })}
                                            </div>
                                            
                                        </div>)
                            })
                       }
                    </div>}
                </div>
                
                <div className={styles.button}>Learning</div>
                <div className={styles.button}>Teaching</div>
                <div className={styles.button}>Clear</div>
            </div>
           
        </div>
    )
}

export default UsersFilters;
import { useEffect, useState } from 'react';
import styles from './UsersFilters.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UsersFilters = () => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const interestOptionsValues = [
        { name: 'Reading', popular: true },
        { name: 'Writing', popular: true },
        { name: 'Sleeping', popular: false },
        { name: 'Coding', popular: true },
        { name: 'Gaming', popular: true },
        { name: 'Traveling', popular: true },
        { name: 'Cooking', popular: false },
        { name: 'Photography', popular: true },
        { name: 'Fitness', popular: false },
        { name: 'Painting', popular: true },
        { name: 'Music', popular: true },
        { name: 'Movies', popular: true },
        { name: 'Dancing', popular: false },
        { name: 'Learning', popular: true },
        { name: 'Teaching', popular: false },
        { name: 'Singing', popular: true },
        { name: 'Hiking', popular: true },
        { name: 'Shopping', popular: false },
        { name: 'Yoga', popular: true },
        { name: 'Meditation', popular: true },
      ]
    const [interestOptions, setInterestOptions] = useState([]);
    const [open, setOpen] = useState(false)
    const [selectedInterests, setSelectedInterest] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(()=>{
        interestOptionsValues.sort((a, b) => a.name.localeCompare(b.name));
        //remove popula ones and put on its on grouping
        let interestGrouped = [];
        interestGrouped.push({Popular: interestOptionsValues.filter(item => item.popular)});

        for (let step = 0; step < alphabet.length; step++) {
            console.log(alphabet[step]);
            const letter = alphabet[step].toLowerCase();
            interestGrouped.push({[alphabet[step]] : interestOptionsValues.filter(item => item.name.toLowerCase().startsWith(letter) && !item.popular)});
        }
        console.log(JSON.stringify(interestGrouped));
        //remove all groups with empty arrays
       
        setInterestOptions( interestGrouped.filter(item => Object.values(item)[0].length > 0));
    },[])

    function handleItemClick(objItem) {
        const exists = selectedInterests?.some(item => item.name === objItem.name);
        if(exists) {
            const selectedInteTemp = selectedInterests?.filter(item => item.name != objItem.name);
            console.log('selectedInteTemp:::', JSON.stringify(selectedInteTemp));
            setSelectedInterest(selectedInteTemp);
            return;
        }
        console.log('selectedInterests::::',JSON.stringify(selectedInterests));
        setSelectedInterest((current) => {
            return [...current, objItem];
        })
    }

    return (
        <div className={styles['filtering-container']}>
            <div className={styles['main-filter']}>
                <div>
                <div className={styles.button} onClick={()=>setOpen(!open)}>Interests</div>
                    {open &&<ul className={styles['dropdown-ul']}>
                            <div className={styles.inputContainer}>
                                <FontAwesomeIcon icon={faSearch}  className={styles.icon} />
                                <input className={styles['type-here']} type='text' placeholder='Type here...' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                            </div>
                            {selectedInterests?.length > 0 &&<div>
                                {JSON.stringify(selectedInterests)}
                            </div>}
                       {
                            interestOptions?.map(option => {
                                const propertyNames = Object.keys(option);
                                const arrayValue = option[propertyNames[0]];
                                console.log('propertyNames: ', propertyNames, 'arrayValue: ', JSON.stringify(arrayValue));
                                console.log(inputValue);
                                // const shouldHide = arrayValue.some(value => value.name !== inputValue);
                                
                                return (
                                        <div>
                                            <span className={[`${styles['group-title']} ${propertyNames[0].toLowerCase().startsWith(inputValue) ||  inputValue === ""? styles['item-show'] : styles['item-hide']}`]}>{propertyNames}</span>
                                            {arrayValue?.map(item => {
                                                return <li className={[`${styles['option-item']} ${selectedInterests?.some(inter => inter.name === item.name) ? styles['item-selected']  : styles['option-item-hover']} ${item?.name?.toLowerCase().startsWith(inputValue) ? styles['item-show'] : styles['item-hide']}`]} onClick={() => handleItemClick(item)}>{item.name}</li>
                                            })}
                                        </div>)
                            })
                       }
                    </ul>}
                </div>
                
                <div className={styles.button}>Learning</div>
                <div className={styles.button}>Teaching</div>
                <div className={styles.button}>Clear</div>
            </div>
           
        </div>
    )
}

export default UsersFilters;
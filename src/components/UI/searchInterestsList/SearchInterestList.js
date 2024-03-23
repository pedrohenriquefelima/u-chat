import { SearchBarGeneric } from "../SearchBarGeneric"
import styles from "./SearchInterestList.module.css";
import FilterItem from "../FilterItem";
export const SearchInterestList = ({optionsData,hoverOverHandler }) => {
    return (
            <div className={styles['search-container']} onMouseLeave={() => hoverOverHandler(false)}>
                <SearchBarGeneric/>
                <div className={styles['search-container-inner']}>
                    {optionsData?.map(option => {
                        const propertyNames = Object.keys(option);
                        const arrayValue = option[propertyNames[0]];
                        return (
                                <div className={styles['option-container']}>
                                    <div className={[`${styles['group-title']}`]}>{propertyNames}</div>
                                    <div className={styles['option-item-container']}>
                                        {arrayValue?.map(item => {
                                            return <FilterItem key={item._id} item={item}/>
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            //${propertyNames[0].toLowerCase().startsWith(inputValue) ||  inputValue === ""? styles['item-show'] : styles['item-hide']}
            //selectedOption={selectedItemHandler} arraySelected={selectedInterests}
            
    )
}


import styles from "./InnerCountryList.module.css";
import countriesList from "../../utils/countriesList";
const InnerCountryList = () => {
    console.log(JSON.stringify(countriesList), countriesList.length);
    return <div className={styles['inner-container']}>
        <div>
            {countriesList.map(country => {
                console.log(JSON.stringify(country));
                return (
                    <div className={styles['item-container']}>
                        <span className={styles['flag-custom-size']}>{country.code}</span>
                        <span>{country.language}</span>
                    </div>
                )
            })}
        </div>
        
    </div>
}

export default InnerCountryList;
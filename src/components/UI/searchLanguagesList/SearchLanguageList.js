import InnerCountryList from "../InnerCountryList";
import { SearchBarGeneric } from "../SearchBarGeneric";
import styles from "./SearchLanguageList.module.css";
export const SearchLanguageList = () => {
    return (
        <div className={styles['search-container']}>
            <SearchBarGeneric/>
            <InnerCountryList/>
        </div>
    )
}

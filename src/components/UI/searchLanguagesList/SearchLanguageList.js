import InnerCountryList from "../InnerCountryList";
import { SearchBarGeneric } from "../SearchBarGeneric";
import styles from "./SearchLanguageList.module.css";
export const SearchLanguageList = ({sourceButton, hoverOverHandlerLearning, hoverOverHandlerTeaching}) => {
    function hoverOverHandlerChild() {
        if(sourceButton === 'learning'){
            hoverOverHandlerLearning(false);
        }else if(sourceButton === 'teaching'){
            hoverOverHandlerTeaching(false);
        }
    }

    return (
        <div className={styles['search-container']} onMouseLeave={hoverOverHandlerChild}>
            <SearchBarGeneric/>
            <InnerCountryList/>
        </div>
    )
}

import styles from "./FilterItem.module.css";

const FilterItem = ({item, selectedOption, arraySelected}) => {

    console.log('selectedInterests', JSON.stringify(arraySelected));
    function storeSelecteItemdHandler(){
        selectedOption(item);
    }

    return <span style={{ width: `${(item.label.length * 8) + 20}px`}} className={`${arraySelected?.some(opt => opt.label === item.label) ? `${styles.selected} ${styles.option}` : styles.option}`} onClick={storeSelecteItemdHandler}>{item.label}</span>
}

export default FilterItem;
import HeaderExplore from "./HeaderExplore/HeaderExplore";
import styles from './ExplorePage.module.css';
import UsersFilters from "./UsersFilters/UsersFilters";
import UsersContainer from "./UsersContainer/UsersContainer";

const ExplorePage = () => {
    return (
        <div>
            <div className={styles['header-container']}>
                <HeaderExplore/>
                <UsersFilters/>
            </div>
            <div className={styles['users-container-outer']}>
                <UsersContainer/>
            </div>
        </div>
    )
}

export default ExplorePage;
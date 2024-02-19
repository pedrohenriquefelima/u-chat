import HeaderExplore from "./HeaderExplore/HeaderExplore";
import styles from './ExplorePage.module.css';
import UsersFilters from "./UsersFilters/UsersFilters";
import UsersContainer from "./UsersContainer/UsersContainer";

import { useState, useEffect } from "react";
import { fetchInterestsOptions, fetchUsers } from "../../utils/http";

const ExplorePage = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [interestsOptions, setInterestsOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({hasError: false, message: ''});

    useEffect(()=>{
        setLoading(true);
        fetchAllData();
    },[])

    async function fetchAllData(){
        try {
            const users = await fetchUsers();
            const inteOptions = await fetchInterestsOptions();
            setAllUsers(users);
            setInterestsOptions(inteOptions);
        } catch(error) {
            setError(() => {
                return {hasError: true, message: 'Unable to load users, please come back later. Thanks for your patience!'}
            });
        }
        setLoading(false);
    }

    return (
        <div>
            {!loading &&  
                <div>
                    <div className={styles['header-container']}>
                        <HeaderExplore/>
                        <UsersFilters interestOptionsValues={interestsOptions}/>
                    </div>
                    <div className={styles['users-container-outer']}>
                        <UsersContainer allUsersTemp={allUsers}/>
                    </div>
                </div>
            }
        </div>
    )
}

/** error snipt
 * <div className={styles['image-empty-container']}>
                <img className={styles['image-empty']} src={EmptyUsersState} alt='error'/>
                <p>{error.message}</p>
            </div>
 */

export default ExplorePage;
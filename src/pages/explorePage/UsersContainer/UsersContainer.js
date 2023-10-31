import { useContext, useEffect } from 'react';
import styles from './UsersContainer.module.css';
import AuthContext from '../../../store/auth-context';
import UserItem from './UserItem/UserItem';

const UsersContainer = () => {
    const ctx = useContext(AuthContext);

    useEffect(()=>{
        ctx.getAllUsersHandler();
    },[]);

    return (
        <div className={styles['users-container']}>
             {ctx.allUsers.map(item => {
                return <UserItem key={item._id} userData={item}/>
             })}
             {ctx.allUsers.map(item => {
                return <UserItem key={item._id} userData={item}/>
             })}
        </div>
       
    )
}

export default UsersContainer;
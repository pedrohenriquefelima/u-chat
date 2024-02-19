import styles from './UsersContainer.module.css';
import UserItem from './UserItem/UserItem';

const UsersContainer = ({allUsersTemp}) => {
    return (
        <div className={styles['users-container']}>
            {allUsersTemp.map(item => {
                return <UserItem key={item._id} userData={item}/>
            })}
        </div>
       
    )
}

export default UsersContainer;
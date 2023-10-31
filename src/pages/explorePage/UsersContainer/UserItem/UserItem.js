import styles from './UserItem.module.css';

const UserItem = (props) => {
    console.log(props);
    return (
        <div className={styles['user-item-container']}>
            <div className={styles['user-subcontainer']}>
                <div className={styles['img-container']}>
                    <div className={styles.img}></div>
                </div>
                <div className={styles['body-container']}>
                    <p>{props.userData.firstName} {props.userData.lastName}</p>
                    <p>bio bio bio bio bio bio bio biob iboubdiyevue dibevdei</p>
                </div>
            </div>
           
            <div>
                <div>footer</div>
            </div>
        </div>
    )
}

export default UserItem;
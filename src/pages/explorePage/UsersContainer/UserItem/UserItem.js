import { useContext } from 'react';
import styles from './UserItem.module.css';
import ChatContext from '../../../../store/chat-context';
import AuthContext from '../../../../store/auth-context';

const UserItem = (props) => {
    console.log(props)
    const chatCtx = useContext(ChatContext);
    const userCtx = useContext(AuthContext);

    const createChat = () => {
        chatCtx.createChatHandler(userCtx.user?._id, props.userData?._id, props.userData?.prevContacted);
    }

    return (
        <div className={styles['user-item-container']} onClick={createChat}>
            <div className={styles['user-subcontainer']}>
                <div className={styles['img-container']}>
                    <div className={styles.img}></div>
                </div>
                <div className={styles['body-container']}>
                    <p>{props.userData.firstName} {props.userData.lastName}</p>
                    <p>bio bio bio bio bio bio bio biob iboubdiyevue dibevdei</p>
                </div>
            </div>
           
            <div className={styles.footer}>
                <div>footer</div>
                {props.userData.prevContacted &&<div className={styles.contacted}>contacted</div>}
            </div>
        </div>
    )
}

export default UserItem;
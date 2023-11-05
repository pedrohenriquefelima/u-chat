import { useContext } from 'react';
import { useFetchRecipientUser } from '../../../hooks/useFetchRecipientUser';
import styles from './ChatItem.module.css';
import ChatContext from '../../../store/chat-context';

const ChatItem = (props) => {
    const ctxChat = useContext(ChatContext);
    const {recipientUser, error} = useFetchRecipientUser(props.chat, props.user);

    const updateCurrentChat = (item) => {
        ctxChat.updateCurrentChatHandler(item);
    }
    return (
        <div className={styles['chat-item-container']} onClick={() => updateCurrentChat(props.chat)} >
            <div className={styles['img-container']}>
                <div className={styles.img}>i</div>
            </div>
            <div className={styles.body}>
                <div className={styles.title}>
                    <div className={styles['name-container']}>
                        <p>{recipientUser?.firstName} {recipientUser?.lastName}</p>
                        <div className={`${ctxChat.stateOnlineUsers.length > 0 && ctxChat.stateOnlineUsers.some(user => user.userId === recipientUser?._id) ? styles.isOnline : styles.isOffLine}`}>.</div>
                    </div>
                    
                    <div className={styles.nudge}>Nudge</div>
                </div>  
                <p>I'm good thanks</p>
                <div className={styles.minutes}>
                    <span>23 minutes ago</span>
                </div>
            </div>
        </div>
    )
};

export default ChatItem;
import ChatItem from '../ChatItem/ChatItem';
import styles from './ChatList.module.css';

const ChatList = (props) => {
    
    const chatsItems = props?.chats.map(item => {
        return <ChatItem key={item._id} chat={item} user={props.user}/>
    });

    return (
        <div className={styles['chat-list-container']}>
            <div className={styles['chat-header']}>
                <div className={styles.chat}>Chats</div>
            </div>
            {props.chats?.length > 0 && chatsItems}
        </div>
    )
};

export default ChatList;
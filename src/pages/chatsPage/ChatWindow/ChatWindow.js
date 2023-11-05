import { useContext, useState } from 'react';
import styles from './ChatWindow.module.css';
import AuthContext from '../../../store/auth-context';
import ChatContext from '../../../store/chat-context';
import { useFetchRecipientUser } from '../../../hooks/useFetchRecipientUser';
import moment from "moment";
import InputEmoji from 'react-input-emoji';

const ChatWindow = () => {
    const [textMessage, setCurrentMessage] = useState('');
    const ctxUser = useContext(AuthContext);
    const ctxChat = useContext(ChatContext);
    const recipientInfo = useFetchRecipientUser(ctxChat.stateCurrentChat,ctxUser.user);
    console.log('recipientInfo', recipientInfo);

    const sendMessage = () => { 
        const data = {
            chatId: ctxChat.stateCurrentChat?._id,
            senderId: ctxUser.user?._id,
            text: textMessage
        }

        ctxChat.sendMessageHandler(data);
        console.log(data);
        setCurrentMessage('');
    };

    return (
        <div className={styles.chatbox}>
            {ctxChat.stateIsMessageLoading && <h2>loading...</h2>}
            {!recipientInfo.recipientUser && <p>No Conversation Selected....</p>}
            {!ctxChat.stateIsMessageLoading && recipientInfo.recipientUser && <h3>{recipientInfo.recipientUser.firstName}</h3>}
            <div className={styles['chatbox-body']}>
                <div className={styles['messages-container']}>
                    {ctxChat.stateMessages && ctxChat.stateMessages.map((message, index)=>{
                        return <div key={index} className={`${message?.senderId === ctxUser.user?._id ? styles['message-self'] : styles['message-other']} ${styles.message}`}>
                            <div>{message.text}</div>
                            <div className={styles.time}>{moment(message.createdAt).calendar()}</div>
                        </div>
                    })}
                </div>
                <div className={styles['input-container']}>
                    <div className={styles['input-emoji']}>
                        <InputEmoji value={textMessage} onChange={setCurrentMessage}/>
                    </div>
                   
                    <button className={styles['send-btn']} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
        )
};

export default ChatWindow;
import { useContext } from "react";
import ChatContext from "../../store/chat-context";
import styles from './ChatsPage.module.css'
import ChatList from "./ChatList/ChatList";
import AuthContext from "../../store/auth-context";
import ChatWindow from "./ChatWindow/ChatWindow";

const ChatsPage = () => {
    const chatCtx = useContext(ChatContext);
    const authCtx = useContext(AuthContext);
    return (
        <div className={styles['container-chats']}>
            <ChatList chats={chatCtx.stateUserChats} user={authCtx.user}/>
            <ChatWindow></ChatWindow>
        </div>
    )
};

export default ChatsPage;
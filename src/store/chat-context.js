import React, { useCallback, useContext, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";
import AuthContext from "./auth-context";
import { io } from "socket.io-client";

const ChatContext = React.createContext({
    stateUserChats: [],
    stateIsUserChatsLoading: false,
    stateUsersChatsError: null,
    stateCurrentChat: null,
    stateMessages: null,
    stateIsMessageLoading: false,
    stateErrorMessage: null,
    stateOnlineUsers: [],
    createChatHandler: () => {},
    updateCurrentChatHandler: () => {},
    sendMessageHandler: (data) => {}
});

export const ChatContextProvider = (props) => {
    const [userChats, setUserChats] = useState([]);
    const [isUserChatsLoading, setIsUserChatLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isMessageLoading, setIsMessageLoading] = useState(false);
    const [messageError, setMessageError] = useState(null);
    const [sendTextMessageError, setSendTextMessageError] = useState(null);
    const [newMessage, setNewMessage] = useState(null);
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const ctxAuth = useContext(AuthContext);
    
    //user is added as a dependency so that whenever there is a new user - it creates a new socket
    useEffect(()=>{
        //connecting client to the server
        const newSocket = io("http://localhost:4000");
        setSocket(newSocket);

        //cleanup
        //disconnect the socket if it is no longer being used
        return () => {
            newSocket.disconnect()
        }
    }, [ctxAuth.user]);

    useEffect(()=>{
        if(socket === null) return;
        if(socket && ctxAuth.user?._id){
            console.log('firing addNewUser event');
            socket.emit("addNewUser", ctxAuth.user?._id);
            socket.on("getOnlineUsers", (res)=> {
                console.log('onlineusers',res);
                setOnlineUsers(res);
            })
        };

        return () => {
            socket.off("getOnlineUsers");
        }
    }, [socket, onlineUsers.length]);

    //send message
    useEffect(()=>{
        //when message is saved to the DB, the response is stored in newMessage
        //when the newMessage changes, the useEffect will run
        //the message that was sent to the user will be send to socket which will be notify the other user
        if(socket === null) return;
        const recipientId = currentChat?.members.find((id) => id !== ctxAuth.user?._id);
        console.log('currentChat', currentChat);
        socket.emit("sendMessage", {...newMessage, recipientId});

    }, [newMessage]);

    //receive message
    useEffect(()=>{
        if(socket === null) return;
        socket.on("getMessage", (res)=> {
            console.log('messageReceived',res);
            //preventing from updating the wrong chat
            if(currentChat?._id !== res.chatId) return;
            setMessages((prev)=>[...prev, res]);
        })

         //clean up function
         return () => {
            socket.off("getMessage");
        }

    },[socket, currentChat]);

    useEffect(()=>{
        const getUserChats = async()=>{
            if(ctxAuth.user?._id){
                console.log(ctxAuth.user?._id);
                setIsUserChatLoading(true);
                setUserChatsError(null)
                const response = await getRequest(`${baseUrl}/chat/${ctxAuth.user?._id}`);
                setIsUserChatLoading(false);
                if(response.error){
                    return setUserChatsError(response);
                }
                setUserChats(response);
            }
        }

        getUserChats();
    }, [ctxAuth.user]);

    useEffect(()=>{
        const getMessagesChat = async()=>{
            setIsMessageLoading(true);
            setMessageError(null)
            console.log('currentChat',currentChat);
            if(!currentChat) return 'no current chat';

            const response = await getRequest(`${baseUrl}/messages/${currentChat._id}`);
            setIsMessageLoading(false);
            if(response.error){
                return setMessageError(response);
            }
            setMessages(response);
        }

        getMessagesChat();
    }, [currentChat, messages.length]);

    const updateCurrentChat = useCallback((chat)=>{
        setCurrentChat(chat);
    },[])

    const createChat = useCallback(async(firstId, secondId, contacted) =>{

        setIsUserChatLoading(true);
        setUserChatsError(null)
        if(contacted) {
            console.log('user has alredy been contacted');
            return 'user has alredy been contacted';
        }
        const response = await postRequest(`${baseUrl}/chat/create`, JSON.stringify({
            firstId,
            secondId
        }));
        
        setIsUserChatLoading(false);
        if(response.error){
            return setUserChatsError(response);
        }
        console.log('chatresponse', response);
        setUserChats((prev)=>{return [...prev,response]});
    }, []);

    const createMessage = useCallback(async(data)=>{
        if(!data.chatId || !data.text) return 'message cannot be send';
        const response = await postRequest(`${baseUrl}/messages/new-message`, JSON.stringify(data));
        if(response.error){
            setSendTextMessageError(response.error);
            return response.error;
        }
        setNewMessage(response);
        setMessages((prev)=> [...prev, response]);
        return response;
    }, [])

    return <ChatContext.Provider value={{
        stateUserChats: userChats,
        stateIsUserChatsLoading: isUserChatsLoading,
        stateUsersChatsError: userChatsError,
        stateCurrentChat: currentChat,
        stateMessages: messages,
        stateIsMessageLoading: isMessageLoading,
        stateErrorMessage: messageError,
        stateOnlineUsers: onlineUsers,
        createChatHandler: createChat,
        updateCurrentChatHandler: updateCurrentChat,
        sendMessageHandler: createMessage
      }}>{props.children}</ChatContext.Provider>
}

export default ChatContext;
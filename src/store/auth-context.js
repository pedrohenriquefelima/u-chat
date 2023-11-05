import React, { useCallback, useContext, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

//it accepts the default state
//it return a component, an object 
//the onLogOut function is added so the IDE can see there is a function
const AuthContext = React.createContext({
    user: {},
    isLoggedIn: false,
    loginSignUpInfo: {},
    isLoading: false,
    allUsers: [],
    logInHandler: () => {},
    signUpHandler: () => {},
    logOutUserHandler: () => {},
    updateLoginSignUpFormHandler: (propertyName, value) => {},
    getAllUsersHandler: () => {}
});

//this is a component created so the logic is removed from the app component
export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [signInUpError, setSignInUpError] = useState(null);
    const [ signInUpFormDetails, setSignInUpFormDetails] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })
    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        const varUser = localStorage.getItem("User");
        const parsedUser = JSON.parse(varUser);
        console.log('parsedUser',parsedUser?._id);
        setUser(parsedUser);
        setLoggedIn(true);

        const fetchData = async () => {
            await getAllUsers();
            let contactedPeople = await getUserChats(parsedUser?._id);
            setAllUsers((prev)=> {
                let filtered = prev.filter((u)=> u?._id !== parsedUser?._id);
                filtered = filtered.map((u) => {
                    if(contactedPeople.some((contact) => contact.members.includes(u._id))){
                        return {...u, prevContacted: true}
                    }else {
                        return {...u, prevContacted: false}
                    }   
                })
                return filtered;
            })
            
        }

        fetchData();
        
    },[])

    const updateLoginInfo = useCallback((propertyName, value)=>{
        setSignInUpFormDetails((prev)=> {
            return {...prev, [propertyName]: value}
        })
    },[]);

    const loginUser = useCallback(async ()=>{
        setisLoading(true);
        setSignInUpError(null);
        const response = await postRequest(
            `${baseUrl}/users/signin`,
            JSON.stringify({email: signInUpFormDetails.email, password: signInUpFormDetails.password})
        );

        setisLoading(false);
        if(response.error){
            return setSignInUpError(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
        setLoggedIn(true);
        setSignInUpFormDetails({
            firstName: '',
            middleName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        });
    }, [signInUpFormDetails]);

    const signUpUser = useCallback(async()=>{
        setisLoading(true);
        setSignInUpError(null);
        console.log(signInUpFormDetails)
        const response = await postRequest(
            `${baseUrl}/users/signup`,
            JSON.stringify(signInUpFormDetails)
        );
        setisLoading(false);
        if(response.error){
            console.log('errorrr');
            console.log(response);
            return setSignInUpError(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
        setLoggedIn(true);
        setSignInUpFormDetails({
            firstName: '',
            middleName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        });
    }, [signInUpFormDetails]);

    const logOutUser = useCallback(()=>{
        localStorage.removeItem('User');
        setUser(null);
        setLoggedIn(false);
    }, [])

    const getAllUsers = useCallback(async()=>{
        return new Promise(async (resolve, reject) => {
            try {
                setisLoading(true);
                const result = await getRequest(`${baseUrl}/users`);
                const users = result.map(item => item);
                setAllUsers(users);
                resolve(users);
            } catch (error) {
                console.log(error);
                reject(error);
            } finally {
                setisLoading(false);
            }
        });
    }, [])

    const getUserChats = useCallback(async(userId)=>{
        const result = await getRequest(`${baseUrl}/chat/${userId}`);
        return result;
    }, [])

    return <AuthContext.Provider value={{
        user: user,
        isLoggedIn: loggedIn,
        loginSignUpInfo: signInUpFormDetails,
        isLoading: isLoading,
        allUsers: allUsers,
        logInHandler: loginUser,
        signUpHandler: signUpUser,
        logOutUserHandler: logOutUser,
        updateLoginSignUpFormHandler: updateLoginInfo,
        getAllUsersHandler: getAllUsers
      }}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
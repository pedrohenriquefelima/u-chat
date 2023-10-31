import React, { useCallback, useEffect, useState } from "react";
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
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
        setLoggedIn(true);
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
        console.log('getting all users');
        setisLoading(true);
        getRequest(`${baseUrl}/users`).then((result)=>{
            const users = result.map(item => {
                return item
              });
              setAllUsers(users);
        }).catch(error => {
            console.log(error);
        });
        setisLoading(false);
    }, [allUsers.length])

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
import React, { useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

//it accepts the default state
//it return a component, an object 
//the onLogOut function is added so the IDE can see there is a function
const AuthContext = React.createContext({
    user: {},
    isLoggedIn: false,
    loginSignUpInfo: {},
    isLoading: false,
    onLogOut: () => {},
    logInHandler: () => {},
    signUpHandler: () => {},
    updateLoginSignUpFormHandler: (propertyName, value) => {}
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

    function logOutHandler() {
        setLoggedIn(false);
    }

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

    return <AuthContext.Provider value={{
        user: user,
        isLoggedIn: loggedIn,
        loginSignUpInfo: signInUpFormDetails,
        isLoading: isLoading,
        onLogOut: logOutHandler,
        logInHandler: loginUser,
        signUpHandler: signUpUser,
        updateLoginSignUpFormHandler: updateLoginInfo
      }}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
import { useEffect, useState, useContext } from 'react';
import styles from './SignInUp.module.css'
import { useNavigate } from "react-router-dom";
import AuthContext from '../../../store/auth-context';
import SpinnerMain from '../../UI/Spinners/SpinnerMain';

const SignInUp = (props) => {
    const [isLoginMode, setIsLoginMode] = useState(props.isLoginMode);
    const navigate = useNavigate();
    let ctx = useContext(AuthContext);

    useEffect(()=>{
        if(!isLoginMode) {
            console.log('go to signup');
            navigate("/signup");
        }else {
            navigate("/login");
        }
    }, [isLoginMode])
    
    function onChangeInput(event) {
        if(event.target.name === 'email') {
            ctx.updateLoginSignUpFormHandler(event.target.name, event.target.value);
            console.log(ctx.loginSignUpInfo);
        }else if(event.target.name === 'password') {
            console.log(ctx.loginSignUpInfo);
            ctx.updateLoginSignUpFormHandler(event.target.name, event.target.value);
        }else if(event.target.name === 'firstName') {
            ctx.updateLoginSignUpFormHandler(event.target.name, event.target.value);
        }else if(event.target.name === 'middleName') {
            ctx.updateLoginSignUpFormHandler(event.target.name, event.target.value);
        }else if(event.target.name === 'lastName') {
            ctx.updateLoginSignUpFormHandler(event.target.name, event.target.value);
        }else if(event.target.name === 'username') {
            ctx.updateLoginSignUpFormHandler(event.target.name, event.target.value);
        }
    }
    function handleFormSubmission(event){
        event.preventDefault();
        if(props.isLoginMode){
            console.log('submitting', JSON.stringify(ctx.loginSignUpInfo));
            ctx.logInHandler();
        }else {
            console.log('signing user up');
            console.log(ctx.loginSignUpInfo);
            ctx.signUpHandler();
        }
    }

    function changeModeHandler() {
        setIsLoginMode(()=>{ return !isLoginMode});
    }

    return (
        <div className={styles['container-signup']}>
            {ctx.isLoading && <SpinnerMain></SpinnerMain>}
            <form className={styles.form} onSubmit={handleFormSubmission}>
                {!isLoginMode &&
                <>
                    <div className={styles['input-container']}>
                        <label className={styles['label-element']}>First Name</label>
                        <input type='text' id='firstName' value={ctx.loginSignUpInfo.firstName} name='firstName' className={styles['input-element']} onChange={onChangeInput}/>
                    </div>
                    <div className={styles['side-by-side']}>
                        <div className={`${styles['input-container-side']} ${styles['input-container']}`}>
                            <label className={styles['label-element']}>Middle Name</label>
                            <input type='text' id='middleName' value={ctx.loginSignUpInfo.middleName} name='middleName' className={styles['input-element']} onChange={onChangeInput}/>
                        </div>
                        <div className={`${styles['input-container-side']} ${styles['input-container']}`}>
                            <label className={styles['label-element']}>Last Name</label>
                            <input type='text' id='lastName' value={ctx.loginSignUpInfo.lastName} name='lastName' className={styles['input-element']} onChange={onChangeInput}/>
                        </div>
                    </div>
                    
                    <div className={styles['input-container']}>
                        <label className={styles['label-element']}>Username</label>
                        <input type='text' id='username' value={ctx.loginSignUpInfo.username} name='username' className={styles['input-element']} onChange={onChangeInput}/>
                    </div> 
                </>
                }
                <div className={styles['input-container']}>
                    <label className={styles['label-element']}>Email</label>
                    <input type='text' id='email' value={ctx.loginSignUpInfo.email} name='email' className={styles['input-element']} onChange={onChangeInput}/>
                </div>
                <div className={styles['input-container']}>
                    <label className={styles['label-element']}>Password</label>
                    <input type='password' id='password' value={ctx.loginSignUpInfo.password} name="password" className={styles['input-element']} onChange={onChangeInput}/>
                </div>
                <button type='submit' className={styles['button-main']}>{isLoginMode === true ? 'Login' : 'Sign Up'}</button>
                <hr className={styles.line}></hr>
                <p className={styles.subbuttom} onClick={changeModeHandler}>{isLoginMode === true ? 'Sign Up' : 'Login'}</p>
            </form>
        </div>
    )
}

export default SignInUp;
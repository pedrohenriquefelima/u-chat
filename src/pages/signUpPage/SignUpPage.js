import SignInUp from "../../components/forms/SignInUp/SignInUp";
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles['form-side']}>
                <SignInUp isLoginMode={false}></SignInUp>
            </div>
            <div className={styles['add-side']}>
                <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=3110&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" className={styles['image-signin']}/>
            </div>
        </div>
    )
}

export default SignUpPage;
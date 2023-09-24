import React, { useState } from "react";
import styles from './NavigationBar.module.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <nav className={styles.navbar}>
           
                <h3 className={styles.logo}>Logo</h3>
                <ul className={mobile ? styles['nav-links-mobile'] : styles['nav-links']} onClick={() => setMobile(false)}>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/'>
                        <li>Download</li>
                    </Link>
                    <Link to='/'>
                        <li>Community</li>
                    </Link>
                    <Link to='/'>
                        <li>Features</li>
                    </Link>
                    <Link to='/'>
                        <li>Login</li>
                    </Link>
                    <Link to='/'>
                        <li>Sign up</li>
                    </Link>
                </ul>
                <button className={styles['mobile-menu-icon']} onClick={()=>setMobile(!mobile)}>
                    {mobile ? 'X' : 'Y'}
                </button>
    
        </nav>
    )
    
}

export default NavigationBar;
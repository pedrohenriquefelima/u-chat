import React, { useState, useContext } from "react";
import styles from './NavigationBar.module.css';
import { NavLink } from "react-router-dom";
import LOGO from "../../../src/materials/images/u-chat.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AuthContext from "../../store/auth-context";

library.add([faX,faBars]);

const NavigationBar = () => {
    const [mobile, setMobile] = useState(false)
    const ctx = useContext(AuthContext);

    return (
        <nav className={styles.navbar}>
            <div className={styles['image-container']}>
                <img src={LOGO} alt="Logo" className={styles['image-logo']}/>
            </div>
            <ul className={mobile ? styles['nav-links-mobile'] : styles['nav-links']} onClick={() => setMobile(false)}>
                {!ctx.isLoggedIn &&<li>
                    <NavLink to='/' className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink>
                </li>}
                {!ctx.isLoggedIn &&<li>
                    <NavLink to='download' className={({ isActive }) => isActive ? styles.active : undefined}>Download</NavLink>
                </li>}
                <li>
                    <NavLink to='community' className={({ isActive }) => isActive ? styles.active : undefined}>Community</NavLink>
                </li>
                {!ctx.isLoggedIn &&<li>
                    <NavLink to='features' className={({ isActive }) => isActive ? styles.active : undefined}>Features</NavLink>
                </li>}
                <li>
                    <NavLink to='chats' className={({ isActive }) => isActive ? styles.active : undefined}>Chats</NavLink>
                </li>
                <li>
                    <NavLink to='explore' className={({ isActive }) => isActive ? styles.active : undefined}>Explore</NavLink>
                </li>
                {!ctx.isLoggedIn && 
                    <li>
                        <NavLink to='login' className={({ isActive }) => isActive ? styles.active : undefined}>Login</NavLink>
                    </li>
                }
                {!ctx.isLoggedIn && 
                    <li>
                        <NavLink to='signup' className={({ isActive }) => isActive ? styles.active : undefined}>Sign up</NavLink>
                    </li>
                }
                {ctx.isLoggedIn && 
                    <li>
                        <NavLink to='' className={({ isActive }) => isActive ? styles.active : undefined} onClick={ctx.logOutUserHandler}>Logout</NavLink>
                    </li>
                }
            </ul>
            <button className={styles['mobile-menu-icon']} onClick={()=>setMobile(!mobile)}>
                {mobile ? <FontAwesomeIcon icon="fa-solid fa-x" className={styles.cross} /> : <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.bars}/>}
            </button>
        </nav>
    )
    
}

export default NavigationBar;
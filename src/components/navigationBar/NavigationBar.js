import React, { useState } from "react";
import styles from './NavigationBar.module.css';
import { Link } from "react-router-dom";
import LOGO from "../../../src/materials/images/u-chat.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add([faX,faBars]);

const NavigationBar = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles['image-container']}>
                <img src={LOGO} alt="Logo" className={styles['image-logo']}/>
            </div>
            <ul className={mobile ? styles['nav-links-mobile'] : styles['nav-links']} onClick={() => setMobile(false)}>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/download'>
                    <li>Download</li>
                </Link>
                <Link to='/community'>
                    <li>Community</li>
                </Link>
                <Link to='/features'>
                    <li>Features</li>
                </Link>
                <Link to='/login'>
                    <li>Login</li>
                </Link>
                <Link to='/signup'>
                    <li>Sign up</li>
                </Link>
            </ul>
            <button className={styles['mobile-menu-icon']} onClick={()=>setMobile(!mobile)}>
                {mobile ? <FontAwesomeIcon icon="fa-solid fa-x" className={styles.cross} /> : <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.bars}/>}
            </button>
        </nav>
    )
    
}

export default NavigationBar;
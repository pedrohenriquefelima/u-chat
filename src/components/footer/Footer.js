import React from "react";
import styles from './Footer.module.css'
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
    return <footer className={styles.container}>
      <div className={styles['sub-container']}>
        <ItemsContainer />
      </div>
      <div className={styles.bottom}>
        <div className={styles['footer-bottom']}>
            <span>© 2020 Appy. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
            <SocialIcons Icons={Icons} />
        </div>
      </div>
      
    </footer>
};

export default Footer;
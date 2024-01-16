import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialIcons.module.css'

const SocialIcons = ({ Icons }) => {
  return (
    <div className={styles['icon-container']}>
      {Icons.map((icon) => (
        <span
          key={icon.name}
        >
          <FontAwesomeIcon icon={icon.name} size="2xl" className={styles['social-icon']}/>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
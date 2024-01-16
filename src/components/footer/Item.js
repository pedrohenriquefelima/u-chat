import React from "react";
import styles from "./Item.module.css";

const Item = ({ Links, title }) => {
  return (
    <ul className={styles['item-container-link']}>
      <h1 className={styles['item-title']}>{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className={styles.name}>
          <a
            className={styles['link-text']}
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
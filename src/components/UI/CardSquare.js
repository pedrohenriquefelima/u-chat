import React from "react";
import styles from "./CardSquare.module.css";


const CardSquare = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles['image-container']}>
                <img src={props.cardItem.image} alt={props.cardItem.alt}/>
            </div>
            <p className={styles.text}>{props.cardItem.label}</p>
        </div>
    )
}

export default CardSquare;
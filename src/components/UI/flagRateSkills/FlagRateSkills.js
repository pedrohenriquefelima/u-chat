import styles from './FlagRateSkills.module.css';
const FlagRateSkills = (props) => {
    return (
       <div className={styles['skills-container']}>
             <img className={styles.img} src={props.imageAddress} alt={props.imgAlt}/>
             <div className={styles['skills-container']}>
                <span style={{ border: `2px solid ${'orange'}` }}></span>
                <span style={{ border: `2px solid ${'#AFAFAF'}` }}></span>
                <span style={{ border: `2px solid ${'#AFAFAF'}` }}></span>
                <span style={{ border: `2px solid ${'#AFAFAF'}` }}></span>
                <span style={{ border: `2px solid ${'#AFAFAF'}` }}></span>
             </div>
       </div>
    )
}

export default FlagRateSkills;
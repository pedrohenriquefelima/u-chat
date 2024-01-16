import styles from './RegularBadge.module.css';
const RegularBadge = (props) => {
    return (
        <div className={`${styles.round}`} style={{ width: `${(props.title.length * 7) + 10}px` }}>
            {props.title}
        </div>
    )
}

export default RegularBadge;
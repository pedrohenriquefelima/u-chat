import styles from './DownLoadAppCallOut.module.css';

const DownLoadAppCallOut = () => {
    return (
        <div className={styles['app-container']}>
            <div className={styles['text-call']}>
                Your passport to a global language and cultural journey<br></br> 
                            Download our app now!
            </div>
            <div className={styles['images-container']}>
                <div>appleStore</div>
                <div>Or</div>
                <div>googleStore</div>
            </div>
        </div>
    )
}
export default DownLoadAppCallOut;
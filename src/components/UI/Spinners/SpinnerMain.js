import { useContext } from "react";
import styles from './SpinnerMain.module.css';
import ClipLoader from "react-spinners/ClipLoader";
import AuthContext from "../../../store/auth-context";

//https://www.npmjs.com/package/react-spinners

const SpinnerMain = () => {

    const ctx = useContext(AuthContext);
    return (
        <div className={styles['spinner-container']}>
             <ClipLoader
                color={'#D85937'}
                loading={ctx.isLoading}
                size={40}
                aria-label="Loading Spinner"
            />
        </div>
    )
}

export default SpinnerMain;
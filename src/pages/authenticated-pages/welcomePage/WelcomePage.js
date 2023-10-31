import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

const WelcomePage = () => {
    const ctx = useContext(AuthContext);

    return (
        <div>
            {!ctx.isLoading &&<h1>{ctx.user?.firstName}</h1>}
        </div>
    )
}
export default WelcomePage;
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../contextAPI/context";
import { useContext } from "react";

const ShowPassword = () => {
    // Recieve state and funtion from context api 
    const state = useContext(UserContext);
    // destructure state and function from state variable 
    const { showPassword, setShowPassword } = state;

    return (
        <>
            {
                showPassword ? <span className="show-pswd-icon"><FaEye onClick={() => setShowPassword(!true)} /></span>
                    :
                    <span className="show-pswd-icon"><FaEyeSlash onClick={() => setShowPassword(!false)} /></span>
            }
        </>
    )
}



export default ShowPassword;







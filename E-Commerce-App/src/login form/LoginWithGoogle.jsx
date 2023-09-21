import "./login.css";

import {
    FaGoogle,
    FaFacebookF,
    FaLinkedinIn,
    FaRegEye,
    FaEyeSlash,
} from "react-icons/fa";

const LoginWithGoogle = () => {
    return (
        <>
            <div className="dividerBox">
                <p className="divider"></p>
                <span>OR</span>
                <p className="divider"></p>
            </div>
            <div className="socialIconBox">
                <div className="icons">
                    <span className="googleIcon">
                        <FaGoogle />
                    </span>
                    <span className="facebookIcon">
                        <FaFacebookF />
                    </span>
                    <span className="linkedinIcon">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
        </>
    )
}

export default LoginWithGoogle;
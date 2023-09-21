import { Link, useNavigate } from "react-router-dom"
import LoginWithGoogle from "./LoginWithGoogle";
import { useContext, useState } from "react";
import { UserContext } from "../contextAPI/context";
import "./login.css";
import { toast } from "react-toastify";
import LoginFormInput from "./LoginFormInput";

const LoginForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  // redirect to home page after login using useNavigation hook 
  const navigate = useNavigate();

  const { email, password } = input;

  // Recieve state from context api 
  const state = useContext(UserContext);
  // destructure state from state object 
  const { showPassword, emailValidation, passwordValidation, emailError, passwordError, setError } = state;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = emailValidation(email);
    const isPasswordValid = passwordValidation(password);
    setError({
      emailError: isEmailValid ? "" : "Email is not valid",
      passwordError: isPasswordValid ? "" : "Must be 8 or more characters contain at least 1 uppercase 1 number and 1 special character"
    })
    if (isEmailValid && isPasswordValid) {
      toast("Successfully Logedin", {
        position: "top-center",
        type: "success",
        autoClose: 1000
      })
      setInput({
        email: "",
        password: ""
      })
      navigate("/")
    }
  }
  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <LoginFormInput
          handleInput={handleInput}
          email={email}
          password={password}
          showPassword={showPassword}
          handleSubmit={handleSubmit}
          emailError={emailError}
          passwordError={passwordError}
        />
        <LoginWithGoogle />
        <p>
          Don't have account? <Link to="/signup">signup</Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;





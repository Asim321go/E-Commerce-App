import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import LoginWithGoogle from "./LoginWithGoogle";
import { UserContext } from "../contextAPI/context";
import { useContext, useState } from "react";
import SignupInput from "./SignupInput";
import { toast } from "react-toastify";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPasword: "",
  });

  // redirect to home page after signup using useNavigate Hook 
  const navigate = useNavigate();

  // destructure inputs from input state
  const { email, password, confirmPasword } = input;

  // Receive state form context api
  const state = useContext(UserContext);
  // destructure state from state object
  const {
    showPassword,
    passwordValidation,
    emailValidation,
    emailError,
    passwordError,
    confirmPaswordError,
    setError
  } = state;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = emailValidation(email);
    const isPasswordValid = passwordValidation(password);

    setError({
      emailError: isEmailValid ? "" : "Please Enter a valid email",
      passwordError: isPasswordValid
        ? ""
        : "Must be 8 or more characters contain at least 1uppercase 1 number and 1 special character",
      confirmPaswordError:
        confirmPasword === password ? "" : "Password not match",
    });

    if (isEmailValid && isPasswordValid && confirmPasword) {
      toast(" successfully signed up", {
        position: "top-center",
        type: "success",
        autoClose: 1000,
      });
      setInput({
        email: "",
        password: "",
        confirmPasword: "",
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className="signup-container">
        <h1>Signup</h1>
        <SignupInput
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          confirmPasword={confirmPasword}
          emailError={emailError}
          passwordError={passwordError}
          confirmPaswordError={confirmPaswordError}
          showPassword={showPassword}
        />
        <LoginWithGoogle />
        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;

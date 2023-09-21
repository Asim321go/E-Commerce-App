import ShowPassword from "./ShowPassword";



const SignupInput = ({ handleInput, handleSubmit, email, password, confirmPasword, emailError, passwordError, confirmPaswordError, showPassword }) => {
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="email-input">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleInput}
                />
                {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="password-input">
                <label htmlFor="password">Password:</label>
                <input
                    type={showPassword ? "password" : "text"}
                    value={password}
                    name="password"
                    onChange={handleInput}
                />
                <ShowPassword />
                {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <div className="confirm-password-input">
                <label htmlFor="password">Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPasword}
                    name="confirmPasword"
                    onChange={handleInput}
                />
                {confirmPaswordError && (
                    <p className="error-message">{confirmPaswordError}</p>
                )}
            </div>
            <button type="submit">Login</button>
        </form>
    )
}




export default SignupInput;
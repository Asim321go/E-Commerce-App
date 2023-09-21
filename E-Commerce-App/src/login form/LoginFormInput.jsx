import ShowPassword from "./ShowPassword";


const LoginFormInput = ({handleInput, handleSubmit, email , password, emailError, passwordError, showPassword}) => {
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="email-input">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleInput}
                />
                <p className="error-message">{emailError}</p>
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
                <p className="error-message">{passwordError}</p>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}



export default LoginFormInput
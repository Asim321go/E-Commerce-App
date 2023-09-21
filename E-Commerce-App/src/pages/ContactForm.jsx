const ContactForm = ({ userData, errorMessage, getInput, submitData }) => {
    return (
        <form method="POST">
            <div className="name-box">
                <input
                    type="text"
                    value={userData.fullName}
                    name="fullName"
                    autoComplete="off"
                    aria-required
                    onChange={getInput}
                    placeholder="Enter Your Full Name"
                />
                {
                    errorMessage.nameError &&
                    <p className='error-message'>{errorMessage.nameError}</p>
                }
            </div>
            <div className="email-box">
                <input
                    type="email"
                    value={userData.email}
                    name="email"
                    autoComplete="off"
                    required
                    onChange={getInput}
                    placeholder="Enter Your E-mail"
                />
                {
                    errorMessage.emailError &&
                    <p className='error-message'>{errorMessage.emailError}</p>
                }
            </div>
            <div className="subject-box">
                <input
                    type="text"
                    value={userData.subject}
                    name="subject"
                    autoComplete="off"
                    required
                    onChange={getInput}
                    placeholder="Enter Your Subject"
                />
            </div>
            <textarea
                value={userData.message}
                name="message"
                autoComplete="off"
                required
                onChange={getInput}
                placeholder="Your Message"
            ></textarea>
            <button onClick={submitData} type="submit">Send</button>
        </form>
    )
}




export default ContactForm;
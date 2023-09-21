import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useContext } from "react";
import { UserContext } from '../contextAPI/context';
import ContactForm from './ContactForm';
import "./contact.css";

const Contact = () => {
    const initialUserData = {
        fullName: "",
        email: "",
        subject: "",
        message: "",
    }

    const [userData, setUserData] = useState(initialUserData);
    const [errorMessage, setErrorMessage] = useState({
        nameError: "",
        emailError: ""
    })
    // Receive validation from Context API 
    const validation = useContext(UserContext)
    // Destructure validation from validation object 
    const { nameValidation, emailValidation } = validation;


    const getInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })

    }


    // toast function for error 
    const showToastError = () => {
        toast('Error submitting the details. Please try again later.', {
            position: 'top-center',
            type: 'error',
            autoClose: 1000,
        });
    }

    // submit contact details in realtime database 

    const submitData = async (event) => {
        event.preventDefault();

        const isNameValid = nameValidation(userData.fullName);
        const isEmailValid = emailValidation(userData.email);

        setErrorMessage({
            nameError: isNameValid ? "" : "Please Enter a valid name",
            emailError: isEmailValid ? "" : "Invalid Email format"
        })

        const { fullName, email, subject, message } = userData;
        if (fullName && email && subject && message && isEmailValid && isNameValid) {
            try {
                const response = await fetch('https://e-commerce-contact-form-24afc-default-rtdb.firebaseio.com/contactDataRecords.json', {
                    method: 'POST',
                    body: JSON.stringify({ fullName, email, subject, message }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    toast('Your details have been successfully submitted.', {
                        position: 'top-center',
                        type: 'success',
                        autoClose: 1000,
                    });
                    setUserData(initialUserData);
                } else {
                    showToastError()
                }
            } catch (error) {
                showToastError()
            }
        }
        else {
            toast('Please Enter correct details', {
                position: 'top-center',
                type: 'error',
                autoClose: 1000,
            });
        }
    };


    return (
        <>
            <section className="contact-section container">
                <h2># Contact Us</h2>
                <div className="contact-container">
                    <div className="contact-form">
                        <ContactForm
                            userData={userData}
                            errorMessage={errorMessage}
                            getInput={getInput}
                            submitData={submitData}
                        />
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    );
};

export default Contact;

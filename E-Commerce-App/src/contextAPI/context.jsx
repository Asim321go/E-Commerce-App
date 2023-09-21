import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";
import productDetails from "../Products/productDetails";
import { useNavigate } from "react-router-dom"


// create a new context for application 
export const UserContext = createContext();

export const AppProvider = ({ children }) => {
    // Redirect to home page using useNavigation Hook from react router dom 
    const navigate = useNavigate();

    // manage navbar search button 
    const [inputBtn, setInputBtn] = useState();

    // add to cart state
    const [cart, setCart] = useState([]);
    const [favorite, setFavorite] = useState([])


    // manage view icon product 
    const [seePrdct, setSeePrdct] = useState([]);

    // toggle Modal 
    const [showModal, setShowModal] = useState(false);

    // show and hide password 
    const [showPassword, setShowPassword] = useState(true)

    // filter product 
    const [product, setProduct] = useState(productDetails);

    // manage serach button in mobile phone
    const [isBtnOpen, setIsBtnOpen] = useState(false);

    // manage error message 
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
        confirmPaswordError: ""
    });
    // destructure error message in error
    const { emailError, passwordError, confirmPaswordError } = error;

    // login form function 
    const showIcon = () => {
        setShow(false);
    }

    // searching product from search button 
    const renderProduct = (userInput) => {
        setIsBtnOpen(true);
        const filterProduct = productDetails.filter((curElem) => {
            return curElem.Cat.toLowerCase().includes(userInput.toLowerCase());
        })
        setProduct(filterProduct);
        setInputBtn("");
        navigate("/product");
    }

    // view eye icon function 
    const seeProduct = (product) => {
        setSeePrdct([{ ...product }])
        setShowModal(true)
    }

    // toast notification function 
    const toastNotify = (message, position, type, autoClose) => {
        toast(message, { position, type, autoClose })
    }

    // add To Cart Function 
    const addToCart = (item) => {
        const exist = cart.find((curElem) => curElem.id === item.id)
        if (exist) {
            toastNotify("product is already in your cart", "top-right", "info", 1000);
        }
        else {
            setCart([...cart, { ...item, qty: 1 }]);
            toastNotify("Product successfully added to cart", "top-right", "success", 1000)
        }
    }

    // Add product to favorite list function 
    const addToFavorite = (product) => {
        const checkProduct = favorite.find((curElem) => curElem.id === product.id);
        if(checkProduct){
            toastNotify("Item is already in your favorites.", "top-right", "info", 1000);
        }else{
            setFavorite([...favorite, product]);
            toastNotify("Product added to favorites Successfully", "top-right", "success", 1000)
        }
    }

    // handle login and signup form validation
    const nameValidation = (fullName) => {
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(fullName)
    }
    const emailValidation = (eml) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(eml);
    }
    const passwordValidation = (pswd) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(pswd)
    }

    return (
        <>
            <UserContext.Provider value={{
                inputBtn, setInputBtn,
                renderProduct,
                seeProduct,
                product, setProduct,

                seePrdct, setSeePrdct,
                cart, setCart,
                addToCart,
                showIcon,
                addToFavorite,
                favorite,
                setFavorite,
                showModal,
                setShowModal,
                showPassword,
                setShowPassword,
                emailValidation,
                passwordValidation,
                emailError,
                passwordError,
                confirmPaswordError,
                setError,
                nameValidation,
                isBtnOpen, setIsBtnOpen
            }}>
                {children}
                <ToastContainer />
            </UserContext.Provider>
        </>
    )

}
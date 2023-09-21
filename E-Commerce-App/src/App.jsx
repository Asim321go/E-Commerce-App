import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./contextAPI/context";

import Nav from "./Header & Footer/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact" 
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./CartRelatedComponents/Cart"
import LoginForm from "./login form/LoginForm";
import SignUp from "./login form/SignUp";
import FavoriteProduct from "./CartRelatedComponents/FavoriteProduct";
import NoPage from "./pages/NoPage";
import Footer from "./Header & Footer/Footer";


const App = () => {

    return (
        <>
            <AppProvider>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/favorite" element={<FavoriteProduct />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
                <Footer />
            </AppProvider>
        </>
    );
};

export default App;

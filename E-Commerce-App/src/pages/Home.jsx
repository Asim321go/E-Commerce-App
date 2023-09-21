import "../pages/home.css";
import { BsArrowRight } from 'react-icons/bs';
import { FaTruckMoving } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { ImHeadphones } from 'react-icons/im';
import { BsCart } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import HomeProduct from "../Products/HomeProduct";
import EyeIcon from "../CartRelatedComponents/EyeIcon"
import { UserContext } from "../contextAPI/context";
import { useContext } from "react";



const Home = () => {

    // Reacive function from UserContex using useContext Hook 
    const MyFunction = useContext(UserContext);

    // Destructure function from UserContext using MyFunction variable 
    const { seeProduct, addToCart, addToFavorite } = MyFunction;

    return (
        <>
            <section className="top-banner">
                <div className="home-container container">
                    <div className="text-box">
                        <h2>The Best Note Book Collection 2023</h2>
                        <Link to="/product" className="link">Shop Now  <BsArrowRight className="arrow-icon" /></Link>
                    </div>
                    <div className="img-box">
                        <img src="./img/slider-img.png" alt="sliderimg" />
                    </div>
                </div>
            </section>

            <section className="product-box container">
                <div className="product-container">
                    <div className="product-type">
                        <div className="box">
                            <img src="./img/Mobile Phone.png" alt="mobile-phone" />
                        </div>
                        <div className="details">
                            <p>23 Products</p>
                        </div>
                    </div>
                    <div className="product-type">
                        <div className="box">
                            <img src="./img/smart watch.png" alt="smart watch" />
                        </div>
                        <div className="details">
                            <p>20 Products</p>
                        </div>
                    </div><div className="product-type">
                        <div className="box">
                            <img src="./img/headphone.png" alt="Headphones" />
                        </div>
                        <div className="details">
                            <p>18 Products</p>
                        </div>
                    </div>
                    <div className="product-type">
                        <div className="box">
                            <img src="../img/cpu heat.jpg" alt="cpu heat"
                                style={{ mixBlendMode: "multiply" }} />
                        </div>
                        <div className="details">
                            <p>23 Products</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about container">
                <div className="about-boxes">
                    <div className="box">
                        <div className="icon">
                            <FaTruckMoving />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping </h3>
                            <p>order above ₹1000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsCurrencyDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund </h3>
                            <p>Money Bank Guarenty</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <CiPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3>
                            <p>On Every Order</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <ImHeadphones />
                        </div>
                        <div className="detail">
                            <h3>Customer Support </h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product">
                <h2>Top Product</h2>
                <EyeIcon addToCart={addToCart} />
                <div className="product-page container">
                    {
                        HomeProduct.map((curElem, index) => {
                            return (
                                <div key={index} className="prdct-bx">
                                    <div className="image-box">
                                        <img src={curElem.Img} alt={curElem.Title} />
                                        <div className="product-icon">
                                            <li><BsCart onClick={() => addToCart(curElem)} /></li>
                                            <li><BsEye onClick={() => seeProduct(curElem)} /></li>
                                            <li><AiOutlineHeart onClick={() => addToFavorite(curElem)} /></li>
                                        </div>
                                    </div>
                                    <div className="prdct-details">
                                        <p>{curElem.Cat}</p>
                                        <h3>{curElem.Title}</h3>
                                        <h4>₹{curElem.Price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* -----------trendign-banner-------------*/}
            <section className="trending-section container">
                <div className="trend-banner">
                    <div className="content">
                        <p>LATEST TECHNOLOGY ADDED</p>
                        <h3>Apple iPad 10.2 9th Gen - 2021</h3>
                        <h5>₹ 10999</h5>
                        <Link to="/product" className="link">Shop Now  <BsArrowRight className="arrow-icon" /></Link>
                    </div>
                    <div className="trend-image">
                        <img src="./img/slider-img.png" alt="trending-image" />
                    </div>
                </div>
            </section>
        </>
    )
}




export default Home;
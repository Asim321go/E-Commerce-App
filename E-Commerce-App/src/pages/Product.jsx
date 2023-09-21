
import productDetails from "../Products/productDetails";
import { LuShoppingCart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import "./product.css";
import { UserContext } from "../contextAPI/context";
import { useContext } from "react";
import EyeIcon from "../CartRelatedComponents/EyeIcon"
import PageNotFound from "./PageNotFound";



const Product = () => {
    //  receive data from context
    const state = useContext(UserContext);

    // destructuring state from contex state 
    const { product, setProduct, seeProduct, addToCart, addToFavorite } = state;


    // filter product by categories 
    const filterProduct = (productName) => {
        const filter = productDetails.filter((curElem) => curElem.Cat === productName)
        setProduct(filter);
    }

    const allProduct = () => {
        setProduct(productDetails);
    }

    return (
        <>
            {
                product.length === 0 &&
                <PageNotFound />
            }

            <EyeIcon addToCart={addToCart} />
            <section className="product-section">
                <div className="product-details container">
                    <h2># PRODUCTS</h2>
                    <p>Home . Products</p>
                    <div className="prdct-main-box">
                        <div className="product-detail-list">
                            <h3>catagories</h3>
                            <ul>
                                <li onClick={() => allProduct()}>All Products</li>
                                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                                <li onClick={() => filterProduct("Smart Watch")}>Smart Watch</li>
                                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                                <li onClick={() => filterProduct("Camera")}>Camera</li>
                                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
                            </ul>
                        </div>
                        <div className="product-card container">
                            {product.map((curElem, index) => {
                                return (
                                    <div key={curElem.id} className="card-box">
                                        <div className="image-box" >
                                            <img src={curElem.Img} alt={curElem.Title} />
                                            <div className="product-icon">
                                                <li>
                                                    <LuShoppingCart onClick={() => addToCart(curElem)} />
                                                </li>
                                                <li>
                                                    <FiEye onClick={() => seeProduct(curElem)} />
                                                </li>
                                                <li>
                                                    <GoHeart onClick={() => addToFavorite(curElem)} />
                                                </li>
                                            </div>
                                        </div>
                                        <div className="prdct-details">
                                            <p>{curElem.Cat}</p>
                                            <h3>{curElem.Title}</h3>
                                            <h4>₹{curElem.Price}</h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;

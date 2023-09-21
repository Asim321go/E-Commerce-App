import { UserContext } from "../contextAPI/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import "./favproduct.css";

const FavoriteProduct = () => {
    // Receive state from UserContext using useContext Hook
    const state = useContext(UserContext);

    // destructure state from context api using state variable
    const { favorite, setFavorite, addToCart } = state;

    // remove product from favorite (wishlist)
   const deletProduct = (product) => {
    const remove = favorite.filter((curElem) => curElem.id !== product.id);
    setFavorite(remove);
   }


    return (
        <>
            {favorite.length === 0 && (
                <section className="wishlist-section">
                    <div className="empty-wishlish">
                        <h2>Your wishlist is empty</h2>
                        <p>
                            Add items that you like to your wishlist. Review them anytime and
                            easily move them to the bag.
                        </p>
                        <img src="./img/emptywishlist.jpg" alt="wishlist-image" />
                        <Link to="/product">
                            <button>Continue shopping</button>
                        </Link>
                    </div>
                </section>
            )}
            <section className="favorite">
                <div className="favorite-product container">
                    {favorite.map((curElem) => {
                        return (
                            <div key={curElem.id} className="fav-card">
                                <span>
                                    <MdDelete className="close-btn"
                                        onClick={() => deletProduct(curElem)}
                                    />
                                </span>
                                <div className="fav-img">
                                    <img src={curElem.Img} alt={curElem.Title} />
                                </div>
                                <div className="fav-data">
                                    <h4>{curElem.Title}</h4>
                                    <h3>Rs.{curElem.Price}</h3>
                                    <button onClick={() => addToCart(curElem)}>Add To Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default FavoriteProduct;

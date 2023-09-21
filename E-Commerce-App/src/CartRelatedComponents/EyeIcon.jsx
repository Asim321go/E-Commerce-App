import "../CartRelatedComponents/eyeIcon.css"
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contextAPI/context";





const EyeIcon = ({ addToCart }) => {

    // recieve data from context 
    const state = useContext(UserContext);

    // destructure state from state variable 
    const { seePrdct, showModal, setShowModal, } = state;
    
    // ________stop body scroll when modal is open_______
  useEffect(() => {
    if(showModal){
        document.body.style.overflowY = "hidden"
    }
    return () => {
        document.body.style.overflowY = "auto";
    }
  }, [showModal])

    return (
        <>
            <section className={showModal ? "modal open" : "modal"}>
                        <div className="see-product-container container">
                            <div className="close-icon-div">
                                <li><IoMdClose onClick={() => setShowModal(false)} /></li>
                            </div>
                            {
                                seePrdct.map((curElem) => {
                                    return (
                                        <>
                                            <div className="see-image-box">
                                                <img src={curElem.Img} alt={curElem.Title} />
                                            </div>
                                            <div className="see-img-content">
                                                <p>{curElem.Cat}</p>
                                                <h3>{curElem.Title}</h3>
                                                <p>A Screen Everyone will love Whether your family is streaming or video chatting whith freinds tablet A8....</p>
                                                <h4>Rs.{curElem.Price}</h4>
                                                <button onClick={() => addToCart(curElem)}>Add To Cart</button>
                                            </div>
                                        </>

                                    );
                                })
                            }
                        </div> 
            </section>
        </>
    )
}




export default EyeIcon;
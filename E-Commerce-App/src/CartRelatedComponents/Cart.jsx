import "./cart.css";
import { useContext } from "react";
import { UserContext } from "../contextAPI/context";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdRemove, MdDelete } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";

const Cart = () => {
  // receive data from context api
  const contextState = useContext(UserContext);
  // destructure state from context
  const { cart, setCart } = contextState;

  // increment quantity
  const incQty = (item) => {
    const matchProduct = cart.map((curElem) => curElem.id === item.id ? { ...item, qty: curElem.qty + 1 } : curElem)
    setCart(matchProduct);
  }
  // decrement quantity
  const decrQty = (item) => {
    if (item.qty > 1) {
      setCart(
        cart.map((curElem) => {
          return curElem.id === item.id ? { ...item, qty: curElem.qty - 1 } : curElem
        })
      )
    }
  }
  // total price of cart item
  const total = cart.reduce((total, curElem) => {
    return total + parseFloat(curElem.Price) * curElem.qty
  }, 0)

  // remove cart product using delete button
  const removeItem = (item) => {
    const deleteProduct = cart.filter((curElem) => curElem.id !== item.id)
    setCart(deleteProduct);
  }


  return (
    <>
      {
        cart.length === 0 &&
        <div className="empty-cart">
          <h2>Cart Is Empty</h2>
          <Link to="/product">Shop Now</Link>
        </div>
      }
      <section className="cartsection container">
        {cart.map((curElem, index) => {
          return (
            <div className="addtocartcontainer" key={index}>
              <div className="cart-img-box">
                <img src={curElem.Img} alt={curElem.Title} />
              </div>
              <div className="cart-details">
                <p>{curElem.Cat}</p>
                <h3>{curElem.Title}</h3>
                <h5>Price: ₹{curElem.Price}</h5>
                <div className="qty-box">
                  <button onClick={() => incQty(curElem)}>
                    <IoMdAdd className="addbtn" />
                  </button>
                  <input type="text" value={curElem.qty} />
                  <button onClick={() => decrQty(curElem)}>
                    <MdRemove className="removebtn" />
                  </button>
                </div>
                <h4>SubTotal : ₹{curElem.Price * curElem.qty}</h4>
                <i>
                  <MdDelete className="closeicon"
                    onClick={() => removeItem(curElem)}
                  />
                </i>
                <Link to="/product">
                  <AiOutlineRollback className="backtoproduct" />
                </Link>
              </div>
            </div>
          );
        })}
        {
          cart.length > 0 &&
          <div className="checkout-box">
            <h2>Total : ₹{total}</h2>
            <button>Checkout</button>
          </div>
        }

      </section>
    </>
  );
};

export default Cart;

import "./nav.css";
import { FaTruckMoving, FaHome, FaUser } from "react-icons/fa";
import { FiUser, FiLogOut, FiHeart, FiSearch, FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import { BiLogoShopify } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { MdLogin, MdTextsms } from "react-icons/md";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contextAPI/context";


const Nav = () => {

  const [mobileNavBtn, setMobileNavBtn] = useState(false);

  // receive data from UserContext using useContext Hook
  const state = useContext(UserContext);

  const { inputBtn, setInputBtn, renderProduct, isBtnOpen, setIsBtnOpen } = state;

  // ____________toggle_mobile_navbar_button____________
  const toggelMobileNav = () => {
    setMobileNavBtn(!true);
  };
  // _________hide_body_scroll_when_user_click_on_mobile_nav_button_______
  useEffect(() => {
    if (mobileNavBtn) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [mobileNavBtn]);

  return (
    <>
      {/* top free shiping section and welocme data details  */}
      <section className="freeship">
        <div className="free-ship-container">
          <div className="free-ship">
            <p>
              <FaTruckMoving className="truck-ship" />
            </p>
            <p className="top-heading">FREE Shipping shoping up to ₹ 2000</p>
          </div>
          <div className="log-in-data">
            <p> <FiUser /> Welcome,</p>
              <p style={{ whiteSpace: "nowrap" }}></p>
          </div>
        </div>
      </section>

      {/* Logo and Search button section  */}
      <section>
        <div className="main-header container">
          <div className="logo-container">
            <div className="logo-div">
              <Link to="/">
                <img src="./img/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search Your Product"
                value={inputBtn}
                onChange={(e) => setInputBtn(e.target.value)}
              />
              <button onClick={() => renderProduct(inputBtn)}>Search</button>
            </div>

            {/* search button in responsive mobile phone */}
            <div className={isBtnOpen ? "mobile-srch-btn open" : "mobile-srch-btn"}>
              {isBtnOpen && (
                <div> 
                  <i><FiArrowLeft onClick={() => setIsBtnOpen(!true)} /></i>
                  <input
                    type="text"
                    placeholder="Search Your Product"
                    value={inputBtn}
                    onChange={(e) => setInputBtn(e.target.value)} />
                </div>
              )}
              <span onClick={() => renderProduct(inputBtn)}>
                <FiSearch />
              </span>
            </div>
          </div>
          <div className="cart-container">
            <p>
              <FiUser className="icon" />
            </p>
            <p>
              <Link to="/favorite" className="icon">
                <FiHeart />
              </Link>
            </p>
            <p>
              <Link to="/cart" className="icon">
                <BsBagCheck />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Navbar and login button section  */}
      <section>
        <header className="container header">
          <div className="navbar">
            <span className="mobile-nav-btn">
              <CgMenu onClick={() => setMobileNavBtn(true)} />
            </span>
            <nav>
              <ul className={mobileNavBtn ? "list is-open" : "list"}>
                <span className="mobile-nav-close-btn">
                  <CgClose onClick={toggelMobileNav} />
                </span>
                <span className="mobile-nav-login-user">
                  <FaUser />
                </span>
                <div className="nav-icons-for-phone">
                  <li>
                    <Link to="/" onClick={toggelMobileNav}>
                      <FaHome className="mob-icon" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" onClick={toggelMobileNav}>
                      <FiShoppingCart className="mob-icon" />
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={toggelMobileNav}>
                      <BiLogoShopify className="mob-icon" /> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={toggelMobileNav}>
                      <MdTextsms className="mob-icon" />
                      Contact
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
            <div className="login-icon">
                {/* <span className="log-button">
                  Log out <FiLogOut className="log-icon" />
                </span> */}
               
                <Link to="/login">
                  <span className="log-button">
                    Log in <MdLogin className="log-icon" />
                  </span>
                </Link>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Nav;

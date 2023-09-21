import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';
import { BiLogoYoutube } from 'react-icons/bi';
import "./footer.css";


const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="footer-boxes container">
                    <div className="about">
                        <img src="./img/logo.svg" alt="logo" />
                        <p>We are a team of Designer and developers That create high quality WordPress</p>
                        <div className="icon">
                            <li><BiLogoFacebook /></li>
                            <li><FaInstagram /></li>
                            <li><TiSocialTwitter /></li>
                            <li><BiLogoYoutube /></li>
                        </div>
                    </div>
                    <div className="account">
                        <h2>My Account</h2>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>shipping</li>
                            <li>return</li>
                        </ul>
                    </div>
                    <div className="pages">
                        <h2>Pages</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Term & Conditions</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Footer;
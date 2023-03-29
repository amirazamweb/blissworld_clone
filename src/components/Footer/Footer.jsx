import style from './Footer.module.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.child1}>
                <div><img src={logo} alt="logo" /></div>
                <div>
                    <h3>COMPANY</h3>
                    <p><Link to="#">Who we are</Link></p>
                    <p><Link to="#">Find Bliss Near You</Link></p>
                    <p><Link to="#">Bliss Spa</Link></p>
                    <p><Link to="#">Shop</Link></p>
                </div>
                <div>
                    <h3>CUSTOMER CARE</h3>
                    <p><Link to="#">Gift Cards</Link></p>
                    <p><Link to="#">Contact Us</Link></p>
                    <p><Link to="#">Shipping</Link></p>
                    <p><Link to="#">Returns</Link></p>
                    <p><Link to="#">Ordering & Payment</Link></p>
                    <p><Link to="#">SMS Texts and Alerts</Link></p>
                </div>
                <div>
                    <h3>THE DRY STUFF</h3>
                    <p><Link to="#">Privacy Policy</Link></p>
                    <p><Link to="#">Terms & Conditions</Link></p>
                    <p><Link to="#">Accessibility Statement</Link></p>
                    <p><Link to="#">Sitemap</Link></p>
                    <br />
                    <h3>THE FUN STUFF</h3>
                    <div className={style.social_icon}>
                        <Link to="#"><i class="fa-brands fa-instagram"></i></Link>
                        <Link to="#"><i class="fa-brands fa-youtube"></i></Link>
                        <Link to="#"><i class="fa-brands fa-tiktok"></i></Link>
                    </div>
                    <br />
                    <p>© 2023 BlissWorld Inc.</p>
                </div>
            </div>
            <div className={style.child2}>
                <h3>Hear the lastest.</h3>
                <p>(new products, exclusive offers and other suprises)</p>
                <input type="email" name="" id="" placeholder='Enter your email...' />
                <button><Link to="#">SUBMIT</Link></button>
            </div>
        </div>
    )
}

export default Footer;
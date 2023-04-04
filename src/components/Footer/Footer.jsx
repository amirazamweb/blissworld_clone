import style from './Footer.module.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const moveToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className={style.footer}>
            <div className={style.child1}>
                <div><img src={logo} alt="logo" /></div>
                <div>
                    <h3>COMPANY</h3>
                    <p onClick={moveToTop}><Link to="/pages/who-we-are">Who we are</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/find-a-bliss-near-you">Find Bliss Near You</Link></p>
                    <p onClick={moveToTop}><Link to="https://www.blissspa.com/" target='_blank'>Bliss Spa</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/collections">Shop</Link></p>
                </div>
                <div>
                    <h3>CUSTOMER CARE</h3>
                    <p onClick={moveToTop}><Link to="/pages/contact">Contact Us</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/shipping">Shipping</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/returns">Returns</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/ordering-payment">Payment & Gift Cards</Link></p>
                </div>
                <div>
                    <h3>THE DRY STUFF</h3>
                    <p onClick={moveToTop}><Link to="/pages/privacy-policy">Privacy Policy</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/terms-conditions">Terms & Conditions</Link></p>
                    <p onClick={moveToTop}><Link to="/pages/accessibility">Accessibility</Link></p>
                    <br />
                    <h3>THE FUN STUFF</h3>
                    <div className={style.social_icon}>
                        <Link to="https://www.instagram.com/bliss/" target="_blank"><i class="fa-brands fa-instagram"></i></Link>
                        <Link to="https://www.youtube.com/user/blissbeautyblog" target="_blank"><i class="fa-brands fa-youtube"></i></Link>
                        <Link to="https://www.facebook.com/blissworld/" target="_blank"><i class="fa-brands fa-facebook-f"></i></Link>
                        <Link to="https://in.pinterest.com/blissworld/" target="_blank"><i class="fa-brands fa-pinterest-p"></i></Link>
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
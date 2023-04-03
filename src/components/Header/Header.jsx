import style from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bag } from '../../redux/action';

const Header = () => {

    let temp = JSON.parse(localStorage.getItem('cardKey')) || [];

    const [toggler, setToggler] = useState(true);

    let showOrderList = useSelector((data) => data.showOrderList);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const bagClickHandler = () => {
        dispatch(bag(toggler ? 'on' : 'off'));
        setToggler(toggler ? false : true);
    }

    const redirectToHomePage = () => {
        window.scrollTo(0, 0);
        navigate('/');
    }

    const scrollTop = () => {

        window.scrollTo(0, 0);
    }

    return (
        <div className={style.header}>
            <div className={style.child1}>
                <div>
                    <i class="fa-solid fa-magnifying-glass">
                        <span className={style.icon_desc}>search</span>
                    </i>
                    <i class="fa-sharp fa-solid fa-location-dot">
                        <span className={style.icon_desc}>find us</span>
                    </i>
                </div>
                <div><h1 onClick={redirectToHomePage}>bliss</h1></div>
                <div>
                    <i class="fa-regular fa-hand">
                        <span className={style.icon_desc}>account</span>
                    </i>
                    <i className="fa-solid fa-bag-shopping" onClick={bagClickHandler}>
                        <span className={style.icon_desc}>bag</span>
                        {temp.length != 0 && <span className={style.order_count}>{temp.length}</span>}
                    </i>
                </div>
            </div>
            <div className={style.child2}>
                <div onClick={scrollTop}><Link to="/best-sellers">BEST SELLERS</Link></div>
                <div onClick={scrollTop}><Link to="/skincare">SKINCARE</Link></div>
                <div onClick={scrollTop}><Link to="/body-and-haircare">BODY & HAIR CARE</Link></div>
                <div onClick={scrollTop}><Link to="/sets-and-kits">SETS & KITS</Link></div>
                <div onClick={scrollTop}><Link to="/sale">SALE</Link></div>
                <div onClick={scrollTop}><Link to="https://bliss.jebbit.com/7bq7prks?L=Owned+Web" target="_blank">THIS IS BLISS</Link></div>
            </div>

            {showOrderList && <OrderList />}

        </div>
    )
}

export default Header;
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import OrderList from '../OrderList/OrderList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bag } from '../../redux/action';

const Header = () => {

    const [toggler, setToggler] = useState(true);

    let showOrderList = useSelector((data) => data.showOrderList);

    let dispatch = useDispatch();

    const bagClickHandler = () => {
        dispatch(bag(toggler ? 'on' : 'off'));
        setToggler(toggler ? false : true);
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
                <div><h1>bliss</h1></div>
                <div>
                    <i class="fa-regular fa-hand">
                        <span className={style.icon_desc}>account</span>
                    </i>
                    <i class="fa-solid fa-bag-shopping" onClick={bagClickHandler}>
                        <span className={style.icon_desc}>bag</span>
                        <span className={style.order_count}>23</span>
                    </i>
                </div>
            </div>
            <div className={style.child2}>
                <div><Link to="">BEST SELLERS</Link></div>
                <div><Link to="">SKINCARE</Link></div>
                <div><Link to="">BODY & HAIR CARE</Link></div>
                <div><Link to="">SETS & KITS</Link></div>
                <div><Link to="">SHOP ALL</Link></div>
                <div><Link to="">THIS IS BLISS</Link></div>
            </div>

            {showOrderList && <OrderList />}

        </div>
    )
}

export default Header;
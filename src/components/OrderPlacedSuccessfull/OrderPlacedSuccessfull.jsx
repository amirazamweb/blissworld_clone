import { useNavigate } from 'react-router-dom';
import style from './OrderPlacedSuccessfull.module.css';
import { closeCheckoutPopup } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const OrderPlacedSuccessfull = () => {

    let orderplacedCount = localStorage.getItem('count_p_o') || 0;

    useEffect(() => {
        localStorage.setItem('count_p_o', ++orderplacedCount);
    }, [])

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const navigateToHome = () => {
        window.scrollTo(0, 0);
        navigate('/');
        dispatch(closeCheckoutPopup());
        localStorage.setItem('cardKey', JSON.stringify([]));
    }

    return (
        <div className={style.order_placed_successful}>
            <div><i class="fa-regular fa-circle-check"></i></div>
            <div>Your order is placed successfully!</div>
            <div>Order Id: {orderplacedCount}</div>
            <div className={style.close_popup} onClick={navigateToHome}><i class="fa-solid fa-xmark"></i></div>
        </div>
    )
}

export default OrderPlacedSuccessfull;
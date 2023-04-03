import style from './OrderPopUp.module.css'
import { closePopUp } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OrderPopUp = () => {

    let { img, title, desc } = useSelector((data) => data.popupData);

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const closePopUpHandler = () => {
        dispatch(closePopUp());
    }

    const shoppingHandler = () => {
        dispatch(closePopUp());
    }

    const redirectToCart = () => {
        window.scrollTo(0, 0);
        dispatch(closePopUp());
        navigate('/cart');
    }

    return (
        <div className={style.orderPopUp}>
            <div>
                <div><img src={img} alt="popup" /></div>
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
            <div>
                <button onClick={shoppingHandler}>CONTINUE SHOPPING</button>
                <button onClick={redirectToCart}>VIEW BAG</button>
            </div>
            <i class="fa-solid fa-xmark" onClick={closePopUpHandler}></i>
        </div>
    )
}

export default OrderPopUp;
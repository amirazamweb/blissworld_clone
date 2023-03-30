import style from './OrderPopUp.module.css'
import { closePopUp } from '../../redux/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OrderPopUp = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const closePopUpHandler = () => {
        dispatch(closePopUp());
    }

    const shoppingHandler = () => {
        dispatch(closePopUp());
        navigate('/');
    }

    return (
        <div className={style.orderPopUp}>
            <div>
                <div><img src="https://cdn.shopify.com/s/files/1/0702/9017/8333/products/BLISS_Bright_Idea_Vitamin_C_MOISTURIZER_50ml_JAR_FINALupdated__91912.1674082802.1280.1280.jpg" alt="popup" /></div>
                <div>
                    <h4>ITEM ADDED TO BAG!</h4>
                    <p>Bright Idea Moisturizer</p>
                </div>
            </div>
            <div>
                <button onClick={shoppingHandler}>CONTINUE SHOPPING</button>
                <button>VIEW BAG</button>
            </div>
            <i class="fa-solid fa-xmark" onClick={closePopUpHandler}></i>
        </div>
    )
}

export default OrderPopUp;
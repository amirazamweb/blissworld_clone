import style from './TotalOrderAmount.module.css';
import paymentImg from './../../payment_img.PNG';
import { useNavigate } from 'react-router-dom';

const TotalOrderAmount = ({ orderItems }) => {

    let totalAmount = 0;

    orderItems.forEach(element => {
        totalAmount += Number(element.price) * (element.itemCount);
    });

    let navigate = useNavigate();

    const redirectToCheckOut = () => {
        window.scrollTo(0, 0);
        navigate('/checkout');
    }

    return (
        <div className={style.totalOrderAmount}>
            <div>
                <img src={paymentImg} alt="payment_img" />
            </div>
            <div>
                <h3>Total: ${totalAmount}</h3>
                <p>Shipping & taxes calculated at checkout</p>
                <button onClick={redirectToCheckOut}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default TotalOrderAmount;
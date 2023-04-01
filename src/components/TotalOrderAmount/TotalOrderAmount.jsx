import style from './TotalOrderAmount.module.css';
import paymentImg from './../../payment_img.PNG';
const TotalOrderAmount = () => {
    return (
        <div className={style.totalOrderAmount}>
            <div>
                <img src={paymentImg} alt="payment_img" />
            </div>
            <div>
                <h3>Total: $2,082</h3>
                <p>Shipping & taxes calculated at checkout</p>
                <button>CHECKOUT</button>
            </div>
        </div>
    )
}

export default TotalOrderAmount;
import style from './Checkout.module.css';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    let navigate = useNavigate();

    let cardLength = JSON.parse(localStorage.getItem('cardKey')).length;

    useEffect(() => {
        !cardLength && navigate('/');
    })

    const getDataFromStoarage = () => {
        let data = JSON.parse(localStorage.getItem('cardKey')) || [];
        setCheckoutData(data);
    }

    let [checkoutData, setCheckoutData] = useState([]);

    let total = 0;

    checkoutData.forEach((elm) => {
        total += (elm.price * Number(elm.itemCount));
    })

    useEffect(() => {
        getDataFromStoarage();
    }, [])

    return (
        !cardLength ?
            <div className={style.loading}>Loading....</div> :
            <div className={style.main}>
                <CheckoutForm />
                <div className={style.child2}>
                    <div>
                        {
                            checkoutData.map((elm, i) => {
                                return <CheckoutItem
                                    key={elm.i}
                                    img={elm.img}
                                    title={elm.title}
                                    price={elm.price}
                                    itemCount={elm.itemCount}
                                />
                            })
                        }
                    </div>
                    <div><p>Subtotal <span>${total}</span></p></div>
                    <div><p>Shipping <span>$20</span></p></div>
                    <div><p>Total <span>${total + 20}</span></p></div>
                </div>
            </div>
    )
}

export default Checkout;
import style from './Cart.module.css';
import CartItem from '../../components/CartItem/CartItem';
import TotalOrderAmount from '../../components/TotalOrderAmount/TotalOrderAmount';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const getStoreData = () => {
        let data = JSON.parse(localStorage.getItem('cardKey')) || [];
        console.log(data);
        setStoreData(data);
    }

    let [storeData, setStoreData] = useState([]);
    let removedItemCount = useSelector((data) => data.detect_remove_click_count);
    let navigate = useNavigate();

    useEffect(() => {
        getStoreData();
    }, [removedItemCount]);

    const backToShopping = () => {
        navigate('/');
    }

    return (
        storeData.length ?

            <div className={style.main}>
                <h1>Cart</h1>
                <div className={style.heading}>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
                {storeData.map((elm, i) => {
                    return <CartItem
                        img={elm.img}
                        title={elm.title}
                        desc={elm.desc}
                        price={elm.price}
                        itemCount={elm.itemCount}
                        index={i}
                    />
                })}
                <TotalOrderAmount />
            </div> :

            <div className={style.order_details_container} >
                <p>Not any items added to the cart</p>
                <Button value={'Back to shopping'} click={backToShopping} />
            </div>

    )
}

export default Cart;
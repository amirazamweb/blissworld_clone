import style from './OrderList.module.css';
import { Link, useNavigate } from 'react-router-dom';
import OrderListCard from '../OrderListCard/OrderListCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bag } from '../../redux/action';
import Button from './../Button/Button';

const OrderList = () => {

    let removedItemCount = useSelector((data) => data.detect_remove_click_count);

    const getStoreData = () => {
        let data = JSON.parse(localStorage.getItem('cardKey')) || [];
        setStoreData(data);
    }

    let [storeData, setStoreData] = useState([]);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        getStoreData();
    }, [removedItemCount])

    const backToShopping = () => {
        dispatch(bag('off'));
        navigate('/');
    }

    const redirectToCart = () => {
        window.scrollTo(0, 0);
        dispatch(bag('off'));
        navigate('/cart');
    }

    return (
        storeData.length ?
            <div className={style.order_details_container}>
                <div><span onClick={backToShopping}><Link to="/">&lt;KEEP SHOPPING</Link></span>
                    <span onClick={redirectToCart}>VIEW FULL SHOPPING BAG&gt;</span></div>
                <div>
                    <h3>Shopping Bag</h3>
                    <p>({storeData.length} Items)</p>
                </div>

                {storeData.map((e, i) => {
                    return <OrderListCard
                        key={i}
                        title={e.title}
                        desc={e.desc}
                        price={e.price}
                        itemCount={e.itemCount}
                        img={e.img}
                        index={i}
                    />
                })}
            </div> :
            <div className={style.order_details_container} style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '8px' }}>Not any items added to the list</p>
                <Button value={'Back to shopping'} click={backToShopping} />
            </div>
    )
}

export default OrderList;
import style from './OrderList.module.css';
import { Link } from 'react-router-dom';
import OrderListCard from '../OrderListCard/OrderListCard';

const OrderList = () => {

    // let data = JSON.parse(localStorage.getItem('cardKey'));

    return (
        <div className={style.order_details_container}>
            <div><Link to="#">&lt;KEEP SHOPPING</Link> <span><Link to="#">VIEW FULL SHOPING BAG&gt;</Link></span></div>
            <div>
                <h3>Shopping Bag</h3>
                <p>(4 Items)</p>
            </div>
            {/* <OrderListCard />
            <OrderListCard /> */}
            {/* <OrderListCard />
            <OrderListCard />
            <OrderListCard />
            <OrderListCard /> */}
            {/* {data.map((e) => {
                return <OrderList desc={e.desc} img={e.img} itemCount={e.itemCount} price={e.price} title={e.title} />
            })} */}
        </div>
    )
}

export default OrderList;
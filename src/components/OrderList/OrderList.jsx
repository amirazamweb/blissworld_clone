import style from './OrderList.module.css';
import { Link } from 'react-router-dom';
import OrderListCard from '../OrderListCard/OrderListCard';

const OrderList = () => {
    return (
        <div className={style.order_details_container}>
            <div><Link to="#">&lt;KEEP SHOPPING</Link> <span><Link to="#">VIEW FULL SHOPING BAG&gt;</Link></span></div>
            <div>
                <h3>Shopping Bag</h3>
                <p>(4 Items)</p>
            </div>
            <OrderListCard />
            <OrderListCard />
            <OrderListCard />
            <OrderListCard />
            <OrderListCard />
            <OrderListCard />
        </div>
    )
}

export default OrderList;
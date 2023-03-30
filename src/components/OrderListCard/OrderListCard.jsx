import style from './OrderListCard.module.css';
import { Link } from 'react-router-dom';

const OrderListCard = ({ img, price, title, desc, itemCount }) => {
    return (
        <div className={style.order_details}>
            <div><img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/445/1453/Mighty_Biome_Moisturizer_Concentrate_Front__97825.1674081071.jpg" alt="card-image" /></div>
            <div>
                <p>{title}</p>
                <p>{desc}</p>
                <div>
                    <div>
                        <i class="fa-solid fa-minus"></i>
                        <span>{itemCount}</span>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div><small><Link to="">Remove</Link></small></div>
                    <div>${price}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderListCard;
import style from './OrderListCard.module.css';
import { Link } from 'react-router-dom';

const OrderListCard = () => {
    return (
        <div className={style.order_details}>
            <div><img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/445/1453/Mighty_Biome_Moisturizer_Concentrate_Front__97825.1674081071.jpg" alt="card-image" /></div>
            <div>
                <p>Bright Idea Serum</p>
                <p>Vitamin C + Tri-Peptide Collagen Protecting & Brightening Serum</p>
                <div>
                    <div>
                        <i class="fa-solid fa-minus"></i>
                        <span>3</span>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div><small><Link to="">Remove</Link></small></div>
                    <div>$28</div>
                </div>
            </div>
        </div>
    )
}

export default OrderListCard;